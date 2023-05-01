const RockBtn = document.body.querySelector('#rock')
const PaperBtn = document.body.querySelector('#paper')
const ScissorBtn = document.body.querySelector('#scissor')
const computerside = document.body.querySelector('#ComputerSide')
const userside = document.body.querySelector('#UserSide')
const win = document.body.querySelector('#Win')
const winner = document.body.querySelector('.Winner')
const computerscore = document.body.querySelector('#computerScore')
const userscore = document.body.querySelector('#userScore')

function comp(){
    let CPUChoice = Math.floor(Math.random()*3)
    let cpu = ["rock", "paper", "scissor"][CPUChoice];
    computerside.innerHTML = `<img src="images/${cpu}.png">`
    return cpu
}

function compareRock(a){
    if(a == 'rock'){
        winner.style.cssText = 'display: block;'
        win.innerText = 'It`s a draw'
    }
    else if(a == 'paper'){
        win.innerText = 'Computer Wins'
        winner.style.cssText = 'display: block; background-color: red;'
        computerscore.innerText = parseInt(computerscore.innerText)+1
        
    }
    else{
        win.innerText = 'User Wins'
        winner.style.cssText = 'display: block; background-color: rgb(101, 233, 91);'
        userscore.innerText = parseInt(userscore.innerText)+1
    }

}

function comparePaper(a){
    if(a == 'paper'){
        winner.style.cssText = 'display: block;'
        win.innerText = 'It`s a draw'
    }
    else if(a == 'scissor'){
        win.innerText = 'Computer Wins'
        winner.style.cssText = 'display: block; background-color: red;'
        computerscore.innerText = parseInt(computerscore.innerText)+1
    }
    else{
        win.innerText = 'User Wins'
        winner.style.cssText = 'display: block; background-color: rgb(101, 233, 91);'
        userscore.innerText = parseInt(userscore.innerText)+1
    }
}

function compareScissor(a){
    if(a == 'scissor'){
        winner.style.cssText = 'display: block;'
        win.innerText = 'It`s a draw'
    }
    else if(a == 'rock'){
        win.innerText = 'Computer Wins'
        winner.style.cssText = 'display: block; background-color: red;'
        computerscore.innerText = parseInt(computerscore.innerText)+1
    }
    else{
        win.innerText = 'User Wins'
        winner.style.cssText = 'display: block; background-color: rgb(101, 233, 91);'
        userscore.innerText = parseInt(userscore.innerText)+1
    }
}

function Remove(){
    setTimeout(()=>{
        winner.style.cssText = 'display: none;'
    }, 1000)
}


RockBtn.addEventListener('click', ()=>{
    let a = comp()
    compareRock(a)
    userside.innerHTML = `<img src="images/rock.png">`
    Remove()
})

PaperBtn.addEventListener('click', ()=>{
    let a =comp()
    comparePaper(a)
    userside.innerHTML = `<img src="images/paper.png">`
    Remove()
})

ScissorBtn.addEventListener('click', ()=>{
    let a = comp()
    compareScissor(a)
    userside.innerHTML = `<img src="images/scissor.png">`
    Remove()
})
