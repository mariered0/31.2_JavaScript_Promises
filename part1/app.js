//With promises

url = 'http://numbersapi.com/'

//Part 1 - 
//#1
const favoriteNum = 29
$.getJSON(`${url}${favoriteNum}/?json`)
    .then((data) => console.log(data))


//#2

let favNums = [10, 29, 19, 87]

const multiNumFact = $.getJSON(`${url}${favNums}/?json`)
    .then((data) => {
        console.log(data);
    })

//#3
// const favoriteNumPromises = []
const divMultiFavNums = document.querySelector('#multi-fav-nums')
// const pMultiFavNums = document.createElement('p');

//Original
// for (let i = 1; i < 5; i++){
//     favoriteNumPromises.push(
//         $.getJSON(`${url}${favoriteNum}/?json`)
//     );
// }

// Promise.all(favoriteNumPromises)
//     .then(favoriteNumFactArr => {
//         for (res of favoriteNumFactArr) {
//             const response = res.data
//             console.log(response);
//             values = Object.values(response)
//             for (let el of values) {
//                 pMultiFavNums.textContent += el
//                 divMultiFavNums.append(pMultiFavNums)
//         }
//         }
//     })

Promise.all(
    Array.from({ length: 4 }, () => {
        return $.getJSON(`${url}${favoriteNum}?json`);
    })
).then(facts => {
    facts.forEach(data => $(divMultiFavNums).append(`<p>${data.text}</p>`))
});





