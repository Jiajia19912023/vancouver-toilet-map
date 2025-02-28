import { toilets, saveData } from '/data/toilets.js';
import { focusToilet } from '/js/map.js';

// トイレ一覧を表示
function renderToiletList() {
    const container = document.getElementById('toilet-items-container');
    container.innerHTML = '';

    toilets.forEach(toilet => {
        const item = document.createElement('div');
        item.className = 'toilet-item';
        
        const typeIcon = getTypeIcon(toilet.type);
        const typeColor = getTypeColor(toilet.type);
        
        // 名前が言語オブジェクトの場合は日本語を取得、そうでない場合はそのまま使用
        const name = typeof toilet.name === 'object' ? toilet.name.ja : toilet.name;
        const address = typeof toilet.address === 'object' ? toilet.address.ja : toilet.address;
        const hours = typeof toilet.hours === 'object' ? toilet.hours.ja : toilet.hours;
        
        // 表示する機能を'open24h', 'accessible', 'babyChanging'のみに制限
        const displayFeatures = toilet.features.filter(feature => 
            ['open24h', 'accessible', 'babyChanging'].includes(feature)
        );

        item.innerHTML = `
            <div class="toilet-header">
                <i class="fas ${typeIcon}" style="color: ${typeColor}"></i>
                <h3>${name}</h3>
                ${toilet.isOpen24h ? '<span class="open-24h">24時間営業</span>' : ''}
            </div>
            <div class="toilet-details">
                <p><i class="fas fa-map-marker-alt"></i> 住所: ${address}</p>
                <p><i class="fas fa-clock"></i> 営業時間: ${hours}</p>
                <div class="feature-tags">
                    ${displayFeatures.map(feature => 
                        `<span class="feature-tag">
                            <i class="fas ${getFeatureIcon(feature)}"></i>
                            ${getFeatureText(feature)}
                        </span>`
                    ).join('')}
                </div>
                ${createRatingDisplay(toilet)}
            </div>
        `;

        item.onclick = () => {
            showToiletDetail(toilet.id);
            focusToilet(toilet.id);
        };

        container.appendChild(item);
    });
}

// トイレの詳細を表示
function showToiletDetail(toiletId) {
    const toilet = toilets.find(t => t.id === toiletId);
    if (!toilet) return;

    const modal = document.getElementById('toilet-detail-modal');
    const title = document.getElementById('detail-title');
    const content = document.getElementById('detail-content');
    const ratingStars = document.getElementById('rating-stars');
    const commentsList = document.getElementById('comments-list');

    const typeIcon = getTypeIcon(toilet.type);
    const typeColor = getTypeColor(toilet.type);
    
    const name = typeof toilet.name === 'object' ? toilet.name.ja : toilet.name;
    const address = typeof toilet.address === 'object' ? toilet.address.ja : toilet.address;
    const hours = typeof toilet.hours === 'object' ? toilet.hours.ja : toilet.hours;

    // 表示する機能を制限
    const displayFeatures = toilet.features.filter(feature => 
        ['open24h', 'accessible', 'babyChanging'].includes(feature)
    );

    title.innerHTML = `
        <i class="fas ${typeIcon}" style="color: ${typeColor}"></i>
        ${name}
    `;

    content.innerHTML = `
        <div class="detail-info">
            <p><i class="fas fa-map-marker-alt"></i> 住所: ${address}</p>
            <p><i class="fas fa-clock"></i> 営業時間: ${hours}</p>
            <div class="feature-tags">
                ${displayFeatures.map(feature => 
                    `<span class="feature-tag">
                        <i class="fas ${getFeatureIcon(feature)}"></i>
                        ${getFeatureText(feature)}
                    </span>`
                ).join('')}
            </div>
            ${createRatingDisplay(toilet)}
        </div>
    `;

    renderComments(toilet, commentsList);
    setupRatingInterface(toilet, ratingStars);
    modal.dataset.toiletId = toiletId;
    modal.style.display = 'block';
}

