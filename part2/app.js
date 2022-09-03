const url = 'https://deckofcardsapi.com/api/deck/'
let game = false;
let deckId;
let zIndex = 0; //Increment this every click

async function processBtn(evt) {
    evt.preventDefault();
    // making request to shuffle the cards
    if (game == false){
        const res = await axios.get(`${url}new/shuffle/?deck_count=1`)
        game = true
        console.log(res.data)
        deckId = res.data.deck_id
        console.log(deckId)
    }
    console.log('clicked')
    //making request to draw a card
    const res = await axios.get(`${url}${deckId}/draw/?count=1`)
    .then ((res) => {
        console.log(res.data)
        const suit = res.data.cards[0].suit.toLowerCase();
        const value = res.data.cards[0].value
        deckId = res.data.deck_id
        console.log(deckId)
        console.log('card', `${value} of ${suit}`)

        showImg(value, suit);
    })
    .catch ((err) => console.log(err));
    }


function showImg (value, suit){
    const img = document.createElement('img');
    const imgDiv = document.querySelector('#img-div');
    img.setAttribute('src', `cards/${value}_of_${suit}.png`)
    img.classList.add(`${suit}`);
    img.style.zIndex = zIndex;
    imgDiv.append(img);
    zIndex +=1;

}

const btn = document.querySelector('#btn');
btn.addEventListener('click', processBtn);
