export const toogleTrueOrDeleteByObjectKey = (oldSet: Set<string>, key: string): Set<string> => {
    const isSelected = oldSet.has(key);

    if (isSelected) {
        const newObject = new Set(oldSet);
        newObject.delete(key);
        return newObject;
    }

    const res = new Set(oldSet);
    res.add(key);
    return res;
}
