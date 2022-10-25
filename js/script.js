const url = 'https://cdn.contentful.com/spaces/e058krihw4z0/environments/master/entries?access_token=I_an8ZFVPYiQvNyFUHm_e2yy6QYVDkWYvUu6Etd23ZI'
let category = document.querySelector('#category')
let img = document.querySelector('#question-img')
let question = document.querySelector('#question')
let answers = document.querySelectorAll('.answers')
let ans1 = document.querySelector('#ans1')
let ans2 = document.querySelector('#ans2')
let ans3 = document.querySelector('#ans3')
let ans4 = document.querySelector('#ans4')
let player1 = document.querySelector('#player1')
let player2 = document.querySelector('#player1')
let player1Name = document.querySelector('#player1-name')
let player2Name = document.querySelector('#player2-name')
let player1Score = document.querySelector('#player1-score')
let player2Score = document.querySelector('#player2-score')
let player1CurrentScore = 0
let player2CurrentScore = 0
let questions = null



//turn
player1Name.style.textShadow = '4px 3px darkSeaGreen'
let turn = 1
const togglePlayer = () => {
    if(turn%2 === 1) {
        player2Name.style.textShadow = 'none'
        player1Name.style.textShadow = '4px 3px darkSeaGreen'
        return 1
    } else {
        player1Name.style.textShadow = 'none'
        player2Name.style.textShadow = '4px 3px darkSeaGreen'
        return 2
    }
}



const empty = () => {
    answers.forEach(element => element.style.backgroundColor = 'darkSalmon')
}

const initialState = () => {
    category.innerText = questions[0].category
    img.src = questions[0].imageSource
    question.innerText = questions[0].question
    ans1.innerText = questions[0].a
    ans2.innerText = questions[0].b
    ans3.innerText = questions[0].c
    ans4.innerText = questions[0].d
}

let i = 0



answers.forEach(element => element.addEventListener('click', event => {
            
            if (event.target.innerText === questions[i].correct) {
                event.target.style.backgroundColor = 'darkSeaGreen'
                if (togglePlayer() === 1) {
                    player1CurrentScore++
                    player1Score.innerText = player1CurrentScore
                }
                else if (togglePlayer() === 2) {
                    player2CurrentScore++
                    player2Score.innerText = player2CurrentScore
                }
                turn++
                togglePlayer();
            } else {
                event.target.style.backgroundColor = 'tomato'
                turn++
                togglePlayer();
            }
            empty()
            i++
            if (i === questions.length) {
                if (player1CurrentScore > player2CurrentScore) {
                    console.log('player 1 wins');
                } else if (player2CurrentScore > player2CurrentScore) {
                    console.log('player 2 wins');
                } else {
                    console.log('its a tie!');
                }
                return
            }
            console.log();
            category.innerText = questions[i].category
            img.src = questions[i].imageSource
            question.innerText = questions[i].question
            ans1.innerText = questions[i].a
            ans2.innerText = questions[i].b
            ans3.innerText = questions[i].c
            ans4.innerText = questions[i].d


}))

// const game = (questions) => {
//     for (let i = 0; i < questions.length; i++) {
//         category.innerText = questions[i].category
//         img.src = questions[i].imageSource
//         question.innerText = questions[i].question
//         ans1.innerText = questions[i].a
//         ans2.innerText = questions[i].b
//         ans3.innerText = questions[i].c
//         ans4.innerText = questions[i].d
//     }
// }








// const game = (questions) => {
//     for (let i = 0; i < questions.length; i++) {
//         category.innerText = questions[i].category
//         img.src = questions[i].imageSource
//         question.innerText = questions[i].question
//         ans1.innerText = questions[i].a
//         ans2.innerText = questions[i].b
//         ans3.innerText = questions[i].c
//         ans4.innerText = questions[i].d
//         answers.forEach(element => element.addEventListener('click', checkAnswer = () => {
//             if (event.target.innerText === questions[i].correct) {
//                 event.target.style.backgroundColor = 'darkSeaGreen'
//                 turn++
//                 togglePlayer();
//             } else {
//                 event.target.style.backgroundColor = 'tomato'
//                 togglePlayer();
//             }

//         }
//         ))        
//     }
// }






fetch(url)
    .then(res => res.json())
    .then(res => {
        questions = res.items.map((element) => element.fields)
        // game(questions)
        initialState(questions[0])
    })

