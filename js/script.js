const url = 'https://cdn.contentful.com/spaces/e058krihw4z0/environments/master/entries?access_token=I_an8ZFVPYiQvNyFUHm_e2yy6QYVDkWYvUu6Etd23ZI'
let category = document.querySelector('#category')
let question = document.querySelector('#question')
const questionNumber = document.querySelector('#question-number')
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
let player1GameChar = document.querySelector('#player1-game-char')
let player2GameChar = document.querySelector('#player2-game-char')
const vs = document.querySelector('#vs')
const item = document.querySelectorAll('.item')
const player1Item = document.querySelector('#player1-item')
const player2Item = document.querySelector('#player2-item')
const racers = document.querySelectorAll('.racer')
const racer1 = document.querySelector('#racer1-img')
const racer2 = document.querySelector('#racer2-img')
const startButton = document.querySelector('#start-button')
const howToButton = document.querySelector('#how-to-button')
const howToModal = document.querySelector('#how-to-modal')
const exitHowTo = document.querySelector('#exit-how-to')
const playAgainButton = document.querySelectorAll('.play-again-button')
const gamePage = document.querySelector('#game-page')
const victoryModal = document.querySelector('#victory-modal')
const tieModal = document.querySelector('#tie-modal')
const tiePlayer1 = document.querySelector('#tie-player1')
const tiePlayer2 = document.querySelector('#tie-player2')
const winningPlayer = document.querySelector('#winning-player')
const winChar = document.querySelector('#win-char')
const loseChar = document.querySelector('#lose-char')
const losingPlayer = document.querySelector('#losing-player')
let player1CurrentScore = 0
let player2CurrentScore = 0
let player1CharIndex = null
let player2CharIndex = null
let questions = null
let player1HasItem = false
let player2HasItem = false


///////////////////////////////////// HOW TO MODAL /////////////////////////////////////////////////////////////////////////////////////////////

const music = document.querySelector('audio')
music.volume = 0.01;


///////////////////////////////////// ARRAY OF OBJECTS OF EACH CHARACTER'S DIFF IMAGES  /////////////////////////////////////////////////////////////////////////////////////////////

const characterImages = [
    {
        name: 'mario',
        main: './css/images/mario/mario.png',
        side: './css/images/mario/marioSide.png',
        win: './css/images/mario/marioWin.png',
        gif: 'https://media0.giphy.com/media/10RgZyfaX0HBSg/giphy.gif'
    },

    {
        name: 'luigi',
        main: './css/images/luigi/luigi.png',
        side: './css/images/luigi/luigiSide.png',
        win: './css/images/luigi/luigiWin.png',
        gif: 'https://media2.giphy.com/media/12sIqAzCGEDLSE/giphy.gif?cid=ecf05e4754dusnum6zgxggnxgj4t2fnnccvbp8nnfu5qiyxv&rid=giphy.gif&ct=s',
    },

    {
        name: 'toad',
        main: './css/images/toad/toad.png',
        side: './css/images/toad/toadSide.png',
        win: './css/images/toad/toadWin.png',
        gif: 'https://media3.giphy.com/media/c4PM2Dn8nhbMc/giphy.gif?cid=ecf05e47uklarnlurxvkrbcrfqp4fcfjik1gouo15139cor9&rid=giphy.gif&ct=s',
    },

    {
        name: 'peach',
        main: './css/images/peach/peach.png',
        side: './css/images/peach/peachSide.png',
        win: './css/images/peach/peachWin.png',
        gif: 'https://media1.giphy.com/media/1298WkK59p7Lby/giphy.gif?cid=ecf05e47ur06t6y3j006g04lbaeji6q2qn3d12kykhha1hmc&rid=giphy.gif&ct=s',
    },

    {
        name: 'yoshi',
        main: './css/images/yoshi/yoshi.png',
        side: './css/images/yoshi/yoshiSide.png',
        win: './css/images/yoshi/yoshiWin.png',
        gif: 'https://media4.giphy.com/media/NPnCksChNWPn2/giphy.gif?cid=ecf05e47zlwpzdbktkg19dkjhcr4bwo8v0f91w9eo53nks30&rid=giphy.gif&ct=s',
    },

    {
        name: 'bowser',
        main: './css/images/bowser/bowser.png',
        side: './css/images/bowser/bowserSide.png',
        win: './css/images/bowser/bowserWin.png',
        gif: 'https://media4.giphy.com/media/PEG26dtbtF10k/giphy.gif?cid=ecf05e47iurtcj6cp0yyp94en009f1s9938b8azj00tqxyhi&rid=giphy.gif&ct=s',
    },

    {
        name: 'dk',
        main: './css/images/dk/dk.png',
        side: './css/images/dk/dkSide.png',
        win: './css/images/dk/dkWin.png',
        gif: 'https://media2.giphy.com/media/p5yoOL4u4Rv4Q/giphy.gif?cid=ecf05e47m9wea9f3jc98k4g8gj6dcuorgaaoptw228x0c6t8&rid=giphy.gif&ct=s',
    },

    {
        name: 'koopa',
        main: './css/images/koopa/koopa.png',
        side: './css/images/koopa/koopaSide.png',
        win: './css/images/koopa/koopaWin.png',
        gif: 'https://media2.giphy.com/media/14pl2GG4rYu2Hu/giphy.gif?cid=ecf05e47tj4ddk3ys97difb9vfbyky02u5br6gfsx6g7n6ze&rid=giphy.gif&ct=s'
    }
    
]

