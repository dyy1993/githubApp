import {
    AsyncStorage
} from 'react-native'

export default class DataRepository{

   static fetchNetRepository(url){
        return new Promise((resolve, reject) => {
                fetch(url)
                    .then(response => response.json())
                    .then((responseData)=>{
                        resolve(responseData);
                    })
                    .catch((error) => {
                        reject(error);
                    })

            }

        )
    }
}