
console.log(dataJSON);

const findMatch = (word) => {
    API.get(`${swURL}?search=${word}`)
    .then(x => {
        return x.results;
    })
    .then(y => {
        let dataBox = [];
        if((y != undefined) && (y != '')) {
            y.map(result => { 
                dataJSON.map(res => {
                    if(res.name == result.name) {
                        dataBox.push(`
                        <div class="item">
                            <div class="card">
                                <div class="face front">
                                    <div class="overlay">
                                        <h1>${result.name}</h1>
                                    </div>
                                    <img src="${res.image}" alt="">
                                </div>
                                <div class="face back"><h2>${result.name}</h2></div>
                            </div>
                        </div>
                        `);
                    }
                });
            });
            $('.body-container').html(`<div class="content-container">${dataBox.join('')}</div>`);
        } else {
            $('.body-container').html(`<div class="cannot-find"><h1>Find what you are looking for, I cannot.</h1></div>`);
        }
    });
}

$(document).ready(() => {
    $('.search-input').keyup(() => {
        let word = $('.search-input').val();
        if(word != '') {
            $('.body-container').html(`<div class="cannot-find"><img src="assets/images/loader.gif" alt=""></div>`);
            findMatch(word);
        }
    });
});

/*if(y.name == x.name) {
    x.map(result => {
        dataBox.push(`
        <div class="item">
            <div class="card">
                <div class="face front">
                    <img src="${y}" alt="">
                </div>
                <div class="face back"><h2>${e.name}</h2></div>
            </div>
        </div>
        `);
    });
    $('.content-container').html(res);
}*/