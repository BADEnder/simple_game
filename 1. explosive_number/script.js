let min_num = document.querySelector("#min-num")
let max_num = document.querySelector("#max-num")
let guess_num = document.querySelector("#guess-num")

let message = document.querySelector("#message")

let start_but = document.querySelector("#start-but")
let guess_but = document.querySelector("#guess-but")

let explosive_num 
let left 
let right

guess_num.disabled = true
guess_but.disabled = true

guess_num.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
        guess()
    }
})


const start = () => {
    left = Number(min_num.value)
    right = Number(max_num.value)

    if (isNaN(left) || isNaN(right)) {
        message.innerHTML = `The min-num or max-num have to be number`
    } else if (left >= right) {
        message.innerHTML = `The max-num have to be larger than min-num`
    } else {
        message.innerHTML = `Game started, the explosive number is between ${left} ~ ${right}`
        explosive_num = left+1 + Math.floor((Math.random() * (right-left+1)))

        min_num.value = ""
        max_num.value = ""

        start_but.disabled = true
        min_num.disabled = true
        max_num.disabled = true

        guess_num.value = ""
        guess_num.disabled = false
        guess_but.disabled = false
    }

}


const guess = () => {
    let value = Number(guess_num.value)
    if (value === explosive_num) {
        message.innerHTML = `Boom, you lose, the explosive number is ${explosive_num}` 

        start_but.disabled = false
        min_num.disabled = false
        max_num.disabled = false

        guess_num.disabled = true
        guess_but.disabled = true

    } else if (value < explosive_num) {
        if (value <= left) {
            message.innerHTML = `Your guess number is out of range, The explosive number is between ${left} ~ ${right}`
        } else {
            left = value
            message.innerHTML = `The explosive number is between ${left} ~ ${right}`
        }
    } else if (value > explosive_num) {
        if (value >= right) {
            message.innerHTML = `Your guess number is out of range, The explosive number is between ${left} ~ ${right}`
        } else {
            right = value
            message.innerHTML = `The explosive number is between ${left} ~ ${right}`
        }


    }
    
    guess_num.value = ""
    
}

const initial = () => {
    min_num.value = ""
    max_num.value = ""

    start_but.disabled = false
    min_num.disabled = false
    max_num.disabled = false

    guess_num.value = ""
    guess_num.disabled = true
    guess_but.disabled = true

    message.innerHTML = `Game restart, please reset the min-num and max-num`
}
