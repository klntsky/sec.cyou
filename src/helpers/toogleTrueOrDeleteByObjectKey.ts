interface StringObject {
    [str: string]: boolean;
}

export const toogleTrueOrDeleteByObjectKey = (object: StringObject, key: string) => {
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
