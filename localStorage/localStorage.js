export const getData = (key)=>{
    const res = JSON.parse(localStorage.getItem(key))

    return res ? res : []
}


export const setData = (key,arr)=>{
    localStorage.setItem(key, JSON.stringify(arr))
}

export const deleteData = (key)=>{
    localStorage.removeItem(key)
}