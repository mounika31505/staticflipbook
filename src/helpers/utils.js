const capitalize = (a) => {
    if(typeof(a) === "string"){
        return a.toUpperCase()
    }
    return 400
}

export {
    capitalize
}