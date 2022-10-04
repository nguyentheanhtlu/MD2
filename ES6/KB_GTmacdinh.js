const lastIndexOf = (arr,elt,start= arr.length) => {
    for ( let i = start-1; i >=0; i--)
        if (arr[i] === elt) return i
    return -1
}
