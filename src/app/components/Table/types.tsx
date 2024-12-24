type IconType = 'dobble-circle' | 'circle' | 'triangle' | 'batsu';

export interface RankingItemType {
    rank: number;
    name: string;
    badgeImage?: string;
    productImage: string;
    url: string;
    rating: string;
    campaign: {
        text: string;
        note?: string;
    };
    price: {
        original?: string;
        current: string;
    };
    ageAndBreed: {
        evaluation: IconType;
        text: string;
    };
    features: string[];
    materials: {
        evaluation: string;
        detail?: {
            title: string;
            content: string;
        };
    };
    humanGrade: string;
    allergyMeasures: {
        evaluation: string;
        detail?: {
            title: string;
            content: string;
        };
    };
    tearStains: {
        evaluation: string;
        detail?: {
            title: string;
            content: string;
        };
    };
    coat: {
        evaluation: string;
        detail?: {
            title: string;
            content: string;
        };
    };
    palatability: {
        evaluation: string;
        detail?: {
            title: string;
            content: string;
        };
    };
    mainIngredients: string;
};