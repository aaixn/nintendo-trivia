const url = 'https://cdn.contentful.com/spaces/e058krihw4z0/environments/master/entries?access_token=I_an8ZFVPYiQvNyFUHm_e2yy6QYVDkWYvUu6Etd23ZI'
let category = document.querySelector('#category')
let img = document.querySelector('#question-img')
let question = document.querySelector('#question')
let answers = document.querySelectorAll('.answers')
let ans1 = document.querySelector('#ans1')
let ans2 = document.querySelector('#ans2')
let ans3 = document.querySelector('#ans3')
let ans4 = document.querySelector('#ans4')
let player1Name = document.querySelector('#player1-name')
let player2Name = document.querySelector('#player2-name')
let player1Score = document.querySelector('#player1-score')
let player2Score = document.querySelector('#player2-score')
let welcomeModal = document.querySelector('#welcome-modal')
const characterModal = document.querySelector('#character-modal')
const characters = document.querySelectorAll('.character')
let playerChoosing = document.querySelector('#player-choosing')
let player1Input = document.querySelector('#player1-input')
let player2Input = document.querySelector('#player2-input')
let player1CharSelected = document.querySelector('#player1-char-selected')
let player2CharSelected = document.querySelector('#player2-char-selected')
const startButton = document.querySelector('#start-button')
const playAgainButton = document.querySelector('#play-again-button')
const gamePage = document.querySelector('#game-page')
let player1CurrentScore = 0
let player2CurrentScore = 0
let questions = null

const characterGifs = ['https://media0.giphy.com/media/10RgZyfaX0HBSg/giphy.gif', 
'https://media2.giphy.com/media/12sIqAzCGEDLSE/giphy.gif?cid=ecf05e4754dusnum6zgxggnxgj4t2fnnccvbp8nnfu5qiyxv&rid=giphy.gif&ct=s',
'https://media3.giphy.com/media/c4PM2Dn8nhbMc/giphy.gif?cid=ecf05e47uklarnlurxvkrbcrfqp4fcfjik1gouo15139cor9&rid=giphy.gif&ct=s',
'https://media1.giphy.com/media/1298WkK59p7Lby/giphy.gif?cid=ecf05e47ur06t6y3j006g04lbaeji6q2qn3d12kykhha1hmc&rid=giphy.gif&ct=s',
'https://media4.giphy.com/media/NPnCksChNWPn2/giphy.gif?cid=ecf05e47zlwpzdbktkg19dkjhcr4bwo8v0f91w9eo53nks30&rid=giphy.gif&ct=s',
'https://media4.giphy.com/media/PEG26dtbtF10k/giphy.gif?cid=ecf05e47iurtcj6cp0yyp94en009f1s9938b8azj00tqxyhi&rid=giphy.gif&ct=s',
'https://media2.giphy.com/media/p5yoOL4u4Rv4Q/giphy.gif?cid=ecf05e47m9wea9f3jc98k4g8gj6dcuorgaaoptw228x0c6t8&rid=giphy.gif&ct=s',
'https://media2.giphy.com/media/14pl2GG4rYu2Hu/giphy.gif?cid=ecf05e47tj4ddk3ys97difb9vfbyky02u5br6gfsx6g7n6ze&rid=giphy.gif&ct=s']

welcomeModal.addEventListener('keydown', event => {
    if(event.key == 'Enter') {
        event.preventDefault()
        welcomeModal.style.display = 'none'
    }
})

startButton.addEventListener('click', () => {
    player1Name.innerText = player1Input.value         //if null player 1    
    player2Name.innerText = player2Input.value         //if null player 2
    characterModal.style.display = 'none'
})


playAgainButton.addEventListener('click', () => {
    gamePage.style.display = 'none'
    welcomeModal.style.display = 'block'
    characterModal.style.display = 'block'
})

characters.forEach(element => element.addEventListener('click', evt => {
    element.classList.add('select-chara')
    if (playerChoosing.innerText === 'player 1 choose') {
        let player1Select = document.createElement('div')
        player1Select.innerText = 'player 1'
        element.appendChild(player1Select)
        playerChoosing.innerText = 'player 2 choose'
        player1CharSelected.src = characterGifs[0]                  //make logic to check which clicked and change character accordingly
    }  else {                                                       //add so cannot select same character
        let player2Select = document.createElement('div')
        player2Select.innerText = 'player 2'
        element.appendChild(player2Select)
        player2CharSelected.src = characterGifs[1]
    } 
    // else if (element.classList.contains('select-chara')) {
    //     alert('That character has already been chosen. Please make a different selection.');
    // //add character below player
    //     // if (element.classList.contains('select-chara')){
    //     //     alert('That character has already been chosen. Please make a different selection.');
    //     // }
    // }
    return
}))

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
    answers.forEach(element => element.style.backgroundColor = '#f1c906')
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
                playAgainButton.style.display = 'block'
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





fetch(url)
    .then(res => res.json())
    .then(res => {
        questions = res.items.map((element) => element.fields)
        initialState(questions[0])
    })

