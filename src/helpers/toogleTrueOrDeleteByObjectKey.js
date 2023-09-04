export const toogleTrueOrDeleteByObjectKey = (object, key) => {
    const isSelected = object[key] === true;

    if (isSelected) {
        const newObject = { ...object };
        delete newObject[key];
        return newObject;
    }

    return {
        ...object,
        [key]: true,
    }
}
