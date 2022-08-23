export const ingredientReducer = arr => {
    return arr.reduce((accumulator, ingredient) => {
        return {...accumulator, [ingredient.type]: [...accumulator[ingredient.type] || [], ingredient]}
    }, {})
};