export const toogleTrueOrDeleteByObjectKey = (map: Set<string>, key: string): Set<string> => {
    const isSelected = map.has(key);

    if (isSelected) {
        const newObject = new Set(map);
        newObject.delete(key);
        return newObject;
    }

    const res = new Set(map);
    res.add(key);
    return res;
}
