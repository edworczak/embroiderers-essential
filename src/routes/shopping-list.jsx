import pl from "../data/pl";

const ShoppingListPage = () => {
    return (
        <div>
            <h1>{pl.shoppingList.title}</h1>
            <p>{pl.shoppingList.null}</p>
        </div>
    );
};

export default ShoppingListPage;
