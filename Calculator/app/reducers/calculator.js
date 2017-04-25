import * as types from '../actions/actionTypes';

const initialState = {
    firstNumber: 0,
    secondNumber: 0,
    operant: ''
};
const calculate = (a,b,operation) => {
    switch (operation) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '/':
            return a / b;
        case '*':
            return a * b;
        
    }
};

export default function calculator(state = initialState, action = {}) {
    let number = 0;
    switch (action.type) {
        case types.OPERANT:
            return {
                ...state,
                operant: action.operant
            };
        case types.FIRSTNUMBER:
            if (action.number === '.') {
                number = `${state.firstNumber}${action.number}`
            } else {
                number = parseFloat(`${state.firstNumber}${action.number}`);
            }
            return {
                ...state,
                firstNumber : number
            };
        case types.SECONDNUMBER:
            if (action.number === '.') {
                number = `${state.secondNumber}${action.number}`
            } else {
                number = parseFloat(`${state.secondNumber}${action.number}`);
            }
            return {
                ...state,
                secondNumber : number
            };
        case types.RESET:
            return {
                ...state,
                firstNumber : 0,
                operant: '',
                secondNumber: 0,
            };
        case types.SUBMIT:
            let result = state.operant !== '' ? calculate(state.firstNumber,state.secondNumber,state.operant) : state.firstNumber;
            return {
                ...state,
                firstNumber : result,
                operant: '',
                secondNumber: 0,
            };
        default:
            return {...state};
    }
}