///////////////////////////////////// WELCOME MODAL /////////////////////////////////////////////////////////////////////////////////////////////

welcomeModal.addEventListener('keydown', event => {
    if(event.key == 'Enter') {
        event.preventDefault()
        welcomeModal.style.display = 'none'
        characterModal.style.display = 'block'
    }
})

///////////////////////////////////// HOW TO MODAL /////////////////////////////////////////////////////////////////////////////////////////////

howToButton.addEventListener('click', evt => {
    howToModal.style.display = 'block'
})

exitHowTo.addEventListener('click', evt => {
    howToModal.style.display = 'none'
})

///////////////////////////////////// START BUTTON FUNCTIONALITY  /////////////////////////////////////////////////////////////////////////////////////////////

startButton.addEventListener('click', () => {
    if (player1CharSelected === '' || player2CharSelected === '') {
        return
    }
    const checkPlayer1Input = () => {
        if (player1Input.value === '') {
            player1Name.innerText = 'Player 1'
        }
        else if (player1Input.value !== '') {
            player1Name.innerText = player1Input.value 
        }
    }
    
    const checkPlayer2Input = () => {
        if (player2Input.value === '') {
            player2Name.innerText = 'Player 2' 
        }
        else if (player2Input.value !== '') {
            player2Name.innerText = player2Input.value   
        }         
    }

    checkPlayer1Input()
    checkPlayer2Input()
    characterModal.style.display = 'none'
    gamePage.style.display = 'flex'
    category.style.display = 'block'
    questionNumber.style.display = 'block'
    racers.forEach(element => element.style.display = 'flex')
})


///////////////////////////////////// PLAY AGAIN BUTTON FUNCTIONALITY /////////////////////////////////////////////////////////////////////////////////////////////
playAgainButton.forEach(element => element.addEventListener('click', () => {
    victoryModal.style.display = 'none'
    tieModal.style.display = 'none'
    welcomeModal.style.display = 'block'
}))


///////////////////////////////////// CHARACTER SELECT /////////////////////////////////////////////////////////////////////////////////////////////

