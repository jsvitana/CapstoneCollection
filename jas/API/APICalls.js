import key from  "./../APIKeys.json";  

class API {
    GetBarcodeItem(UPCCode) {
        return new Promise(function (resolve,reject) {
            let url = "https://api.barcodespider.com/v1/lookup?token=" + key.barcodeSpider + "&upc=" + UPCCode
            let item

            fetch(url)
            .then(response => response.json())
            .then((response) => {
                console.log(response.item_response)
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
}

export default API;