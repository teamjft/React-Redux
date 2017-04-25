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
    switch (action.type) {
        case types.OPERANT:
            return {
                ...state,
                operant: action.operant
            };
        case types.FIRSTNUMBER:
            return {
                ...state,
                firstNumber : parseInt(`${state.firstNumber}${action.number}`)
            };
        case types.SECONDNUMBER:
            return {
                ...state,
                secondNumber : parseInt(`${state.secondNumber}${action.number}`)
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
