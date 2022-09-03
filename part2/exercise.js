//Part 2

//#1
//a single card from a newly shuffled deck
const url = 'https://deckofcardsapi.com/api/deck/'

// const Draw1 = axios.get(`${url}new/draw/?count=1`)
//     .then((res) => {
//         const suit = res.data.cards[0].suit
//         const value = res.data.cards[0].value
//         console.log(`${value} of ${suit}`)
//     })
//     .catch((err) => console.log(err))

//#2

// let twoCards = [];
// twoCards.push(axios.get(`${url}new/draw/?count=1`))
//     .then((res) => {
//         twoCards.push(axios.get(`${url}${res.data.deckId}/draw/?count=1`))
//     })
//     .catch((err) => console.log(err))
cards = [];
axios.get(`${url}new/draw/?count=1`)
    .then((res) => {
        // promises.push(firstCard)
        console.log(res.data)
        const suit = res.data.cards[0].suit
        const value = res.data.cards[0].value
        deckId = res.data.deck_id
        console.log(deckId)
        cards.push(`${value} of ${suit}`)
        return axios.get(`${url}${deckId}/draw/?count=1`)
    })
    .then((res) => {
        // promises.push(secondCard)
        console.log(res.data)
        const suit = res.data.cards[0].suit
        const value = res.data.cards[0].value
        cards.push(`${value} of ${suit}`);
    })
    .catch((err) => console.log(err))

    console.log(cards)

// promises = []

// promises.push(firstCard);
// promises.push(secondCard);  
// Promise.all(promises)
//     .then(cardArr => {
//         for(res of cardArr) {
//             console.log(res)
//         }
//     })
//     .catch(err => console.log(err));