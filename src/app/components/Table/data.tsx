import { RankingItemType } from './types';

export const rankingData: RankingItemType[] = [
    {
        rank: 1,
        name: 'うまか',
        badgeImage: '/img/ranking-table-top-1.svg',
        productImage: '/img/umaka-product.webp',
        url: 'https://t.afi-b.com/visit.php?a=B10033T-N387625p&p=y881784e',
        rating: 'S',
        campaign: {
            text: '初回63%OFF',
            note: '※回数縛りなし'
        },
        price: {
            original: '5,478',
            current: '1,980'
        },
        ageAndBreed: {
            evaluation: 'dobble-circle',
            text: '全年齢・全犬種'
        },
        features: [
            '九州産華味鳥100％で高タンパク',
            '22種の国産素材',
            '獣医師も絶賛'
        ],
        materials: {
            evaluation: 'dobble-circle',
            detail: {
                title: '詳細はこちら',
                content: '22種の国産素材＆九州産華味鳥を使用'
            }
        },
        humanGrade: 'dobble-circle',
        allergyMeasures: {
            evaluation: 'dobble-circle',
            detail: {
                title: '詳細はこちら',
                content: '着色料フリー/小麦グルテンフリー/ノンオイルコーティング'
            }
        },
        tearStains: {
            evaluation: 'dobble-circle',
            detail: {
                title: '詳細はこちら',
                content: 'ビフィズス菌とオリゴ糖配合で老廃物が溜まりにくい'
            }
        },
        coat: {
            evaluation: 'dobble-circle',
            detail: {
                title: '詳細はこちら',
                content: '良質な国産素材に高タンパクが含まれる・総合栄養食の基準を満たしたフード'
            }
        },
        palatability: {
            evaluation: 'dobble-circle',
            detail: {
                title: '詳細はこちら',
                content: '九州産華味鳥100％ですごい食いつき！かつおぶしの良い香り'
            }
        },
        mainIngredients: '鶏肉、玄米、大麦、かつお節、ビール酵母、ビフィズス菌、グルコサミン、ミネラル類、ビタミン類、他'
    },  
];  
