

export const getData = (key)=>{
    const res = JSON.parse(sessionStorage.getItem(key))

    return res ? res : []
}


export const setData = (key,arr)=>{
    sessionStorage.setItem(key, JSON.stringify(arr))
}

export const deleteData = (key)=>{
    sessionStorage.removeItem(key)
}
