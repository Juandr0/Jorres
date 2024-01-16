import { Item } from "../interfaces/Item";

export type StackScreens = {
    HomeScreen: undefined;
    AddScreen: { itemToEdit?: Item };
};
