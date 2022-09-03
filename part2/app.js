//Part 2

const url = 'https://deckofcardsapi.com/api/deck/'
let game = false;
let deckId;

//#1
$.getJSON(`${url}new/draw/`).then (data => {
    const suit = data.cards[0].suit.toLowerCase();
    const value = data.cards[0].value.toLowerCase();
    console.log(data);
    console.log('#1', `${value} of ${suit}`);
});

//#2
let firstCard;
$.getJSON(`${url}new/draw`)
    .then(data => {
        firstCard = data.cards[0];
        deckId = data.deck_id;
        return $.getJSON(`${url}${deckId}/draw/`);
    })
    .then(data => {
        const secondCard = data.cards[0];
        [firstCard, secondCard].forEach(function(card){
            console.log('#2', `${card.value.toLowerCase()} of ${card.suit.toLowerCase()}`)
        });
    });

//#3
function processBtn(evt) {
    evt.preventDefault();
    // making request to shuffle the cards
    if (game == false){
        $.getJSON(`${url}new/draw/?count=1`).then(data =>{
        game = true
        deckId = data.deck_id
        })
    }
    //making request to draw a card
    $.getJSON(`${url}${deckId}/draw/?count=1`).then (data => {
        showImg(data);
        if (data.remaining == 0) $btn.remove();
    })
    }

function showImg (data){
    let img = data.cards[0].image;
    let angle = Math.random() * 90 - 45;
    let randomX = Math.random() * 40 - 20;
    let randomY = Math.random() * 40 - 20;
    const $imgDiv = $('#img-div');
    $imgDiv.append($('<img>', {
        src: img,
        css: {
            transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
        }
    }))

}

const $btn = $('#btn');
$btn.on('click', processBtn);
