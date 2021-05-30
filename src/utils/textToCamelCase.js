export const textToCamelCase = (text) => {
    const stringArray = text.split('_');
    return stringArray[0].UpperCase() + ' ' + stringArray[1].UpperCase()
}