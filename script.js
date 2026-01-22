let input = document.getElementById('inputBox')
let buttons = document.querySelectorAll('button')

let string = ""
let operators = ['+', '-', '*', '/', '%']
let arr = Array.from(buttons)
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML == '='){
            string = eval(string)
            input.value = string
        } else if(e.target.innerHTML == 'AC'){
            string = ""
            input.value = string
        } else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length - 1)
            input.value = string
        } else{
            // Prevent consecutive operators
            if(operators.includes(e.target.innerHTML) && operators.includes(string[string.length - 1])){
                return
            }
            string += e.target.innerHTML
            input.value = string
        }
    })
})