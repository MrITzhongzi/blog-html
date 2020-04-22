class LocalStorageUtil {
    constructor() {
        this.storage = window.localStorage;
        //过期时间为一天
        this.expired = 1000 * 60 * 60 * 24;
    }

    /**
     * 设置带过期时间的LocalStorage
     * @param key
     * @param value
     * @param expired
     * @returns {Object}
     */
    set(key, value, expired) {
        let tempObj = new Object();
        tempObj.key = key;
        tempObj.value = value;
        if(expired) {
            tempObj.expired =Date.now() +  expired;
        } else  {
            tempObj.expired =Date.now() +  this.expired;
        }
        const tempStr = JSON.stringify(tempObj);
        this.storage[key] =  tempStr;
        return tempObj;
    }


    /***
     * 获取带过期时间的 storage
     * @param key
     * @returns {null|*}
     */
    get(key) {
        let storageData = this.storage.getItem(key);
        console.log(storageData);
        if(!storageData) {
            console.log(1)
            return null;
        }
        let tempObj = JSON.parse(storageData);
        let expired = tempObj["expired"] || Date.now();
        console.log(expired);
        if(Date.now() > expired) {
            console.log(2)
            this.remove(key);
            return null;
        }

        return tempObj.value
    }

    remove(key) {
        this.storage.removeItem(key);
    }
}

export default LocalStorageUtil;