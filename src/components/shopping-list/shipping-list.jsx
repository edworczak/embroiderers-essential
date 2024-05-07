import { useEffect } from "react";
import { useDispatch } from "react-redux";

import dummyUser from "../../data/dummyUser";
import { updateShoppingListItemsCount } from "./slice/shopping-list-items-count";

const ShoppingList = () => {
    const dispatch = useDispatch();
    const demoData = dummyUser.shoppingList.items;
    const itemsCount = Object.keys(demoData).length;
    useEffect(() => {
        dispatch(updateShoppingListItemsCount(itemsCount));
    });
    return <div>{"lista"}</div>;
};

export default ShoppingList;
