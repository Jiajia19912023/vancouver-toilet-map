const toilets = [
    // バンクーバー - マクドナルド
    {
        id: 1,
        name: 'マクドナルド - ロブソン店',
        address: 'ロブソン通り1131番地, バンクーバー',
        position: [49.2855, -123.1270],
        type: 'mcdonalds',
        hours: '24時間営業',
        isOpen24h: true,
        features: ['accessible', 'clean', 'free', 'open24h'],
        ratings: [],
        comments: [],
        averageRating: 0
    },
    {
        id: 2,
        name: 'マクドナルド - グランビル店',
        address: 'グランビル通り447番地, バンクーバー',
        position: [49.2847, -123.1156],
        type: 'mcdonalds',
        hours: '6:00-24:00',
        isOpen24h: false,
        features: ['accessible', 'clean', 'free'],
        ratings: [],
        comments: [],
        averageRating: 0
    },
    {
        id: 3,
        name: {
            ja: 'マクドナルド - メインストリート店',
            en: "McDonald's - Main Street",
            zh: '麦当劳 - 主街店'
        },
        address: {
            ja: 'メイン通り2909番地, バンクーバー',
            en: '2909 Main St, Vancouver',
            zh: '温哥华主街2909号'
        },
        position: [49.2589, -123.1010],
        type: 'mcdonalds',
        hours: {
            ja: '24時間営業',
            en: 'Open 24 hours',
            zh: '24小时营业'
        },
        isOpen24h: true,
        features: [
            'accessible',
            'clean',
            'free',
            'open24h'
        ],
        ratings: [],
        comments: [],
        averageRating: 0
    },
    {
        id: 6,
        name: {
            ja: 'マクドナルド - キツラノ店',
            en: "McDonald's - Kitsilano",
            zh: '麦当劳 - 基斯兰诺店'
        },
        address: {
            ja: 'ウエストブロードウェイ2095番地, バンクーバー',
            en: '2095 W Broadway, Vancouver',
            zh: '温哥华西布洛德街2095号'
        },
        position: [49.2638, -123.1531],
        type: 'mcdonalds',
        hours: {
            ja: '24時間営業',
            en: 'Open 24 hours',
            zh: '24小时营业'
        },
        isOpen24h: true,
        features: ['accessible', 'clean', 'free', 'open24h'],
        ratings: [],
        comments: [],
        averageRating: 0
    },
    {
        id: 7,
        name: {
            ja: 'マクドナルド - コマーシャルドライブ店',
            en: "McDonald's - Commercial Drive",
            zh: '麦当劳 - 商业街店'
        },
        address: {
            ja: 'コマーシャルドライブ通り1527番地, バンクーバー',
            en: '1527 Commercial Dr, Vancouver',
            zh: '温哥华商业街1527号'
        },
        position: [49.2689, -123.0696],
        type: 'mcdonalds',
        hours: {
            ja: '6:00-24:00',
            en: '6:00-24:00',
            zh: '6:00-24:00'
        },
        isOpen24h: false,
        features: ['accessible', 'clean', 'free'],
        ratings: [],
        comments: [],
        averageRating: 0
    },
    {
        id: 8,
        name: {
            ja: 'マクドナルド - イエールタウン店',
            en: "McDonald's - Yaletown",
            zh: '麦当劳 - 耶鲁镇店'
        },
        address: {
            ja: 'デヴィー通り1098番地, バンクーバー',
            en: '1098 Davie St, Vancouver',
            zh: '温哥华戴维街1098号'
        },
        position: [49.2821, -123.1273],
        type: 'mcdonalds',
        hours: {
            ja: '24時間営業',
            en: 'Open 24 hours',
            zh: '24小时营业'
        },
        isOpen24h: true,
        features: ['accessible', 'clean', 'free', 'open24h'],
        ratings: [],
        comments: [],
        averageRating: 0
    },
    {
        id: 9,
        name: {
            ja: 'マクドナルド - ガスタウン店',
            en: "McDonald's - Gastown",
            zh: '麦当劳 - 盖斯镇店'
        },
        address: {
            ja: 'ガスタウン通り146番地, バンクーバー',
            en: '146 W Hastings St, Vancouver',
            zh: '温哥华盖斯街146号'
        },
        position: [49.2824, -123.1089],
        type: 'mcdonalds',
        hours: {
            ja: '24時間営業',
            en: 'Open 24 hours',
            zh: '24小时营业'
        },
        isOpen24h: true,
        features: ['accessible', 'clean', 'free', 'open24h'],
        ratings: [],
        comments: [],
        averageRating: 0
    },
    {
        id: 10,
        name: {
            ja: 'マクドナルド - パシフィックセンター店',
            en: "McDonald's - Pacific Centre",
            zh: '麦当劳 - 太平洋中心店'
        },
        address: {
            ja: 'ジョージアドミニストレイト701番地, バンクーバー',
            en: '701 W Georgia St, Vancouver',
            zh: '温哥华乔治亚街701号'
        },
        position: [49.2833, -123.1178],
        type: 'mcdonalds',
        hours: {
            ja: '7:00-23:00',
            en: '7:00-23:00',
            zh: '7:00-23:00'
        },
        isOpen24h: false,
        features: ['accessible', 'clean', 'free'],
        ratings: [],
        comments: [],
        averageRating: 0
    },
    {
        id: 11,
        name: {
            ja: 'マクドナルド - UBCビレッジ店',
            en: "McDonald's - UBC Village",
            zh: '麦当劳 - UBC村店'
        },
        address: {
            ja: 'ユニバーシティビルドライブ5728番地, バンクーバー',
            en: '5728 University Blvd, Vancouver',
            zh: '温哥华大学村路5728号'
        },
        position: [49.2665, -123.2456],
        type: 'mcdonalds',
        hours: {
            ja: '7:00-23:00',
            en: '7:00-23:00',
            zh: '7:00-23:00'
        },
        isOpen24h: false,
        features: ['accessible', 'clean', 'free'],
        ratings: [],
        comments: [],
        averageRating: 0
    },
    {
        id: 12,
        name: {
            ja: 'マクドナルド - デンマン店',
            en: "McDonald's - Denman",
            zh: '麦当劳 - 丹曼店'
        },
        address: {
            ja: 'デンマン通り1796番地, バンクーバー',
            en: '1796 Denman St, Vancouver',
            zh: '温哥华丹曼街1796号'
        },
        position: [49.2890, -123.1387],
        type: 'mcdonalds',
        hours: {
            ja: '24時間営業',
            en: 'Open 24 hours',
            zh: '24小时营业'
        },
        isOpen24h: true,
        features: ['accessible', 'clean', 'free', 'open24h'],
        ratings: [],
        comments: [],
        averageRating: 0
    },
    {
        id: 13,
        name: {
            ja: 'マクドナルド - ロブソン＆ビュート店',
            en: "McDonald's - Robson & Burrard",
            zh: '麦当劳 - 罗布森和伯尔代店'
        },
        address: {
            ja: 'ロブソン通り1610番地, バンクーバー',
            en: '1610 Robson St, Vancouver',
            zh: '温哥华罗布森街1610号'
        },
        position: [49.2873, -123.1351],
        type: 'mcdonalds',
        hours: {
            ja: '6:00-24:00',
            en: '6:00-24:00',
            zh: '6:00-24:00'
        },
        isOpen24h: false,
        features: ['accessible', 'clean', 'free'],
        ratings: [],
        comments: [],
        averageRating: 0
    },
    {
        id: 14,
        name: {
            ja: 'マクドナルド - ヘイスティング＆ナナイモ店',
            en: "McDonald's - Hastings & Nanaimo",
            zh: '麦当劳 - 海斯蒂和纳奈莫店'
        },
        address: {
            ja: 'ハストリート通り2545番地, バンクーバー',
            en: '2545 E Hastings St, Vancouver',
            zh: '温哥华海斯蒂街2545号'
        },
        position: [49.2810, -123.0567],
        type: 'mcdonalds',
        hours: {
            ja: '24時間営業',
            en: 'Open 24 hours',
            zh: '24小时营业'
        },
        isOpen24h: true,
        features: ['accessible', 'clean', 'free', 'open24h'],
        ratings: [],
        comments: [],
        averageRating: 0
    },
    {
        id: 15,
        name: {
            ja: 'マクドナルド - キングスウェイ＆ナナイモ店',
            en: "McDonald's - Kingsway & Nanaimo",
            zh: '麦当劳 - 金斯威和纳奈莫店'
        },
        address: {
            ja: 'キングスウェイ通り2095番地, バンクーバー',
            en: '2095 Kingsway, Vancouver',
            zh: '温哥华金斯威街2095号'
        },
        position: [49.2484, -123.0567],
        type: 'mcdonalds',
        hours: {
            ja: '24時間営業',
            en: 'Open 24 hours',
            zh: '24小时营业'
        },
        isOpen24h: true,
        features: ['accessible', 'clean', 'free', 'open24h'],
        ratings: [],
        comments: [],
        averageRating: 0
    },

    // バーナビー - マクドナルド
    {
        id: 4,
        name: {
            ja: 'マクドナルド - メトロタウン店',
            en: "McDonald's - Metrotown",
            zh: '麦当劳 - 美都店'
        },
        address: {
            ja: 'キングウェイ4700番地, バーナビー',
            en: '4700 Kingsway, Burnaby',
            zh: '巴尼维4700号'
        },
        position: [49.2276, -123.0076],
        type: 'mcdonalds',
        hours: {
            ja: '7:00-23:00',
            en: '7:00-23:00',
            zh: '7:00-23:00'
        },
        isOpen24h: false,
        features: [
            'accessible',
            'clean',
            'free'
        ],
        ratings: [],
        comments: [],
        averageRating: 0
    },

    // リッチモンド - マクドナルド
    {
        id: 5,
        name: {
            ja: 'マクドナルド - アバードーン店',
            en: "McDonald's - Aberdeen",
            zh: '麦当劳 - 阿伯丁店'
        },
        address: {
            ja: 'ハゼブリッジウェイ4151番地, リッチモンド',
            en: '4151 Hazelbridge Way, Richmond',
            zh: '里士满哈泽布里奇路4151号'
        },
        position: [49.1838, -123.1333],
        type: 'mcdonalds',
        hours: {
            ja: '7:00-23:00',
            en: '7:00-23:00',
            zh: '7:00-23:00'
        },
        isOpen24h: false,
        features: [
            'accessible',
            'clean',
            'free'
        ],
        ratings: [],
        comments: [],
        averageRating: 0
    },

    // バンクーバー - ティムホートンズ
    {
        id: 20,
        name: {
            ja: 'ティムホートンズ - ウォーターフロント駅店',
            en: 'Tim Hortons - Waterfront Station',
            zh: 'Tim Hortons - 水边站店'
        },
        address: {
            ja: 'ウォーターフロント駅601番地, バンクーバー',
            en: '601 W Cordova St, Vancouver',
            zh: '温哥华水边站601号'
        },
        position: [49.2856, -123.1119],
        type: 'timhortons',
        hours: {
            ja: '6:00-22:00',
            en: '6:00-22:00',
            zh: '6:00-22:00'
        },
        isOpen24h: false,
        features: [
            'accessible',
            'clean',
            'free'
        ],
        ratings: [],
        comments: [],
        averageRating: 0
    },
    {
        id: 21,
        name: {
            ja: 'ティムホートンズ - ブロードウェイ店',
            en: 'Tim Hortons - Broadway',
            zh: 'Tim Hortons - 百老汇店'
        },
        address: {
            ja: 'ブロードウェイ2590番地, バンクーバー',
            en: '2590 Broadway W, Vancouver',
            zh: '温哥华百老汇街2590号'
        },
        position: [49.2639, -123.1635],
        type: 'timhortons',
        hours: {
            ja: '6:00-23:00',
            en: '6:00-23:00',
            zh: '6:00-23:00'
        },
        isOpen24h: false,
        features: [
            'accessible',
            'clean',
            'free'
        ],
        ratings: [],
        comments: [],
        averageRating: 0
    },
    {
        id: 24,
        name: {
            ja: 'ティムホートンズ - キツラノ店',
            en: 'Tim Hortons - Kitsilano',
            zh: 'Tim Hortons - 基斯兰诺店'
        },
        address: {
            ja: 'ウエスト4ウェイ2198番地, バンクーバー',
            en: '2198 W 4th Ave, Vancouver',
            zh: '温哥华西四街2198号'
        },
        position: [49.2681, -123.1566],
        type: 'timhortons',
        hours: {
            ja: '6:00-23:00',
            en: '6:00-23:00',
            zh: '6:00-23:00'
        },
        isOpen24h: false,
        features: ['accessible', 'clean', 'free'],
        ratings: [],
        comments: [],
        averageRating: 0
    },
    {
        id: 25,
        name: {
            ja: 'ティムホートンズ - UBC店',
            en: 'Tim Hortons - UBC',
            zh: 'Tim Hortons - UBC店'
        },
        address: {
            ja: 'ユニバーシティビルドライブ5784番地, バンクーバー',
            en: '5784 University Blvd, Vancouver',
            zh: '温哥华大学村路5784号'
        },
        position: [49.2659, -123.2456],
        type: 'timhortons',
        hours: {
            ja: '7:00-21:00',
            en: '7:00-21:00',
            zh: '7:00-21:00'
        },
        isOpen24h: false,
        features: ['accessible', 'clean', 'free'],
        ratings: [],
        comments: [],
        averageRating: 0
    },
    {
        id: 26,
        name: {
            ja: 'ティムホートンズ - ガスタウン店',
            en: 'Tim Hortons - Gastown',
            zh: 'Tim Hortons - 盖斯镇店'
        },
        address: {
            ja: 'ガスタウン通り108番地, バンクーバー',
            en: '108 W Hastings St, Vancouver',
            zh: '温哥华盖斯街108号'
        },
        position: [49.2821, -123.1082],
        type: 'timhortons',
        hours: {
            ja: '6:00-22:00',
            en: '6:00-22:00',
            zh: '6:00-22:00'
        },
        isOpen24h: false,
        features: ['accessible', 'clean', 'free'],
        ratings: [],
        comments: [],
        averageRating: 0
    },
    {
        id: 27,
        name: {
            ja: 'ティムホートンズ - ヤレタウン店',
            en: 'Tim Hortons - Yaletown',
            zh: 'Tim Hortons - 耶鲁镇店'
        },
        address: {
            ja: 'マイランドストリート1067番地, バンクーバー',
            en: '1067 Mainland St, Vancouver',
            zh: '温哥华主街1067号'
        },
        position: [49.2754, -123.1218],
        type: 'timhortons',
        hours: {
            ja: '6:00-22:00',
            en: '6:00-22:00',
            zh: '6:00-22:00'
        },
        isOpen24h: false,
        features: ['accessible', 'clean', 'free'],
        ratings: [],
        comments: [],
        averageRating: 0
    },
    {
        id: 28,
        name: {
            ja: 'ティムホートンズ - グランビル＆ネルソン店',
            en: 'Tim Hortons - Granville & Nelson',
            zh: 'Tim Hortons - 格兰维尔和内尔森店'
        },
        address: {
            ja: 'グランビル通り789番地, バンクーバー',
            en: '789 Granville St, Vancouver',
            zh: '温哥华格兰维尔街789号'
        },
        position: [49.2820, -123.1207],
        type: 'timhortons',
        hours: {
            ja: '6:00-23:00',
            en: '6:00-23:00',
            zh: '6:00-23:00'
        },
        isOpen24h: false,
        features: ['accessible', 'clean', 'free'],
        ratings: [],
        comments: [],
        averageRating: 0
    },
    {
        id: 29,
        name: {
            ja: 'ティムホートンズ - ヘイスティング＆リチャーズ店',
            en: 'Tim Hortons - Hastings & Richards',
            zh: 'Tim Hortons - 海斯蒂和理查兹店'
        },
        address: {
            ja: 'ハストリート通り555番地, バンクーバー',
            en: '555 W Hastings St, Vancouver',
            zh: '温哥华海斯蒂街555号'
        },
        position: [49.2847, -123.1116],
        type: 'timhortons',
        hours: {
            ja: '6:00-22:00',
            en: '6:00-22:00',
            zh: '6:00-22:00'
        },
        isOpen24h: false,
        features: ['accessible', 'clean', 'free'],
        ratings: [],
        comments: [],
        averageRating: 0
    },
    {
        id: 30,
        name: {
            ja: 'ティムホートンズ - コマーシャル＆ブロードウェイ店',
            en: 'Tim Hortons - Commercial & Broadway',
            zh: 'Tim Hortons - 商业和百老汇店'
        },
        address: {
            ja: 'コマーシャルドライブ通り1795番地, バンクーバー',
            en: '1795 Commercial Dr, Vancouver',
            zh: '温哥华商业街1795号'
        },
        position: [49.2628, -123.0696],
        type: 'timhortons',
        hours: {
            ja: '6:00-23:00',
            en: '6:00-23:00',
            zh: '6:00-23:00'
        },
        isOpen24h: false,
        features: ['accessible', 'clean', 'free'],
        ratings: [],
        comments: [],
        averageRating: 0
    },

    // バーナビー - ティムホートンズ
    {
        id: 22,
        name: {
            ja: 'ティムホートンズ - ウィリングドン店',
            en: 'Tim Hortons - Willingdon',
            zh: 'Tim Hortons - 威灵顿店'
        },
        address: {
            ja: 'ストウクリークドライブ4277番地, バーナビー',
            en: '4277 Still Creek Dr, Burnaby',
            zh: '巴尼维斯特克里克街4277号'
        },
        position: [49.2597, -123.0079],
        type: 'timhortons',
        hours: {
            ja: '24時間営業',
            en: 'Open 24 hours',
            zh: '24小时营业'
        },
        isOpen24h: true,
        features: [
            'accessible',
            'clean',
            'free',
            'open24h'
        ],
        ratings: [],
        comments: [],
        averageRating: 0
    },

    // リッチモンド - ティムホートンズ
    {
        id: 23,
        name: {
            ja: 'ティムホートンズ - No.3 Road店',
            en: 'Tim Hortons - No.3 Road',
            zh: 'Tim Hortons - No.3 Road店'
        },
        address: {
            ja: 'ノーサンドロード4011番地, リッチモンド',
            en: '4011 No. 3 Rd, Richmond',
            zh: '里士满No.3 Road 4011号'
        },
        position: [49.1847, -123.1339],
        type: 'timhortons',
        hours: {
            ja: '6:00-23:00',
            en: '6:00-23:00',
            zh: '6:00-23:00'
        },
        isOpen24h: false,
        features: [
            'accessible',
            'clean',
            'free'
        ],
        ratings: [],
        comments: [],
        averageRating: 0
    },

    // コミュニティセンター
    {
        id: 40,
        name: {
            ja: 'ウエストエンド コミュニティセンター',
            en: 'West End Community Centre',
            zh: '西端社区中心'
        },
        address: {
            ja: 'デンマン通り870番地, バンクーバー',
            en: '870 Denman St, Vancouver',
            zh: '温哥华丹曼街870号'
        },
        position: [49.2890, -123.1390],
        type: 'community',
        hours: {
            ja: '月-金: 6:00-22:00, 土-日: 8:00-18:00',
            en: 'Mon-Fri: 6:00-22:00, Sat-Sun: 8:00-18:00',
            zh: '周一至周五: 6:00-22:00, 周六至周日: 8:00-18:00'
        },
        isOpen24h: false,
        features: [
            'accessible',
            'clean',
            'free',
            'babyChanging'
        ],
        ratings: [],
        comments: [],
        averageRating: 0
    },
    {
        id: 41,
        name: {
            ja: 'ボナンザ コミュニティセンター',
            en: 'Bonaccord Community Centre',
            zh: '邦科尔德社区中心'
        },
        address: {
            ja: 'ボナンザドライブ4900番地, バーナビー',
            en: '4900 Bonaccord Dr, Burnaby',
            zh: '巴尼维德拉布街4900号'
        },
        position: [49.2247, -122.9989],
        type: 'community',
        hours: {
            ja: '月-金: 7:00-21:00, 土-日: 9:00-17:00',
            en: 'Mon-Fri: 7:00-21:00, Sat-Sun: 9:00-17:00',
            zh: '周一至周五: 7:00-21:00, 周六至周日: 9:00-17:00'
        },
        isOpen24h: false,
        features: [
            'accessible',
            'clean',
            'free',
            'babyChanging'
        ],
        ratings: [],
        comments: [],
        averageRating: 0
    },
    {
        id: 42,
        name: {
            ja: 'ミノル コミュニティセンター',
            en: 'Minoru Community Centre',
            zh: '小林社区中心'
        },
        address: {
            ja: 'グランヴィルアベニュー7191番地, リッチモンド',
            en: '7191 Granville Ave, Richmond',
            zh: '里士满格兰维尔街7191号'
        },
        position: [49.1633, -123.1436],
        type: 'community',
        hours: {
            ja: '月-金: 7:00-21:00, 土-日: 9:00-17:00',
            en: 'Mon-Fri: 7:00-21:00, Sat-Sun: 9:00-17:00',
            zh: '周一至周五: 7:00-21:00, 周六至周日: 9:00-17:00'
        },
        isOpen24h: false,
        features: [
            'accessible',
            'clean',
            'free',
            'babyChanging'
        ],
        ratings: [],
        comments: [],
        averageRating: 0
    },
    {
        id: 43,
        name: {
            ja: 'キツラノ コミュニティセンター',
            en: 'Kitsilano Community Centre',
            zh: '基斯兰诺社区中心'
        },
        address: {
            ja: 'ラッシュストリート2690番地, バンクーバー',
            en: '2690 Larch St, Vancouver',
            zh: '温哥华拉什街2690号'
        },
        position: [49.2627, -123.1686],
        type: 'community',
        hours: {
            ja: '月-金: 6:00-22:00, 土-日: 9:00-17:00',
            en: 'Mon-Fri: 6:00-22:00, Sat-Sun: 9:00-17:00',
            zh: '周一至周五: 6:00-22:00, 周六至周日: 9:00-17:00'
        },
        isOpen24h: false,
        features: ['accessible', 'clean', 'free', 'babyChanging'],
        ratings: [],
        comments: [],
        averageRating: 0
    },
    {
        id: 44,
        name: {
            ja: 'ブリタニア コミュニティセンター',
            en: 'Britannia Community Centre',
            zh: '不列颠社区中心'
        },
        address: {
            ja: 'ナピアストリート1661番地, バンクーバー',
            en: '1661 Napier St, Vancouver',
            zh: '温哥华纳皮亚街1661号'
        },
        position: [49.2756, -123.0724],
        type: 'community',
        hours: {
            ja: '月-金: 7:00-21:00, 土-日: 9:00-17:00',
            en: 'Mon-Fri: 7:00-21:00, Sat-Sun: 9:00-17:00',
            zh: '周一至周五: 7:00-21:00, 周六至周日: 9:00-17:00'
        },
        isOpen24h: false,
        features: ['accessible', 'clean', 'free', 'babyChanging'],
        ratings: [],
        comments: [],
        averageRating: 0
    },
    {
        id: 45,
        name: {
            ja: 'UBC Student Recreation Centre',
            en: 'UBC Student Recreation Centre',
            zh: 'UBC学生娱乐中心'
        },
        address: {
            ja: 'ユニバーシティビルドライブ6000番地, バンクーバー',
            en: '6000 Student Union Blvd, Vancouver',
            zh: '温哥华大学村路6000号'
        },
        position: [49.2680, -123.2460],
        type: 'community',
        hours: {
            ja: '月-金: 6:00-23:00, 土-日: 8:00-22:00',
            en: 'Mon-Fri: 6:00-23:00, Sat-Sun: 8:00-22:00',
            zh: '周一至周五: 6:00-23:00, 周六至周日: 8:00-22:00'
        },
        isOpen24h: false,
        features: ['accessible', 'clean', 'free', 'babyChanging'],
        ratings: [],
        comments: [],
        averageRating: 0
    },
    {
        id: 46,
        name: {
            ja: 'トラウトレイク コミュニティセンター',
            en: 'Trout Lake Community Centre',
            zh: '鳟鱼湖社区中心'
        },
        address: {
            ja: 'ビクトリアドライブ3360番地, バンクーバー',
            en: '3360 Victoria Dr, Vancouver',
            zh: '温哥华维多利亚街3360号'
        },
        position: [49.2564, -123.0654],
        type: 'community',
        hours: {
            ja: '月-金: 7:00-21:00, 土-日: 9:00-17:00',
            en: 'Mon-Fri: 7:00-21:00, Sat-Sun: 9:00-17:00',
            zh: '周一至周五: 7:00-21:00, 周六至周日: 9:00-17:00'
        },
        isOpen24h: false,
        features: ['accessible', 'clean', 'free', 'babyChanging'],
        ratings: [],
        comments: [],
        averageRating: 0
    },
    {
        id: 47,
        name: {
            ja: 'ヒルクレスト コミュニティセンター',
            en: 'Hillcrest Community Centre',
            zh: '希尔克雷斯特社区中心'
        },
        address: {
            ja: 'クランシーロランジェルウェイ4575番地, バンクーバー',
            en: '4575 Clancy Loranger Way, Vancouver',
            zh: '温哥华克兰西洛朗热街4575号'
        },
        position: [49.2494, -123.1085],
        type: 'community',
        hours: {
            ja: '月-金: 6:00-22:00, 土-日: 8:00-20:00',
            en: 'Mon-Fri: 6:00-22:00, Sat-Sun: 8:00-20:00',
            zh: '周一至周五: 6:00-22:00, 周六至周日: 8:00-20:00'
        },
        isOpen24h: false,
        features: ['accessible', 'clean', 'free', 'babyChanging'],
        ratings: [],
        comments: [],
        averageRating: 0
    },
    {
        id: 48,
        name: {
            ja: 'ダンバー コミュニティセンター',
            en: 'Dunbar Community Centre',
            zh: '丹巴社区中心'
        },
        address: {
            ja: 'ダンバーストリート4747番地, バンクーバー',
            en: '4747 Dunbar St, Vancouver',
            zh: '温哥华丹巴街4747号'
        },
        position: [49.2438, -123.1851],
        type: 'community',
        hours: {
            ja: '月-金: 7:00-21:00, 土-日: 9:00-17:00',
            en: 'Mon-Fri: 7:00-21:00, Sat-Sun: 9:00-17:00',
            zh: '周一至周五: 7:00-21:00, 周六至周日: 9:00-17:00'
        },
        isOpen24h: false,
        features: ['accessible', 'clean', 'free', 'babyChanging'],
        ratings: [],
        comments: [],
        averageRating: 0
    },

    // 図書館
    {
        id: 60,
        name: {
            ja: 'バンクーバー中央図書館',
            en: 'Vancouver Public Library',
            zh: '温哥华公共图书馆'
        },
        address: {
            ja: 'ジョージアドミニストレイト350番地, バンクーバー',
            en: '350 W Georgia St, Vancouver',
            zh: '温哥华乔治亚街350号'
        },
        position: [49.2800, -123.1160],
        type: 'library',
        hours: {
            ja: '月-木: 10:00-21:00, 金-土: 10:00-18:00, 日: 11:00-18:00',
            en: 'Mon-Thu: 10:00-21:00, Fri-Sat: 10:00-18:00, Sun: 11:00-18:00',
            zh: '周一至周四: 10:00-21:00, 周五至周六: 10:00-18:00, 周日: 11:00-18:00'
        },
        isOpen24h: false,
        features: [
            'accessible',
            'clean',
            'free',
            'babyChanging'
        ],
        ratings: [],
        comments: [],
        averageRating: 0
    },
    {
        id: 61,
        name: {
            ja: 'バーナビー中央図書館',
            en: 'Burnaby Public Library',
            zh: '巴尼维公共图书馆'
        },
        address: {
            ja: 'ウィリングドンウェイ6100番地, バーナビー',
            en: '6100 Willingdon Ave, Burnaby',
            zh: '巴尼维威灵顿街6100号'
        },
        position: [49.2271, -123.0033],
        type: 'library',
        hours: {
            ja: '月-木: 9:00-21:00, 金-土: 9:00-18:00, 日: 11:00-17:00',
            en: 'Mon-Thu: 9:00-21:00, Fri-Sat: 9:00-18:00, Sun: 11:00-17:00',
            zh: '周一至周四: 9:00-21:00, 周五至周六: 9:00-18:00, 周日: 11:00-17:00'
        },
        isOpen24h: false,
        features: [
            'accessible',
            'clean',
            'free',
            'babyChanging'
        ],
        ratings: [],
        comments: [],
        averageRating: 0
    },
    {
        id: 62,
        name: {
            ja: 'リッチモンド公共図書館',
            en: 'Richmond Public Library',
            zh: '里士满公共图书馆'
        },
        address: {
            ja: 'ミノルゲート7700番地, リッチモンド',
            en: '7700 Minoru Gate, Richmond',
            zh: '里士满小林门7700号'
        },
        position: [49.1662, -123.1443],
        type: 'library',
        hours: {
            ja: '月-金: 9:00-21:00, 土-日: 10:00-17:00',
            en: 'Mon-Fri: 9:00-21:00, Sat-Sun: 10:00-17:00',
            zh: '周一至周五: 9:00-21:00, 周六至周日: 10:00-17:00'
        },
        isOpen24h: false,
        features: [
            'accessible',
            'clean',
            'free',
            'babyChanging'
        ],
        ratings: [],
        comments: [],
        averageRating: 0
    },
    {
        id: 63,
        name: {
            ja: 'キツラノ図書館',
            en: 'Kitsilano Library',
            zh: '基斯兰诺图书馆'
        },
        address: {
            ja: 'マッカーションストリート2425番地, バンクーバー',
            en: '2425 MacDonald St, Vancouver',
            zh: '温哥华麦克阿瑟街2425号'
        },
        position: [49.2644, -123.1687],
        type: 'library',
        hours: {
            ja: '月-木: 10:00-21:00, 金-土: 10:00-18:00, 日: 11:00-17:00',
            en: 'Mon-Thu: 10:00-21:00, Fri-Sat: 10:00-18:00, Sun: 11:00-17:00',
            zh: '周一至周四: 10:00-21:00, 周五至周六: 10:00-18:00, 周日: 11:00-17:00'
        },
        isOpen24h: false,
        features: ['accessible', 'clean', 'free', 'babyChanging'],
        ratings: [],
        comments: [],
        averageRating: 0
    },
    {
        id: 64,
        name: {
            ja: 'マウントプレザント図書館',
            en: 'Mount Pleasant Library',
            zh: '蒙特利尔图书馆'
        },
        address: {
            ja: 'キングウェイ1番地, バンクーバー',
            en: '1 Kingsway, Vancouver',
            zh: '温哥华金斯威街1号'
        },
        position: [49.2632, -123.1003],
        type: 'library',
        hours: {
            ja: '月-木: 10:00-21:00, 金-土: 10:00-18:00, 日: 11:00-17:00',
            en: 'Mon-Thu: 10:00-21:00, Fri-Sat: 10:00-18:00, Sun: 11:00-17:00',
            zh: '周一至周四: 10:00-21:00, 周五至周六: 10:00-18:00, 周日: 11:00-17:00'
        },
        isOpen24h: false,
        features: ['accessible', 'clean', 'free', 'babyChanging'],
        ratings: [],
        comments: [],
        averageRating: 0
    },
    {
        id: 65,
        name: {
            ja: 'UBC Walter C. Koerner Library',
            en: 'UBC Walter C. Koerner Library',
            zh: 'UBC Walter C. Koerner图书馆'
        },
        address: {
            ja: 'メインモール1958番地, バンクーバー',
            en: '1958 Main Mall, Vancouver',
            zh: '温哥华主广场1958号'
        },
        position: [49.2676, -123.2519],
        type: 'library',
        hours: {
            ja: '月-金: 8:00-21:00, 土-日: 10:00-18:00',
            en: 'Mon-Fri: 8:00-21:00, Sat-Sun: 10:00-18:00',
            zh: '周一至周五: 8:00-21:00, 周六至周日: 10:00-18:00'
        },
        isOpen24h: false,
        features: ['accessible', 'clean', 'free', 'babyChanging'],
        ratings: [],
        comments: [],
        averageRating: 0
    },
    {
        id: 66,
        name: {
            ja: 'ジョーフォースト図書館',
            en: 'Joyce-Collingwood Library',
            zh: '乔伊斯-科林伍德图书馆'
        },
        address: {
            ja: 'レンフリューストリート2425番地, バンクーバー',
            en: '2425 Renfrew St, Vancouver',
            zh: '温哥华伦弗鲁街2425号'
        },
        position: [49.2614, -123.0452],
        type: 'library',
        hours: {
            ja: '月-木: 10:00-21:00, 金-土: 10:00-18:00, 日: 11:00-17:00',
            en: 'Mon-Thu: 10:00-21:00, Fri-Sat: 10:00-18:00, Sun: 11:00-17:00',
            zh: '周一至周四: 10:00-21:00, 周五至周六: 10:00-18:00, 周日: 11:00-17:00'
        },
        isOpen24h: false,
        features: ['accessible', 'clean', 'free', 'babyChanging'],
        ratings: [],
        comments: [],
        averageRating: 0
    },
    {
        id: 67,
        name: {
            ja: 'ダンバー図書館',
            en: 'Dunbar Library',
            zh: '丹巴图书馆'
        },
        address: {
            ja: 'ダンバーストリート4515番地, バンクーバー',
            en: '4515 Dunbar St, Vancouver',
            zh: '温哥华丹巴街4515号'
        },
        position: [49.2447, -123.1851],
        type: 'library',
        hours: {
            ja: '月-木: 10:00-21:00, 金-土: 10:00-18:00, 日: 11:00-17:00',
            en: 'Mon-Thu: 10:00-21:00, Fri-Sat: 10:00-18:00, Sun: 11:00-17:00',
            zh: '周一至周四: 10:00-21:00, 周五至周六: 10:00-18:00, 周日: 11:00-17:00'
        },
        isOpen24h: false,
        features: ['accessible', 'clean', 'free', 'babyChanging'],
        ratings: [],
        comments: [],
        averageRating: 0
    },
    {
        id: 68,
        name: {
            ja: 'レンフリュー図書館',
            en: 'Renfrew Library',
            zh: '伦弗鲁图书馆'
        },
        address: {
            ja: 'エヴァンズドライブ2969番地, バンクーバー',
            en: '2969 E 22nd Ave, Vancouver',
            zh: '温哥华埃文斯街2969号'
        },
        position: [49.2334, -123.0447],
        type: 'library',
        hours: {
            ja: '月-木: 10:00-21:00, 金-土: 10:00-18:00, 日: 11:00-17:00',
            en: 'Mon-Thu: 10:00-21:00, Fri-Sat: 10:00-18:00, Sun: 11:00-17:00',
            zh: '周一至周四: 10:00-21:00, 周五至周六: 10:00-18:00, 周日: 11:00-17:00'
        },
        isOpen24h: false,
        features: ['accessible', 'clean', 'free', 'babyChanging'],
        ratings: [],
        comments: [],
        averageRating: 0
    },

    // T&Tスーパーマーケット
    {
        id: 80,
        name: {
            ja: 'T&T - チャイナタウン店',
            en: 'T&T - Chinatown',
            zh: 'T&T - 唐人街店'
        },
        address: {
            ja: 'キファールプレイト179番地, バンクーバー',
            en: '179 Keefer Pl, Vancouver',
            zh: '温哥华基夫尔普莱特179号'
        },
        position: [49.2797, -123.1083],
        type: 'tandt',
        hours: {
            ja: '9:00-22:00',
            en: '9:00-22:00',
            zh: '9:00-22:00'
        },
        isOpen24h: false,
        features: [
            'accessible',
            'clean'
        ],
        ratings: [],
        comments: [],
        averageRating: 0
    },
    {
        id: 81,
        name: {
            ja: 'T&T - メトロタウン店',
            en: 'T&T - Metrotown',
            zh: 'T&T - 美都店'
        },
        address: {
            ja: 'キングウェイ147-4800番地, バーナビー',
            en: '147-4800 Kingsway, Burnaby',
            zh: '巴尼维4800号'
        },
        position: [49.2277, -123.0089],
        type: 'tandt',
        hours: {
            ja: '9:00-22:00',
            en: '9:00-22:00',
            zh: '9:00-22:00'
        },
        isOpen24h: false,
        features: [
            'accessible',
            'clean'
        ],
        ratings: [],
        comments: [],
        averageRating: 0
    },
    {
        id: 82,
        name: {
            ja: 'T&T - ランスダウン店',
            en: 'T&T - Lansdowne',
            zh: 'T&T - 兰斯当店'
        },
        address: {
            ja: 'ランスダウンロード8311番地, リッチモンド',
            en: '8311 Lansdowne Rd, Richmond',
            zh: '里士满兰斯当路8311号'
        },
        position: [49.1747, -123.1332],
        type: 'tandt',
        hours: {
            ja: '9:00-22:00',
            en: '9:00-22:00',
            zh: '9:00-22:00'
        },
        isOpen24h: false,
        features: [
            'accessible',
            'clean'
        ],
        ratings: [],
        comments: [],
        averageRating: 0
    },

    // Real Canadian Superstore
    {
        id: 100,
        name: {
            ja: 'Superstore - グランドビュー店',
            en: 'Superstore - Grandview',
            zh: 'Superstore - 格兰德店'
        },
        address: {
            ja: 'グランドビュー通り3185番地, バンクーバー',
            en: '3185 Grandview Hwy, Vancouver',
            zh: '温哥华格兰德街3185号'
        },
        position: [49.2593, -123.0320],
        type: 'superstore',
        hours: {
            ja: '7:00-22:00',
            en: '7:00-22:00',
            zh: '7:00-22:00'
        },
        isOpen24h: false,
        features: [
            'accessible',
            'clean',
            'babyChanging'
        ],
        ratings: [],
        comments: [],
        averageRating: 0
    },
    {
        id: 101,
        name: {
            ja: 'Superstore - メトロタウン店',
            en: 'Superstore - Metrotown',
            zh: 'Superstore - 美都店'
        },
        address: {
            ja: 'ストウクリークドライブ4650番地, バーナビー',
            en: '4650 Still Creek Dr, Burnaby',
            zh: '巴尼维斯特克里克街4650号'
        },
        position: [49.2594, -123.0074],
        type: 'superstore',
        hours: {
            ja: '7:00-22:00',
            en: '7:00-22:00',
            zh: '7:00-22:00'
        },
        isOpen24h: false,
        features: [
            'accessible',
            'clean',
            'babyChanging'
        ],
        ratings: [],
        comments: [],
        averageRating: 0
    },
    {
        id: 102,
        name: {
            ja: 'Superstore - リッチモンド店',
            en: 'Superstore - Richmond',
            zh: 'Superstore - 里士满店'
        },
        address: {
            ja: 'ノーサンドロード4651番地, リッチモンド',
            en: '4651 No. 3 Rd, Richmond',
            zh: '里士满No.3 Road 4651号'
        },
        position: [49.1842, -123.1339],
        type: 'superstore',
        hours: {
            ja: '7:00-22:00',
            en: '7:00-22:00',
            zh: '7:00-22:00'
        },
        isOpen24h: false,
        features: [
            'accessible',
            'clean',
            'babyChanging'
        ],
        ratings: [],
        comments: [],
        averageRating: 0
    },
    {
        id: 103,
        name: {
            ja: 'Superstore - マリンドライブ店',
            en: 'Superstore - Marine Drive',
            zh: 'Superstore - 海滨街店'
        },
        address: {
            ja: 'セーマリンドライブ350番地, バンクーバー',
            en: '350 SE Marine Dr, Vancouver',
            zh: '温哥华海滨街350号'
        },
        position: [49.2097, -123.0972],
        type: 'superstore',
        hours: {
            ja: '7:00-22:00',
            en: '7:00-22:00',
            zh: '7:00-22:00'
        },
        isOpen24h: false,
        features: ['accessible', 'clean', 'babyChanging'],
        ratings: [],
        comments: [],
        averageRating: 0
    },

    // ガソリンスタンド
    {
        id: 120,
        name: {
            ja: 'Petro Canada - ダウンタウン店',
            en: 'Petro Canada - Downtown',
            zh: 'Petro Canada - 市中心店'
        },
        address: {
            ja: 'ダビー通り1195番地, バンクーバー',
            en: '1195 Davie St, Vancouver',
            zh: '温哥华戴维街1195号'
        },
        position: [49.2821, -123.1321],
        type: 'gasstation',
        hours: {
            ja: '24時間営業',
            en: 'Open 24 hours',
            zh: '24小时营业'
        },
        isOpen24h: true,
        features: ['accessible', 'clean', 'free', 'open24h'],
        ratings: [],
        comments: [],
        averageRating: 0
    },
    {
        id: 121,
        name: {
            ja: 'Shell - キツラノ店',
            en: 'Shell - Kitsilano',
            zh: 'Shell - 基斯兰诺店'
        },
        address: {
            ja: 'ウエスト4ウェイ2103番地, バンクーバー',
            en: '2103 W 4th Ave, Vancouver',
            zh: '温哥华西四街2103号'
        },
        position: [49.2681, -123.1531],
        type: 'gasstation',
        hours: {
            ja: '24時間営業',
            en: 'Open 24 hours',
            zh: '24小时营业'
        },
        isOpen24h: true,
        features: ['accessible', 'clean', 'free', 'open24h'],
        ratings: [],
        comments: [],
        averageRating: 0
    },
    {
        id: 122,
        name: {
            ja: 'Esso - メインストリート店',
            en: 'Esso - Main Street',
            zh: 'Esso - 主街店'
        },
        address: {
            ja: 'メインストリート2405番地, バンクーバー',
            en: '2405 Main St, Vancouver',
            zh: '温哥华主街2405号'
        },
        position: [49.2639, -123.1010],
        type: 'gasstation',
        hours: {
            ja: '24時間営業',
            en: 'Open 24 hours',
            zh: '24小时营业'
        },
        isOpen24h: true,
        features: ['accessible', 'clean', 'free', 'open24h'],
        ratings: [],
        comments: [],
        averageRating: 0
    },

    // バンクーバー - マクドナルドに追加（サウスバンクーバー）
    {
        id: 16,
        name: {
            ja: 'マクドナルド - マリンドライブ店',
            en: "McDonald's - Marine Drive",
            zh: '麦当劳 - 海滨街店'
        },
        address: {
            ja: 'セーマリンドライブ396番地, バンクーバー',
            en: '396 SW Marine Dr, Vancouver',
            zh: '温哥华海滨街396号'
        },
        position: [49.2097, -123.1160],
        type: 'mcdonalds',
        hours: {
            ja: '24時間営業',
            en: 'Open 24 hours',
            zh: '24小时营业'
        },
        isOpen24h: true,
        features: ['accessible', 'clean', 'free', 'open24h'],
        ratings: [],
        comments: [],
        averageRating: 0
    },
    {
        id: 17,
        name: {
            ja: 'マクドナルド - ビクトリアドライブ店',
            en: "McDonald's - Victoria Drive",
            zh: '麦当劳 - 维多利亚街店'
        },
        address: {
            ja: 'キングウェイ3444番地, バンクーバー',
            en: '3444 Kingsway, Vancouver',
            zh: '温哥华金斯威街3444号'
        },
        position: [49.2316, -123.0368],
        type: 'mcdonalds',
        hours: {
            ja: '24時間営業',
            en: 'Open 24 hours',
            zh: '24小时营业'
        },
        isOpen24h: true,
        features: ['accessible', 'clean', 'free', 'open24h'],
        ratings: [],
        comments: [],
        averageRating: 0
    },

    // バンクーバー - ティムホートンズに追加
    {
        id: 31,
        name: {
            ja: 'ティムホートンズ - フレーザー通り店',
            en: 'Tim Hortons - Fraser',
            zh: 'Tim Hortons - 弗雷泽店'
        },
        address: {
            ja: 'フレーザー通り6395番地, バンクーバー',
            en: '6395 Fraser St, Vancouver',
            zh: '温哥华弗雷泽街6395号'
        },
        position: [49.2277, -123.0903],
        type: 'timhortons',
        hours: {
            ja: '6:00-23:00',
            en: '6:00-23:00',
            zh: '6:00-23:00'
        },
        isOpen24h: false,
        features: ['accessible', 'clean', 'free'],
        ratings: [],
        comments: [],
        averageRating: 0
    },
    {
        id: 32,
        name: {
            ja: 'ティムホートンズ - キラーニー店',
            en: 'Tim Hortons - Kerr',
            zh: 'Tim Hortons - 基尔店'
        },
        address: {
            ja: 'キラーニーストリート2750番地, バンクーバー',
            en: '2750 Kingsway, Vancouver',
            zh: '温哥华基尔街2750号'
        },
        position: [49.2337, -123.0474],
        type: 'timhortons',
        hours: {
            ja: '6:00-23:00',
            en: '6:00-23:00',
            zh: '6:00-23:00'
        },
        isOpen24h: false,
        features: ['accessible', 'clean', 'free'],
        ratings: [],
        comments: [],
        averageRating: 0
    },

    // コミュニティセンターに追加
    {
        id: 49,
        name: {
            ja: 'チャンプレインハイツ コミュニティセンター',
            en: 'Champney Park Community Centre',
            zh: '尚普尼公园社区中心'
        },
        address: {
            ja: 'マキナナドライブ3350番地, バンクーバー',
            en: '3350 Maquinna Dr, Vancouver',
            zh: '温哥华马金纳街3350号'
        },
        position: [49.2154, -123.0387],
        type: 'community',
        hours: {
            ja: '月-金: 7:00-21:00, 土-日: 9:00-17:00',
            en: 'Mon-Fri: 7:00-21:00, Sat-Sun: 9:00-17:00',
            zh: '周一至周五: 7:00-21:00, 周六至周日: 9:00-17:00'
        },
        isOpen24h: false,
        features: ['accessible', 'clean', 'free', 'babyChanging'],
        ratings: [],
        comments: [],
        averageRating: 0
    },
    {
        id: 50,
        name: {
            ja: 'サンセット コミュニティセンター',
            en: 'Sunset Community Centre',
            zh: '日落社区中心'
        },
        address: {
            ja: 'マインストリート6810番地, バンクーバー',
            en: '6810 Main St, Vancouver',
            zh: '温哥华主街6810号'
        },
        position: [49.2236, -123.1008],
        type: 'community',
        hours: {
            ja: '月-金: 7:00-21:00, 土-日: 9:00-17:00',
            en: 'Mon-Fri: 7:00-21:00, Sat-Sun: 9:00-17:00',
            zh: '周一至周五: 7:00-21:00, 周六至周日: 9:00-17:00'
        },
        isOpen24h: false,
        features: ['accessible', 'clean', 'free', 'babyChanging'],
        ratings: [],
        comments: [],
        averageRating: 0
    },

    // 図書館に追加
    {
        id: 69,
        name: {
            ja: 'チャンプレインハイツ図書館',
            en: 'Champney Park Library',
            zh: '尚普尼公园图书馆'
        },
        address: {
            ja: 'キラーニーストリート7110番地, バンクーバー',
            en: '7110 Kerr St, Vancouver',
            zh: '温哥华基尔街7110号'
        },
        position: [49.2178, -123.0478],
        type: 'library',
        hours: {
            ja: '月-木: 10:00-21:00, 金-土: 10:00-18:00, 日: 11:00-17:00',
            en: 'Mon-Thu: 10:00-21:00, Fri-Sat: 10:00-18:00, Sun: 11:00-17:00',
            zh: '周一至周四: 10:00-21:00, 周五至周六: 10:00-18:00, 周日: 11:00-17:00'
        },
        isOpen24h: false,
        features: ['accessible', 'clean', 'free', 'babyChanging'],
        ratings: [],
        comments: [],
        averageRating: 0
    },
    {
        id: 70,
        name: {
            ja: 'サウスヒル図書館',
            en: 'South Hill Library',
            zh: '南希图书馆'
        },
        address: {
            ja: 'フレーザーストリート6076番地, バンクーバー',
            en: '6076 Fraser St, Vancouver',
            zh: '温哥华弗雷泽街6076号'
        },
        position: [49.2317, -123.0903],
        type: 'library',
        hours: {
            ja: '月-木: 10:00-21:00, 金-土: 10:00-18:00, 日: 11:00-17:00',
            en: 'Mon-Thu: 10:00-21:00, Fri-Sat: 10:00-18:00, Sun: 11:00-17:00',
            zh: '周一至周四: 10:00-21:00, 周五至周六: 10:00-18:00, 周日: 11:00-17:00'
        },
        isOpen24h: false,
        features: ['accessible', 'clean', 'free', 'babyChanging'],
        ratings: [],
        comments: [],
        averageRating: 0
    },

    // ガソリンスタンドに追加
    {
        id: 123,
        name: {
            ja: 'Shell - マリンドライブ店',
            en: 'Shell - Marine Drive',
            zh: 'Shell - 海滨街店'
        },
        address: {
            ja: 'グランドビュー8686番地, バンクーバー',
            en: '8686 Granville St, Vancouver',
            zh: '温哥华格兰德街8686号'
        },
        position: [49.2097, -123.1401],
        type: 'gasstation',
        hours: {
            ja: '24時間営業',
            en: 'Open 24 hours',
            zh: '24小时营业'
        },
        isOpen24h: true,
        features: ['accessible', 'clean', 'free', 'open24h'],
        ratings: [],
        comments: [],
        averageRating: 0
    },
    {
        id: 124,
        name: {
            ja: 'Petro Canada - キングスウェイ店',
            en: 'Petro Canada - Kingsway',
            zh: 'Petro Canada - 金斯威店'
        },
        address: {
            ja: 'キングウェイ3205番地, バンクーバー',
            en: '3205 Kingsway, Vancouver',
            zh: '温哥华金斯威街3205号'
        },
        position: [49.2337, -123.0368],
        type: 'gasstation',
        hours: {
            ja: '24時間営業',
            en: 'Open 24 hours',
            zh: '24小时营业'
        },
        isOpen24h: true,
        features: ['accessible', 'clean', 'free', 'open24h'],
        ratings: [],
        comments: [],
        averageRating: 0
    },
    {
        id: 125,
        name: {
            ja: 'リアルカナディアンスーパーストア - マリンドライブ店',
            en: 'Real Canadian Superstore - Marine Drive',
            zh: 'Real Canadian Superstore - 海滨街店'
        },
        address: {
            ja: 'マリンドライブ1301番地, バンクーバー',
            en: '1301 Marine Dr, Vancouver',
            zh: '温哥华海滨街1301号'
        },
        position: [49.2097, -123.1160],
        type: 'superstore',
        hours: {
            ja: '24時間営業',
            en: 'Open 24 hours',
            zh: '24小时营业'
        },
        isOpen24h: true,
        features: ['accessible', 'clean', 'free', 'open24h'],
        ratings: [],
        comments: [],
        averageRating: 0
    },
    // West Point Grey エリアの施設を追加
    {
        id: 126,
        name: {
            ja: 'ジェリコービーチ パブリックトイレ',
            en: 'Jericho Beach Public Restroom',
            zh: '杰里科海滩公共厕所'
        },
        address: {
            ja: 'ポイントグレイロード3941番地, バンクーバー',
            en: '3941 Point Grey Rd, Vancouver',
            zh: '温哥华灰角路3941号'
        },
        position: [49.2721, -123.1967],
        type: 'community',
        hours: {
            ja: '6:00-22:00',
            en: '6:00-22:00',
            zh: '6:00-22:00'
        },
        isOpen24h: false,
        features: ['accessible', 'clean', 'free'],
        ratings: [],
        comments: [],
        averageRating: 0
    },
    {
        id: 127,
        name: {
            ja: 'ウエストポイントグレイ コミュニティセンター',
            en: 'West Point Grey Community Centre',
            zh: '西灰角社区中心'
        },
        address: {
            ja: 'トリミンロード4397番地, バンクーバー',
            en: '4397 W 2nd Ave, Vancouver',
            zh: '温哥华西2大道4397号'
        },
        position: [49.2705, -123.2037],
        type: 'community',
        hours: {
            ja: '月-金: 9:00-21:00, 土-日: 9:00-17:00',
            en: 'Mon-Fri: 9:00-21:00, Sat-Sun: 9:00-17:00',
            zh: '周一至周五: 9:00-21:00, 周六至周日: 9:00-17:00'
        },
        isOpen24h: false,
        features: ['accessible', 'clean', 'free', 'babyChanging'],
        ratings: [],
        comments: [],
        averageRating: 0
    },
    // Kerrisdale エリアの施設を追加
    {
        id: 128,
        name: {
            ja: 'ケリスデール コミュニティセンター',
            en: 'Kerrisdale Community Centre',
            zh: '克里斯代尔社区中心'
        },
        address: {
            ja: 'ウエスト42アベニュー5851番地, バンクーバー',
            en: '5851 West Blvd, Vancouver',
            zh: '温哥华西林荫大道5851号'
        },
        position: [49.2336, -123.1557],
        type: 'community',
        hours: {
            ja: '月-金: 6:00-22:00, 土-日: 9:00-17:00',
            en: 'Mon-Fri: 6:00-22:00, Sat-Sun: 9:00-17:00',
            zh: '周一至周五: 6:00-22:00, 周六至周日: 9:00-17:00'
        },
        isOpen24h: false,
        features: ['accessible', 'clean', 'free', 'babyChanging'],
        ratings: [],
        comments: [],
        averageRating: 0
    },
    {
        id: 129,
        name: {
            ja: 'ケリスデール図書館',
            en: 'Kerrisdale Library',
            zh: '克里斯代尔图书馆'
        },
        address: {
            ja: 'ウエスト42アベニュー2112番地, バンクーバー',
            en: '2112 W 42nd Ave, Vancouver',
            zh: '温哥华西42大道2112号'
        },
        position: [49.2336, -123.1577],
        type: 'library',
        hours: {
            ja: '月-木: 10:00-21:00, 金-土: 10:00-18:00, 日: 11:00-17:00',
            en: 'Mon-Thu: 10:00-21:00, Fri-Sat: 10:00-18:00, Sun: 11:00-17:00',
            zh: '周一至周四: 10:00-21:00, 周五至周六: 10:00-18:00, 周日: 11:00-17:00'
        },
        isOpen24h: false,
        features: ['accessible', 'clean', 'free', 'babyChanging'],
        ratings: [],
        comments: [],
        averageRating: 0
    },
    // Arbutus RidgeとShaughnessyエリアの施設を追加
    {
        id: 130,
        name: {
            ja: 'アーバタス・リッジ コミュニティセンター',
            en: 'Arbutus Ridge Community Centre',
            zh: '爱彼迪斯岭社区中心'
        },
        address: {
            ja: 'アーバタス通り4131番地, バンクーバー',
            en: '4131 Arbutus St, Vancouver',
            zh: '温哥华爱彼迪斯街4131号'
        },
        position: [49.2486, -123.1531],
        type: 'community',
        hours: {
            ja: '月-金: 7:00-21:00, 土-日: 9:00-17:00',
            en: 'Mon-Fri: 7:00-21:00, Sat-Sun: 9:00-17:00',
            zh: '周一至周五: 7:00-21:00, 周六至周日: 9:00-17:00'
        },
        isOpen24h: false,
        features: ['accessible', 'clean', 'free', 'babyChanging'],
        ratings: [],
        comments: [],
        averageRating: 0
    },
    {
        id: 131,
        name: {
            ja: 'ショーネシー図書館',
            en: 'Shaughnessy Library',
            zh: '肖内西图书馆'
        },
        address: {
            ja: 'グランビル通り1920番地, バンクーバー',
            en: '1920 Granville St, Vancouver',
            zh: '温哥华格兰维尔街1920号'
        },
        position: [49.2571, -123.1385],
        type: 'library',
        hours: {
            ja: '月-木: 10:00-21:00, 金-土: 10:00-18:00, 日: 11:00-17:00',
            en: 'Mon-Thu: 10:00-21:00, Fri-Sat: 10:00-18:00, Sun: 11:00-17:00',
            zh: '周一至周四: 10:00-21:00, 周五至周六: 10:00-18:00, 周日: 11:00-17:00'
        },
        isOpen24h: false,
        features: ['accessible', 'clean', 'free', 'babyChanging'],
        ratings: [],
        comments: [],
        averageRating: 0
    },
    {
        id: 132,
        name: {
            ja: 'セーフウェイ - アーバタス店',
            en: 'Safeway - Arbutus',
            zh: 'Safeway - 爱彼迪斯店'
        },
        address: {
            ja: 'アーバタス通り4255番地, バンクーバー',
            en: '4255 Arbutus St, Vancouver',
            zh: '温哥华爱彼迪斯街4255号'
        },
        position: [49.2486, -123.1531],
        type: 'superstore',
        hours: {
            ja: '7:00-22:00',
            en: '7:00-22:00',
            zh: '7:00-22:00'
        },
        isOpen24h: false,
        features: ['accessible', 'clean', 'free'],
        ratings: [],
        comments: [],
        averageRating: 0
    },
    // Fairviewエリアの施設を追加
    {
        id: 133,
        name: {
            ja: 'バンクーバー総合病院',
            en: 'Vancouver General Hospital',
            zh: '温哥华综合医院'
        },
        address: {
            ja: 'ウエスト12アベニュー899番地, バンクーバー',
            en: '899 W 12th Ave, Vancouver',
            zh: '温哥华西12大道899号'
        },
        position: [49.2610, -123.1234],
        type: 'community',
        hours: {
            ja: '24時間営業',
            en: 'Open 24 hours',
            zh: '24小时营业'
        },
        isOpen24h: true,
        features: ['accessible', 'clean', 'free', 'babyChanging', 'open24h'],
        ratings: [],
        comments: [],
        averageRating: 0
    },
    {
        id: 134,
        name: {
            ja: 'ブロードウェイ＆オーク セーフウェイ',
            en: 'Safeway - Broadway & Oak',
            zh: 'Safeway - 百老汇和橡树店'
        },
        address: {
            ja: 'ウエストブロードウェイ2315番地, バンクーバー',
            en: '2315 W Broadway, Vancouver',
            zh: '温哥华西百老汇街2315号'
        },
        position: [49.2636, -123.1577],
        type: 'superstore',
        hours: {
            ja: '7:00-22:00',
            en: '7:00-22:00',
            zh: '7:00-22:00'
        },
        isOpen24h: false,
        features: ['accessible', 'clean', 'free'],
        ratings: [],
        comments: [],
        averageRating: 0
    },
    {
        id: 135,
        name: {
            ja: 'マウントプレザント コミュニティセンター',
            en: 'Mount Pleasant Community Centre',
            zh: '蒙特利尔社区中心'
        },
        address: {
            ja: 'オンタリオストリート1 番地, バンクーバー',
            en: '1 Kingsway, Vancouver',
            zh: '温哥华京士威1号'
        },
        position: [49.2632, -123.1003],
        type: 'community',
        hours: {
            ja: '月-金: 6:00-22:00, 土-日: 8:00-17:00',
            en: 'Mon-Fri: 6:00-22:00, Sat-Sun: 8:00-17:00',
            zh: '周一至周五: 6:00-22:00, 周六至周日: 8:00-17:00'
        },
        isOpen24h: false,
        features: ['accessible', 'clean', 'free', 'babyChanging'],
        ratings: [],
        comments: [],
        averageRating: 0
    },
    // OakridgeとSouth Cambieエリアの施設を追加
    {
        id: 136,
        name: {
            ja: 'オークリッジ・センター',
            en: 'Oakridge Centre',
            zh: '橡树岭中心'
        },
        address: {
            ja: 'ウエスト41アベニュー650番地, バンクーバー',
            en: '650 W 41st Ave, Vancouver',
            zh: '温哥华西41大道650号'
        },
        position: [49.2334, -123.1196],
        type: 'community',
        hours: {
            ja: '月-土: 10:00-21:00, 日: 11:00-18:00',
            en: 'Mon-Sat: 10:00-21:00, Sun: 11:00-18:00',
            zh: '周一至周六: 10:00-21:00, 周日: 11:00-18:00'
        },
        isOpen24h: false,
        features: ['accessible', 'clean', 'free', 'babyChanging'],
        ratings: [],
        comments: [],
        averageRating: 0
    },
    {
        id: 137,
        name: {
            ja: 'サウスキャンビー コミュニティセンター',
            en: 'South Cambie Community Centre',
            zh: '南甘比社区中心'
        },
        address: {
            ja: 'ウエスト42アベニュー4397番地, バンクーバー',
            en: '4397 W 42nd Ave, Vancouver',
            zh: '温哥华西42大道4397号'
        },
        position: [49.2334, -123.1156],
        type: 'community',
        hours: {
            ja: '月-金: 7:00-21:00, 土-日: 9:00-17:00',
            en: 'Mon-Fri: 7:00-21:00, Sat-Sun: 9:00-17:00',
            zh: '周一至周五: 7:00-21:00, 周六至周日: 9:00-17:00'
        },
        isOpen24h: false,
        features: ['accessible', 'clean', 'free', 'babyChanging'],
        ratings: [],
        comments: [],
        averageRating: 0
    },
    {
        id: 138,
        name: {
            ja: 'セーフウェイ - オークリッジ店',
            en: 'Safeway - Oakridge',
            zh: 'Safeway - 橡树岭店'
        },
        address: {
            ja: 'オーク通り5595番地, バンクーバー',
            en: '5595 Oak St, Vancouver',
            zh: '温哥华橡树街5595号'
        },
        position: [49.2334, -123.1276],
        type: 'superstore',
        hours: {
            ja: '7:00-22:00',
            en: '7:00-22:00',
            zh: '7:00-22:00'
        },
        isOpen24h: false,
        features: ['accessible', 'clean', 'free'],
        ratings: [],
        comments: [],
        averageRating: 0
    }
];

// ローカルストレージからコメントと評価を読み込む
function loadStoredData() {
    const storedData = localStorage.getItem('toiletData');
    if (storedData) {
        const parsedData = JSON.parse(storedData);
        toilets.forEach(toilet => {
            const storedToilet = parsedData.find(t => t.id === toilet.id);
            if (storedToilet) {
                toilet.ratings = storedToilet.ratings || [];
                toilet.comments = storedToilet.comments || [];
                toilet.averageRating = storedToilet.averageRating || 0;
            }
        });
    }
}

// データを保存
function saveData() {
    const dataToSave = toilets.map(toilet => ({
        id: toilet.id,
        ratings: toilet.ratings,
        comments: toilet.comments,
        averageRating: toilet.averageRating
    }));
    localStorage.setItem('toiletData', JSON.stringify(dataToSave));
}

// 初期データ読み込み
loadStoredData();

export { toilets, saveData }; 