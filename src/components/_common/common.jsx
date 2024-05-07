export const getElementFromArrayByID = (array, id) =>
    array.filter((object) => {
        return object.id === id;
    })[0];

export const isElementInArray = (array, id) => {
    const filterElement = getElementFromArrayByID(array, id);
    return !!filterElement;
};