characters.forEach(element => element.addEventListener('click', evt => {
    if (playerChoosing.innerText === 'player 1 choose') {
        element.classList.add('select-chara')
        let player1Select = document.createElement('div')
        player1Select.innerText = 'player 1'
        player1Select.setAttribute('id', 'player1-select')
        element.appendChild(player1Select).style.color = '#de2825'
        player1CharIndex = parseInt(element.id.substring(4))
        player1CharSelected.src = characterImages[player1CharIndex].gif
        player1GameChar.src = characterImages[player1CharIndex].gif
        racer1.src = characterImages[player1CharIndex].side
        playerChoosing.innerText = 'player 2 choose'
    } else {     
        while (playerChoosing.innerText === 'player 2 choose') {
            if (!element.classList.contains('select-chara')) {
                element.classList.add('select-chara')
                let player2Select = document.createElement('div')
                player2Select.innerText = 'player 2'
                player2Select.setAttribute('id', 'player2-select')
                element.appendChild(player2Select).style.color = '#0d96d0'
                player2CharIndex = parseInt(element.id.substring(4))
                player2CharSelected.src = characterImages[player2CharIndex].gif
                player2GameChar.src = characterImages[player2CharIndex].gif
                racer2.src = characterImages[player2CharIndex].side
                playerChoosing.style.color = '#de2825'
                playerChoosing.innerText = 'Press Start!'
                vs.style.display = 'block'
                startButton.style.display = 'block'
                startButton.style.backgroundColor = '#de2825'
                return
            } else {       
                alert('That character has already been chosen. Please make a different selection.');
                return
            }
    } 
    }
    return
}))


///////////////////////////////////// TOGGLES PLAYER TURN /////////////////////////////////////////////////////////////////////////////////////////////

player1Name.style.textShadow = '5px 5px darkSeaGreen'
let turn = 1
const togglePlayer = () => {
    if(turn%2 === 1) {
        player2Name.style.textShadow = '3px 3px dimgray'
        player1Name.style.textShadow = '5px 5px darkSeaGreen'
        return 1
    } else {
        player1Name.style.textShadow = '3px 3px dimgray'
        player2Name.style.textShadow = '5px 5px darkSeaGreen'
        return 2
    }
}


///////////////////////////////////// LOGIC FOR ITEMS /////////////////////////////////////////////////////////////////////////////////////////////
const items = [
    {
        item: 'mushroom',
        img: './css/images/items/itemRoulette/mushroom.png'
    },

    {
        item: 'shell',
        img: './css/images/items/itemRoulette/shell.png'
    },

    {
        item: 'star',
        img: './css/images/items/itemRoulette/star.png'
    },

    {
        item: 'empty',
        img: './css/images/items/itemRoulette/empty.png'
    }

    ]

const checkForItem = () => {

    if (player1CurrentScore%3 === 0 && player1CurrentScore !== 0 && player1HasItem === false && togglePlayer() === 1) {
        player1HasItem = true
        player1Item.src = items[3].img
    }

    if (player2CurrentScore%3 === 0 && player2CurrentScore !== 0 && player2HasItem === false && togglePlayer() === 2) {
        player2HasItem = true
        player2Item.src = items[3].img
    }

    return
}


item.forEach(element => {

    element.addEventListener('mouseover', evt => {
        evt.preventDefault()
        element.classList.add('got-item')
    })

    element.addEventListener('mouseout', evt => {
        evt.preventDefault()
        element.classList.remove('got-item')
    })

    element.addEventListener('click', evt => {
        let playerItem = document.querySelector(`#${evt.target.id}`)

        if (playerItem.attributes.src.nodeValue === items[3].img) {
            playerItem.src = items[Math.floor(Math.random() * 3)].img

        } else if (playerItem.attributes.src.nodeValue === items[0].img) {
            if (playerItem.id === 'player1-item') {
                player1CurrentScore++
                player1Score.innerText = player1CurrentScore
                player1HasItem = false
                playerItem.src = ''
            } else {
                player2CurrentScore++
                player2Score.innerText = player2CurrentScore
                player2HasItem = false
                playerItem.src = ''
            }

        } else if (playerItem.attributes.src.nodeValue === items[1].img) {
            if (playerItem.id === 'player1-item') {
                player2CurrentScore--
                player2Score.innerText = player2CurrentScore
                player1HasItem = false
                playerItem.src = ''
            } else {
                player1CurrentScore--
                player1Score.innerText = player1CurrentScore
                player2HasItem = false
                playerItem.src = ''
            }

        } else if (playerItem.attributes.src.nodeValue === items[2].img) {
            if (playerItem.id === 'player1-item') {
                player1CurrentScore++
                player1Score.innerText = player1CurrentScore
                player1HasItem = false
                playerItem.src = ''
            } else {
                player2CurrentScore++
                player2Score.innerText = player2CurrentScore
                player2HasItem = false
                playerItem.src = ''
            }

        }
    })
})

