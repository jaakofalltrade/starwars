console.log(dataJSON);
const findMatch = (word) => {
    API.get(`${swURL}?search=${word}`)
        .then(y => {
            let prevButton;
            let nextButton;
            if (y.previous == null) {
                prevButton = `<button disabled data-link="${y.previous}" title="Previous" class="page-btn disabled-btn"><i class="fa fa-lg fa-chevron-left"></i></button>`;
            } else {
                prevButton = `<button onclick="showPage('${y.previous}');" data-link="${y.previous}" title="Previous" class="page-btn"><i class="fa fa-lg fa-chevron-left"></i></button>`;
            }

            if (y.next == null) {
                nextButton = `<button disabled data-link="${y.next}" title="Next" class="page-btn disabled-btn"><i class="fa fa-lg fa-chevron-right"></i></button>`;
            } else {
                nextButton = `<button onclick="showPage('${y.next}');" data-link="${y.next}" title="Next" class="page-btn"><i class="fa fa-lg fa-chevron-right"></i></button>`;
            }
            let dataBox = [];
            if ((y != undefined) && (y != '')) {
                y.results.map(result => {
                    dataJSON.map(res => {
                        if (res.name == result.name) {
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
                $('.body-container').html(`
                <div class="content-container">${dataBox.join('')}</div>
                <div class="pagination">
                    <div class="pagination-cont">
                        ${prevButton}
                        ${nextButton}
                    </div>
                </div>
            `);
            } else {
                $('.body-container').html(`<div class="cannot-find"><h1>Find what you are looking for, I cannot.</h1></div>`);
            }
        });
}

const showPage = url => {
    $('.body-container').html(`<div class="cannot-find"><img src="assets/images/loader.gif" alt=""></div>`);
    if (url == 'null' || url == undefined) {
        url = swURL;
    } else {
        $('.body-container').html(`<div class="cannot-find"><img src="assets/images/loader.gif" alt=""></div>`);
    }
    API.get(url)
        .then(y => {
            let prevButton;
            let nextButton;
            if (y.previous == null) {
                prevButton = `<button disabled data-link="${y.previous}" title="Previous" class="page-btn disabled-btn"><i class="fa fa-lg fa-chevron-left"></i></button>`;
            } else {
                prevButton = `<button onclick="showPage('${y.previous}');" data-link="${y.previous}" title="Previous" class="page-btn"><i class="fa fa-lg fa-chevron-left"></i></button>`;
            }

            if (y.next == null) {
                nextButton = `<button disabled data-link="${y.next}" title="Next" class="page-btn disabled-btn"><i class="fa fa-lg fa-chevron-right"></i></button>`;
            } else {
                nextButton = `<button onclick="showPage('${y.next}');" data-link="${y.next}" title="Next" class="page-btn"><i class="fa fa-lg fa-chevron-right"></i></button>`;
            }
            let dataBox = [];
            y.results.map(result => {
                dataJSON.map(res => {
                    if (res.name == result.name) {
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
            $('.body-container').html(`
                <div class="content-container">${dataBox.join('')}</div>
                <div class="pagination">
                    <div class="pagination-cont">
                        ${prevButton}
                        ${nextButton}
                    </div>
                </div>
            `);
        });
}

$(document).ready(() => {
    showPage(swURL);
    $('.search-input').keyup(() => {
        let word = $('.search-input').val();
        if (word != '') {
            $('.body-container').html(`<div class="cannot-find"><img src="assets/images/loader.gif" alt=""></div>`);
            findMatch(word);
        } else {
            showPage(swURL);
        }
    });

});