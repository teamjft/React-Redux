/**
 * Created by dhanendra on 21/4/17.
 */
import * as types from './actionTypes';

export function subtract() {
    return {
        type: types.SUBTRACT
    };
}

export function operation(object) {
    return {
        type: types.OPERANT,
        operant: object.operant
    };
}

export function setFirstNumber(object) {
    return {
        type: types.FIRSTNUMBER,
        number: object.number
    };
}

export function setSecondNumber(object) {
    return {
        type: types.SECONDNUMBER,
        number: object.number
    };
}

export function resetNumbers() {
    return {
        type: types.RESET
    };
}

export function submit() {
    return {
        type: types.SUBMIT
    };
}
export function back() {
    return {
        type: types.BACK
    };
}
