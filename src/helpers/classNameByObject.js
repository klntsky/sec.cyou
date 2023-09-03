export const classNameByObject = (object) =>  Object.keys(object)
    .reduce((classNames, name) => {
        if (object[name]) classNames.push(name);
        return classNames;
    }, [])
    .join(' ')
