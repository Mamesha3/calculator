const containInpValue = document.querySelector('.buttons-function')
const inputBtn = containInpValue.querySelectorAll('button')
const input = document.querySelector('#white-board')
const deletBtn = document.querySelector('#clear')
const clearBtn = document.querySelector('#allWipe')
const equalBtn = document.querySelector('#equall-too')


function eachBtn() {
  let valueInp = input.value
   
    inputBtn.forEach(each => {
        each.onclick = () => {
            input.value += each.textContent
        }
        clearBtn.onclick = () => {
            input.value = ''
        }
        deletBtn.onclick = () => {
            input.value = input.value.slice(0, -1)
        }
        equalBtn.onclick = () => {
           try{
             let result = eval(input.value)
             input.value = Number(result.toFixed(3))
           } catch(err) {
             input.value = `Error`
           }
        }
    })
}
eachBtn()
