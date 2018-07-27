import {getSettings} from '../../getSettings';

export const request = (model, opt = {}, id = '') => {
    return new Promise ((resolve, reject) => {
        getSettings().then(settings => {
            let options = Object.assign({}, opt, {'Content-Type' : 'applications/json'});
            let url = `${settings.api}/${model}/${id}`;
            fetch(url, options)
            .then(res => resolve(res.json()))
            .catch(err => reject(err))
        });

    });
};