///////////////////////////////////// RESETS ANSWER BOX COLORS /////////////////////////////////////////////////////////////////////////////////////////////

const empty = () => {
    answers.forEach(element => element.style.backgroundColor = '#b3cce9')
}

///////////////////////////////////// INITIAL STATE /////////////////////////////////////////////////////////////////////////////////////////////

const initialState = () => {
    category.innerText = questions[0].category
    question.innerText = questions[0].question
    ans1.innerText = questions[0].a
    ans2.innerText = questions[0].b
    ans3.innerText = questions[0].c
    ans4.innerText = questions[0].d
    category.style.display = 'none'
    questionNumber.innerText = '1 of 15'
    questionNumber.style.display = 'none'
    startButton.style.display = 'none'
    racers.forEach(element => element.style.display = 'none')
    turn = 1
    i = 0
    characters.forEach(element => element.classList.remove('select-chara'))
    document.querySelector('#player1-select').remove()
    document.querySelector('#player2-select').remove()
    startButton.style.backgroundColor = 'gray'
    playerChoosing.innerText = 'player 1 choose'
    playerChoosing.style.color = 'black'
    player1CurrentScore = 0
    player2CurrentScore = 0
    player1Score.innerText = ''
    player2Score.innerText = ''
    vs.style.display = 'none'
    player1CharSelected.src = 'https://upload.wikimedia.org/wikipedia/commons/8/89/HD_transparent_picture.png'        //
    player2CharSelected.src = 'https://upload.wikimedia.org/wikipedia/commons/8/89/HD_transparent_picture.png'
    player1HasItem = false
    player2HasItem = false
}

let i = 0


///////////////////////////////////// CHECKS ANSWERS LOGIC /////////////////////////////////////////////////////////////////////////////////////////////

answers.forEach(element => element.addEventListener('click', event => {
            
            if (event.target.innerText === questions[i].correct) {
                if (togglePlayer() === 1) {
                    player1CurrentScore++
                    player1Score.innerText = player1CurrentScore
                }
                else if (togglePlayer() === 2) {
                    player2CurrentScore++
                    player2Score.innerText = player2CurrentScore
                }
                checkForItem()
                turn++
                togglePlayer();
            } else {
                turn++
                togglePlayer();
            }
            i++
            questionNumber.innerText = `${i + 1} of 15`
            empty()
            if (i === questions.length) {
                if (player1CurrentScore > player2CurrentScore) {
                    winningPlayer.innerText = player1Name.innerText
                    losingPlayer.innerText = player2Name.innerText
                    winChar.src = characterImages[player1CharIndex].win
                    loseChar.src = characterImages[player2CharIndex].main
                    gamePage.style.display = 'none'
                    victoryModal.style.display = 'block'
                } else if (player2CurrentScore > player1CurrentScore) {
                    winningPlayer.innerText = player2Name.innerText
                    losingPlayer.innerText = player1Name.innerText
                    winChar.src = characterImages[player2CharIndex].win
                    loseChar.src = characterImages[player1CharIndex].main
                    gamePage.style.display = 'none'
                    victoryModal.style.display = 'block'
                } else {
                    tiePlayer1.src = characterImages[player1CharIndex].win
                    tiePlayer2.src = characterImages[player2CharIndex].win
                    gamePage.style.display = 'none'
                    tieModal.style.display = 'block'
                }
                initialState()
                return
            }
            category.innerText = questions[i].category
            question.innerText = questions[i].question
            ans1.innerText = questions[i].a
            ans2.innerText = questions[i].b
            ans3.innerText = questions[i].c
            ans4.innerText = questions[i].d


}))


///////////////////////////////////// FETCH TRIVIA API /////////////////////////////////////////////////////////////////////////////////////////////

fetch(url)
    .then(res => res.json())
    .then(res => {
        questions = res.items.map((element) => element.fields)
        initialState(questions[0])
    })
    .catch(err => console.log('Something went wrong...', err))

