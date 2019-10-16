import { parse } from "@babel/core"
import { breakStatement } from "@babel/types"

class Calculator {
    constructor(previousOperandandTextElement, currentOperandandTextElement){
        this.previousOperandandTextElement = previousOperandandTextElement
        this.currentOperandandTextElement = currentOperandandTextElement
    }
    clear() {
      this.currentOperand =''
      this.previousOperand =''
      this.operation = undefined

    }
    delete() {

    }
    appendNumber(number) {
        if (number=== '.' && this.currentOperand.includes('.')) return
this.currentOperand = this.currentOperand.toString() + number.toString()
    }
    chooseOperation(operation) {
        if (this.currentOperand === '') return
        if (this.previousOperand!=='') {
            this.compute()
        }
this.operation = operation
this.previousOperand = this.currentOperand
this.currentOperand= ''
    }
    compute(){
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if( isNaN.operation){
            case '+':
                computation = prev + current
                break
                case '-':
                computation = prev - current
                break
                case '÷':
                computation = prev / current
                break
                case '*':
                    computation = prev * current
                    break
                    default:
                        return
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''


    }
    updateDisplay() {

this.currentOperandandTextElement.innerText = this.currentOperand
this.previousOperandandTextElement.innerText = this.previousOperand

    }
}




const numberButtons = document.querySelectorAll('[data-munber')
const operationButtons = document.querySelectorAll('[data-operation')
const equalsButton = document.querySelectorAll('[data-equals')
const deleteButton = document.querySelectorAll('[data-delete')
const allClearButton = document.querySelectorAll('[data-all-clear')
const previousOperandandTextElement = document.querySelectorAll('[data-previous-operand')
const currentOperandandTextElement= document.querySelectorAll('[data-current-operand')
const calculator = new Calculator(previousOperandandTextElement,currentOperandandTextElement)


numberButtons.forEach(button => {
Buttons.addEventlistner('click',() => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
})
})
operationButtons.forEach(button => {
Buttons.addEventlistner('click',() => {
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
})
})
equalsButton.addEventlistner('click' , button => {
    calculator.compute()
    calculator.updateDisplay()
})

allClearButton.addEventlistner('click' , button => {
    calculator.compute()
    calculator.updateDisplay()
})