import key from  "./../APIKeys.json";  
import userData from "./../userData/userData";

class API {
    Login(userName, password) {
        return new Promise(function (resolve,reject) {
            let url = "https://xpertcollector.azurewebsites.net/api/api/login?username=" + userName + "&password=" + password;
            
            fetch(url)
            .then(response => response.json())
            .then((response) => {
                console.log(response)
                if(response.login == true) {
                    userData.userID = response.userID;
                    userData.username = response.username;
                    userData.userDisplayName = response.userDisplayName
                    resolve(true)
                }
                else {
                    resolve(false)
                }
            })
        })
    }


    GetBarcodeItem(UPCCode) {
        return new Promise(function (resolve,reject) {
            let url = "https://api.barcodespider.com/v1/lookup?token=" + key.barcodeSpider + "&upc=" + UPCCode
            let item

            fetch(url)
            .then(response => response.json())
            .then((response) => {
                //console.log(response.item_response)
                if(response.item_response.code == 200) {
                    item = response
                }
                else {
                    item = false
                }
                resolve(item);
            })
        });
        
    }


    GetItems() {
        return new Promise(function (resolve,reject) {
            let url = "https://xpertcollector.azurewebsites.net/api/api/getitems"
            let item

            fetch(url)
            .then(response => response.json())
            .then((response) => {
                console.log(response)
                item = response
                resolve(item);
            })
        });
    }

    GetUserItems() {
        return new Promise(function (resolve,reject) {
            let url = "https://xpertcollector.azurewebsites.net/api/api/getuseritems?userID=" + userData.userID
            let item

            fetch(url)
            .then(response => response.json())
            .then((response) => {
                console.log(response)
                item = response
                resolve(item);
            })
        });
    }

    PostItem(item) {
        console.log(item)
        let url = "https://xpertcollector.azurewebsites.net/api/api/postitem"
        let body = JSON.stringify({
            itemName: item.item_attributes.title,
            upcCode: item.item_attributes.upc,
            userID: userData.userID
        })
        const headers = {
            Accept: "application/json",
            "Content-Type": "application/json"
        }

        fetch(url, {
            method: "POST",
            headers: headers,
            body: body,
            timeout: 500
        })
    }
}

export default API;