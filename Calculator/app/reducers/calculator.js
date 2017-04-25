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
        case 'x':
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
            if (action.number === '.' && !state.firstNumber.toString().includes('.')) {
                number = `${state.firstNumber}${action.number}`
            } else {
                number = parseFloat(`${state.firstNumber}${action.number}`);
            }
            return {
                ...state,
                firstNumber : number
            };
        case types.SECONDNUMBER:
            if (action.number === '.' && !state.secondNumber.toString().includes('.')) {
                number = `${state.secondNumber}${action.number}`
            } else {
                number = parseFloat(`${state.secondNumber}${action.number}`);
            }
            return {
                ...state,
                secondNumber : number
            };
        case types.BACK:
            let a = state.firstNumber.toString(),b = state.secondNumber.toString() ,c = state.operant.toString();
            if (b !== '0') {
                b = b.slice(0, -1);
                return {
                    ...state,
                    secondNumber: b.length === 0 ? 0 : parseFloat(b)
                };
            } else if (c !== '') {
                return {
                    ...state,
                    operant: ''
                };
            } else {
                a = a.slice(0, -1);
                if (a.length === 0) {
                    a = 0
                }
                return {
                    ...state,
                    firstNumber : parseFloat(a)
                }
            }
        case types.RESET:
            return {
                ...state,
                firstNumber : 0,
                operant: '',
                secondNumber: 0,
            };
        case types.SUBMIT:
            if (state.secondNumber === 0) {
                return {
                    ...state
                }
            }
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
