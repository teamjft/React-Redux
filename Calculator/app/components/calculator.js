import React, {Component} from 'react';
import {StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Button} from 'react-native';

const styles = StyleSheet.create({
    numericButton: {
        flex: 3,
        backgroundColor: '#78909c',
        padding: 15,
    },
    numericButtonText: {
        color: '#fff',
        alignSelf: 'center',
        fontSize: 32,
    },
    numberButtonContainer: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'space-between',
    },
    displayText: {
        flex: 1,
        alignSelf: 'flex-end',
        fontSize: 42,
        padding: 20,
    },
    blueGrayColor: {
        backgroundColor: '#607d8b',
    },
});

export default class Calculator extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {  operation, firstNumber, secondNumber, setFirstNumber, setSecondNumber, resetNumbers, operant, submit } = this.props;

        const setNumber = (number) => {
                operant ? setSecondNumber({number: number}) : setFirstNumber({number: number})
        };

        const setOperant = (operand) => {
            if (firstNumber !== 0) {
                if (operant === '') {
                    operation({operant: operand});
                } else {
                    submit();
                    operation({operant: operand});
                }
            }
        };

        const displayNumbers = (number) => {
            let numbersView = [];
            let operationList = ['+','-','/','*'];

            for (let i = 1; i <= 9; i+=3) {
                let view = (<View key={i} style={styles.numberButtonContainer}>
                    <TouchableOpacity key={i} style={styles.numericButton} onPress={() => setNumber(i)}>
                        <Text style={styles.numericButtonText}>{(i).toString()}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity key={i+1} style={styles.numericButton} onPress={() => setNumber(i+1)}>
                        <Text style={styles.numericButtonText}>{(i+1).toString()}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity key={i+2} style={styles.numericButton} onPress={() => setNumber(i+2)}>
                        <Text style={styles.numericButtonText}>{(i+2).toString()}</Text>
                    </TouchableOpacity>
                    {displayOperations(operationList.pop())}
                </View>);

                numbersView.push(view);
            }

            let view = (<View key="0" style={styles.numberButtonContainer}>
                <TouchableOpacity  style={styles.numericButton} onPress={() => setNumber(0)}>
                    <Text style={styles.numericButtonText}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.numericButton} onPress={() => setNumber('00')}>
                    <Text style={styles.numericButtonText}>00</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.numericButton} onPress={() => setNumber('.')}>
                    <Text style={styles.numericButtonText}>.</Text>
                </TouchableOpacity>
                {displayOperations(operationList.pop())}
            </View>);
            numbersView.push(view);

            return (numbersView)
        };

        const displayOperations = (operant) => {
            return <TouchableOpacity style={[styles.numericButton,styles.blueGrayColor]} onPress={() => setOperant(operant)}>
                <Text style={styles.numericButtonText}>{operant}</Text>
            </TouchableOpacity>
        };

        const displayText = () => {
            let text = firstNumber;

            if (operant) {
                text = firstNumber + " " + operant
            }
            if (secondNumber != 0) {
                text += " " + secondNumber
            }
            return text.toString()
        };

        return (
            <View style={styles.container}>
                <View style={{flex:1, justifyContent: 'space-around'}}>
                    <Text style={styles.displayText}>{displayText()}</Text>
                </View>
                <View style={{flex: 2, backgroundColor: "#78909c", justifyContent: 'space-between'}}>
                    {displayNumbers()}

                    <View style={styles.numberButtonContainer}>
                        <TouchableOpacity style={[styles.numericButton,{backgroundColor: '#546e7a'}]} onPress={submit}>
                            <Text style={styles.numericButtonText}>=</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.numericButton,{backgroundColor: '#546e7a'}]} onPress={resetNumbers}>
                            <Text style={styles.numericButtonText}>C</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
