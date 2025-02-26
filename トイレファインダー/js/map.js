import { toilets } from '/data/toilets.js';
import translations from '/data/translations.js';

let map;
let markers = {};
let currentLang = 'ja';
let currentFilters = new Set();

// マーカーアイコンの設定（トイレっぽい色に変更）
const markerIcons = {
    mcdonalds: '#FFB6C1',    // ライトピンク
    timhortons: '#E6E6FA',   // ラベンダー
    community: '#98FB98',    // ペールグリーン
    library: '#87CEEB',      // スカイブルー
    tandt: '#DDA0DD',       // プラム
    gasstation: '#F0E68C',  // カーキ
    superstore: '#FFB6C1',  // ライトピンク
    college: '#B0E0E6',     // パウダーブルー
    other: '#D3D3D3'        // ライトグレー
};

// カスタムアイコンを作成
function createCustomIcon(type) {
    return L.divIcon({
        className: 'custom-marker',
        html: `<div style="
            background-color: ${markerIcons[type]};
            width: 100%;
            height: 100%;
            border-radius: 50%;
            border: 2px solid white;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        "></div>`,
        iconSize: [24, 24],
        iconAnchor: [12, 12]
    });
}

// マーカーのポップアップコンテンツを生成
function createPopupContent(toilet) {
    const typeIcon = getTypeIcon(toilet.type);
    
    // 名前、住所、営業時間を適切に取得
    const name = typeof toilet.name === 'object' ? toilet.name.ja : toilet.name;
    const address = typeof toilet.address === 'object' ? toilet.address.ja : toilet.address;
    const hours = typeof toilet.hours === 'object' ? toilet.hours.ja : toilet.hours;

    // 評価の表示を作成
    const ratingDisplay = toilet.ratings.length > 0 
        ? `<div class="rating">★★★★☆ (${toilet.ratings.length})</div>`
        : '';

    // 表示する機能を'open24h', 'accessible', 'babyChanging'のみに制限
    const displayFeatures = toilet.features.filter(feature => 
        ['open24h', 'accessible', 'babyChanging'].includes(feature)
    );

    return `
        <div class="popup-content">
            <h3><i class="fas ${typeIcon}"></i> ${name}</h3>
            <p><i class="fas fa-map-marker-alt"></i> ${address}</p>
            <p><i class="fas fa-clock"></i> ${hours}</p>
            <div class="popup-features">
                ${displayFeatures.map(feature => 
                    `<span class="feature-tag">
                        <i class="fas ${getFeatureIcon(feature)}"></i>
                        ${getFeatureText(feature)}
                    </span>`
                ).join('')}
            </div>
            ${ratingDisplay}
            <button class="view-details-btn" onclick="
                const showToiletDetail = window.toiletApp.showToiletDetail;
                showToiletDetail(${toilet.id});
                this.closest('.leaflet-popup').querySelector('.leaflet-popup-close-button').click();
            ">
                <i class="fas fa-info-circle"></i>
                詳細を見る
            </button>
        </div>
    `;
}

// 機能テキストを取得する関数を修正
function getFeatureText(feature) {
    const featureTexts = {
        'open24h': '24時間営業',
        'accessible': '多目的トイレあり',
        'babyChanging': 'おむつ交換台あり'
        // 'free'と'clean'を削除
    };
    return featureTexts[feature] || feature;
}

// アイコンタイプを取得
function getTypeIcon(type) {
    const icons = {
        mcdonalds: 'fa-burger',
        timhortons: 'fa-coffee',
        community: 'fa-people-group',
        library: 'fa-book',
        tandt: 'fa-shopping-cart',
        gasstation: 'fa-gas-pump',
        superstore: 'fa-store',
        college: 'fa-graduation-cap',
        other: 'fa-restroom'
    };
    return icons[type] || 'fa-restroom';
}

// 機能アイコンを取得
function getFeatureIcon(feature) {
    const icons = {
        open24h: 'fa-clock',
        accessible: 'fa-wheelchair',
        babyChanging: 'fa-baby',
        free: 'fa-dollar-sign'
    };
    return icons[feature] || 'fa-circle';
}

// 地図を初期化
function initMap() {
    // バンクーバーの中心座標を少し調整（より広い範囲が見えるように）
    const vancouver = [49.2500, -123.1300];
    
    // ズームレベルを12に下げて、より広い範囲を表示
    map = L.map('map').setView(vancouver, 12);
    
    // OpenStreetMapのタイルレイヤーを追加
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // マーカーを追加
    addMarkers();

    // デバッグ用のログ
    console.log('Map initialized');
    console.log('Total toilets:', toilets.length);
    console.log('First toilet position:', toilets[0].position);
}

// マーカーを追加
function addMarkers() {
    // 既存のマーカーをクリア
    Object.values(markers).forEach(marker => marker.remove());
    markers = {};

    // デバッグ用のログ
    console.log('Adding markers...');

    // フィルター適用済みのトイレデータでマーカーを作成
    getFilteredToilets().forEach(toilet => {
        console.log('Creating marker for:', toilet.name, 'at position:', toilet.position);
        
        const marker = L.marker(toilet.position, {
            icon: createCustomIcon(toilet.type)
        }).addTo(map);

        marker.bindPopup(createPopupContent(toilet));
        marker.toiletId = toilet.id;
        markers[toilet.id] = marker;
    });

    console.log('Total markers added:', Object.keys(markers).length);
}

// フィルター適用済みのトイレデータを取得
function getFilteredToilets() {
    if (currentFilters.size === 0) return toilets;
    
    return toilets.filter(toilet => 
        Array.from(currentFilters).every(filter => 
            filter === 'open24h' ? toilet.isOpen24h : toilet.features.includes(filter)
        )
    );
}

// フィルターを更新
function updateFilters(filter) {
    if (currentFilters.has(filter)) {
        currentFilters.delete(filter);
    } else {
        currentFilters.add(filter);
    }
    addMarkers();
}

// 言語を更新
function updateLanguage(lang) {
    currentLang = lang;
    Object.values(markers).forEach(marker => {
        const toilet = toilets.find(t => t.id === marker.toiletId);
        if (toilet) {
            marker.setPopupContent(createPopupContent(toilet));
        }
    });
}

// トイレの詳細位置に移動
function focusToilet(toiletId) {
    const toilet = toilets.find(t => t.id === toiletId);
    if (toilet) {
        map.setView(toilet.position, 16);
        markers[toiletId].openPopup();
    }
}

export { initMap, updateFilters, updateLanguage, focusToilet }; 