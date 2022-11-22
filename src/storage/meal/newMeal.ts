import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "../StorageConfig";
import { getAllMeals } from "./getAllMeals";
import { MealProps } from "./mealType";

export async function newMeal (meal: MealProps) {
    try {
        const storedMeals = await getAllMeals();

        const storage = JSON.stringify([...storedMeals, meal]);
        return await AsyncStorage.setItem(MEAL_COLLECTION, storage);
        
    } catch (error) {
        throw error;
    }
}