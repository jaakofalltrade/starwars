const findMatch = (word) => {
    API.get(`${swURL}?search=${word}`)
    .then(x => {
        let res = [];
        
        x.results.map(e => {
            
            //console.log(img);
            res.push(`
            <div class="item">
                <div class="card">
                    <div class="face front">
                        <img src="${img}" alt="">
                    </div>
                    <div class="face back"><h2>${e.name}</h2></div>
                </div>
            </div>
            `);
        $('.content-container').html(res);
        });
    });
}

$(document).ready(() => {
    $('.search-input').keyup(() => {
        let word = $('.search-input').val();
        findMatch(word);
    });
});

