import { parseString } from 'xml2js';
import sheet from './resources/assets/spritesheets/sheet.xml';
import axios from 'axios';

export default (inputName) => {
    return new Promise((resolve, reject) => {
        axios.get(sheet)
        .then((response) => {
            parseString(response.data, function (error, result) {
                const data = result.TextureAtlas.SubTexture.find(function(elem) {
                    const name = elem.$.name.split('.')[0];
                    if (name === inputName) {
                        return true;
                    }      
                });
                if (data === undefined) {
                    reject(error);
                } else {
                    resolve(data)
                }
            });
        })
        .catch((error) => {
            reject(error);
        });
    })
}