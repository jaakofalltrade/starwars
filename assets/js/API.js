const swURL = 'https://swapi.co/api/people/';
const localData = 'http://127.0.0.1:5500/data.json';


const API = (() => {
    const handleErrors = res => {
        if (!res.ok) {
            throw Error(res.statusText);
        } else {
            return res;
        }
    }

    const get = path => {
        return fetch(`${path}`)
            .then(handleErrors)
            .then(res => res.json());
    }

    return {
        get,
    };
})();