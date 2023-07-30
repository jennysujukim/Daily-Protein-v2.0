export interface FoodData {
    food: {
        label: string;
        nutrients: {
            ENERC_KCAL: number;
            PROCNT: number;
            CHOCDF: number;
            FAT: number;
        }
    }
}

export interface FoodResponseData {
    data: FoodData[];
    isPending: Boolean;
    error: string | null;
}

export interface FoodListProps {
    lists: FoodData[];
}

export interface AddFoodProps {
    foodName: string;
    foodProtein: number;
}