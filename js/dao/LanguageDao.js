import {
    AsyncStorage,
} from 'react-native';

import keysData from '../../res/data/keys';
import langsData from '../../res/data/langs';
export var FLAG_LANGUAGE = {flag_language: 'language_dao_language', flag_key: 'language_dao_key'}

export default class LanguageDao {

    constructor(flag) {
      this.flag = flag;

    }
    fetch(){
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem(this.flag,(error,result) => {
                if (error){
                   reject(error);
                   return;
                }
                if (!result){
                    var data = this.flag === FLAG_LANGUAGE.flag_language ? langsData : keysData;
                    this.save(data);
                    resolve(data);
                } else {
                    try {
                        resolve(JSON.parse(result));
                    }catch (e) {
                        reject(e);
                    }
                }
            })
        })
    }
    save(data){
        var stringData = JSON.stringify(data);
        AsyncStorage.setItem(this.flag,stringData,(error,result) => {

        });
    }
}