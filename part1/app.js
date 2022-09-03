url = 'http://numbersapi.com/'
// header = {'Content-Type': 'application/json'}

//Part 1 - #1
const favoriteNum = 29
const favoriteNumFact = axios.get(`${url}${favoriteNum}/?json`)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err))



//#2

const num1 = 10
const num2 = 29
const num3 = 19
const num4 = 87

const divMultiNums = document.querySelector('#multi-nums');
const pMultiNums = document.createElement('p');

const multiNumFact = axios.get(`${url}${num1},${num2},${num3},${num4}/?json`)
    .then((res) => {
        const response = res.data
        values = Object.values(response)
        for (let el of values) {
            pMultiNums.textContent += el + ' '
            divMultiNums.append(pMultiNums)
        }

    })
    .catch((err) => console.log(err))

//#3
const favoriteNumPromises = []
const divMultiFavNums = document.querySelector('#multi-fav-nums')
const pMultiFavNums = document.createElement('p');

for (let i = 1; i < 5; i++){
    favoriteNumPromises.push(
        axios.get(`${url}${favoriteNum}/?json`)
    );
}

Promise.all(favoriteNumPromises)
    .then(favoriteNumFactArr => {
        for (res of favoriteNumFactArr) {
            const response = res.data.text
            values = Object.values(response)
            for (let el of values) {
                pMultiFavNums.textContent += el
                divMultiFavNums.append(pMultiFavNums)
        }
        }
    })
    .catch(err => console.log(err));