// 評価の表示を作成
function createRatingDisplay(toilet) {
    if (toilet.ratings.length === 0) return '';
    
    const stars = '★'.repeat(Math.floor(toilet.averageRating)) + 
                 '☆'.repeat(5 - Math.floor(toilet.averageRating));
    
    return `
        <div class="rating">
            <span class="stars">${stars}</span>
            <span class="count">(${toilet.ratings.length})</span>
        </div>
    `;
}

// コメントを表示
function renderComments(toilet, container) {
    if (!container) return;
    
    container.innerHTML = toilet.comments.length === 0 ? 
        `<p class="no-comments">まだコメントはありません</p>` :
        toilet.comments.map(comment => `
            <div class="comment">
                <div class="comment-header">
                    <span class="author">${comment.author}</span>
                    <span class="date">${new Date(comment.date).toLocaleDateString('ja-JP')}</span>
                </div>
                <p>${comment.text}</p>
            </div>
        `).join('');
}

// 評価インターフェースをセットアップ
function setupRatingInterface(toilet, container) {
    container.innerHTML = `
        <div class="rating-stars">
            ${[1,2,3,4,5].map(n => `
                <span class="star" data-rating="${n}">☆</span>
            `).join('')}
        </div>
    `;

    container.querySelectorAll('.star').forEach(star => {
        star.onmouseover = () => {
            const rating = star.dataset.rating;
            container.querySelectorAll('.star').forEach(s => {
                s.textContent = parseInt(s.dataset.rating) <= rating ? '★' : '☆';
            });
        };
        
        star.onclick = () => {
            const rating = parseInt(star.dataset.rating);
            toilet.ratings.push(rating);
            toilet.averageRating = toilet.ratings.reduce((a,b) => a+b) / toilet.ratings.length;
            saveData();
            renderToiletList();
            showToiletDetail(toilet.id);
        };
    });
}

// ユーティリティ関数
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

function getFeatureIcon(feature) {
    const icons = {
        open24h: 'fa-clock',
        accessible: 'fa-wheelchair',
        babyChanging: 'fa-baby'
    };
    return icons[feature] || 'fa-circle';
}

function getTypeColor(type) {
    const colors = {
        mcdonalds: '#FFB6C1',
        timhortons: '#98FB98',
        community: '#87CEEB',
        library: '#DDA0DD',
        tandt: '#F0E68C',
        gasstation: '#FFB6C1',
        superstore: '#98FB98',
        college: '#DDA0DD',
        other: '#87CEEB'
    };
    return colors[type] || '#87CEEB';
}

function getFeatureText(feature) {
    const featureTexts = {
        'open24h': '24時間営業',
        'accessible': '多目的トイレあり',
        'babyChanging': 'おむつ交換台あり'
    };
    return featureTexts[feature] || feature;
}

// イベントリスナーの設定
document.addEventListener('DOMContentLoaded', () => {
    renderToiletList();

    const modal = document.getElementById('toilet-detail-modal');

    // モーダルを閉じるボタン
    document.querySelector('.close-modal').onclick = () => {
        modal.style.display = 'none';
    };

    // モーダルの外側をクリックして閉じる
    modal.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };

    // コメント送信ボタン
    document.getElementById('submit-comment').onclick = () => {
        const toiletId = parseInt(modal.dataset.toiletId);
        const toilet = toilets.find(t => t.id === toiletId);
        if (!toilet) return;

        const author = document.getElementById('comment-author').value.trim();
        const text = document.getElementById('comment-text').value.trim();

        if (author && text) {
            toilet.comments.push({
                author,
                text,
                date: new Date().toISOString()
            });
            saveData();
            renderComments(toilet, document.getElementById('comments-list'));
            document.getElementById('comment-author').value = '';
            document.getElementById('comment-text').value = '';
        }
    };
});

// グローバルに関数を公開
window.toiletApp = {
    showToiletDetail
};

export { renderToiletList, showToiletDetail }; 
