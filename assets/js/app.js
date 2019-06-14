const swURL = 'https://swapi.co/api/people/';
const localData = '../../data.json';

const charOffline = [];

const lePic = (() => {
    const getPic = name => {
        return fetch(localData)
            .then(res => res.json())
            .then(e => {
                getImg(e);
            });
    }

    const getImg = e => {
        e.map(result => {
            if(result.name == name) {
                console.log(result.image);
                return result.image;
            }
        });
    }

    return {
        getPic,
        getImg,
    }
})();

lePic.getPic('Luke Skywalker').then(res => console.log(res));



//getPic(1);

const getData = url => {
    API.get(url)
    .then(x => {
        //console.log(x);
    });
}

getData(swURL)


//console.log(charOffline);



//console.log(charOnline);
//luke c3 r2 darth leia owen beru