export const cache = {
    set(name, data, expired) {
        const storeData = {
            data,
            expired
        }
        localStorage.setItem(name, JSON.stringify(storeData))
    },
    get(name) {
        const storeData = JSON.parse(localStorage.getItem(name))
        const now = Date.now()
        if(now - storeData?.expired > 0) {
            return storeData.data
        }
    },
    remove(name) {
        localStorage.removeItem(name)
    }
}