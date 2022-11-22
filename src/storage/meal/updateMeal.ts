import AsyncStorage from "@react-native-async-storage/async-storage";
import { getMeal } from "./getMeal";
import { BEST_MEALS_FOR_A_DIET, MEAL_COLLECTION } from "../StorageConfig";
import { getAllMeals } from "./getAllMeals";
import { MealProps } from "./mealType";
import { getStatistic } from "./getStatistic";

export async function updateMeal(mealId: string, meal: MealProps) {
    try {
        const storedMeals = await getAllMeals();
        const storedMeal = await getMeal(mealId);
        const { bestSequenceOfMealsWithinTheDiet } = await getStatistic();

        const filterMeals = storedMeals.filter((meal: MealProps) => meal.id !== mealId);

        const updatedMeal = { ...storedMeal, ...meal };

        const storage = JSON.stringify([...filterMeals, updatedMeal]);

        await AsyncStorage.setItem(MEAL_COLLECTION, storage);

        if(meal.withinTheDiet !== storedMeal.withinTheDiet) {
            if(meal.withinTheDiet === true) {
                await AsyncStorage.setItem(BEST_MEALS_FOR_A_DIET, String(bestSequenceOfMealsWithinTheDiet + 1));
            } else {
                await AsyncStorage.setItem(BEST_MEALS_FOR_A_DIET, String(bestSequenceOfMealsWithinTheDiet - 1));
            }
        }

    } catch (error) {
        throw error;
    }
}