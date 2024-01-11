import React from 'react'
import styles from './InputButton.module.css'

const InputButton = ({ value, setInput, input, children, color }) => {
    function bgColor() {
        if (color === 'orange') {
            return { backgroundColor: '#ff9601', color: '#fff' };
        } else if (color === 'gray') {
            return { backgroundColor: '#a7a6a7', color: '#1c1c1c' };
        } else {
            return { backgroundColor: '#333333', color: '#fff' }
        }
    }

    function zeroStyle() {
        return {
            width: '100px',
            gridColumn: 'span 2',
            backgroundColor: '#333333',
            color: '#fff'
        }
    }


    function buttonHandler(e) {
        switch (e.target.value) {
            case '=':
                return calculate();
            case 'ac':
                return deleteAll();
            case 'del':
                return eraseChar();
            case '%':
                return percentage(e)
            default:
                return setOperation(e)
        }
    }

    function setOperation(e) {
        if (input === '0') {
            setInput(e.target.value);
        } else {
            setInput(input + e.target.value);
        }
    }


    function calculate() {
        try {
            const result = eval(input);
            setInput(result);
            if(result === 0) {
                setInput('0');
            }
        }
        catch (err) {
            alert('Input invalid');
            setInput('')
        }
    }

    function percentage() {
        setInput(input / 100)
    }

    function deleteAll() {
        setInput('');
    }

    function eraseChar() {
        setInput(input.substr(0, input.length -1));
    }

    return (
        <button
            style={value === '0' ? zeroStyle() : bgColor()}
            value={value}
            onClick={buttonHandler}
            className={styles.inputButton}
        >
            {children}
        </button>
    )
}

export default InputButton