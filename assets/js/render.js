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
                                <div class="face back">
                                    <div class="back-info">
                                        <div class="back-header"><p>Character Information</p></div>
                                        <div class="back-body">
                                            <p>Name:          ${result.name}</p>
                                            <p>Gender:        ${result.gender}</p>
                                            <p>Birthyear:     ${result.birth_year}</p>
                                            <p>Eye Color:     ${result.eye_color}</p>
                                            <p>Skin Color:    ${result.skin_color}</p>
                                            <p>Height:        ${result.height}</p>
                                            <p>Mass:          ${result.mass}</p>
                                            <p>Species:       ${res.species}</p>
                                            <p>Born Location: ${res.bornLocation}</p>
                                        </div>
                                    </div>
                                </div>
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

const showPage = url => {
    API.get(url)
    .then(y => {
        let dataBox = [];
        y.results.map(result => { 
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
                            <div class="face back">
                                <div class="back-info">
                                    <div class="back-header"><p>Character Information</p></div>
                                    <div class="back-body">
                                        <p>Name:          ${result.name}</p>
                                        <p>Gender:        ${result.gender}</p>
                                        <p>Birthyear:     ${result.birth_year}</p>
                                        <p>Eye Color:     ${result.eye_color}</p>
                                        <p>Skin Color:    ${result.skin_color}</p>
                                        <p>Height:        ${result.height}</p>
                                        <p>Mass:          ${result.mass}</p>
                                        <p>Species:       ${res.species}</p>
                                        <p>Born Location: ${res.bornLocation}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    `);
                }
            });
        });
        $('.body-container').html(`<div class="content-container">${dataBox.join('')}</div>
        <div class="pagination"><button></button></div>
        `);
    });
}

showPage(swURL);

$(document).ready(() => {
    $('.search-input').keyup(() => {
        let word = $('.search-input').val();
        if(word != '') {
            $('.body-container').html(`<div class="cannot-find"><img src="assets/images/loader.gif" alt=""></div>`);
            findMatch(word);
        }
    });
});