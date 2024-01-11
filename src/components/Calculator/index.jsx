import React, {useState} from 'react'
import styles from './Calculator.module.css'
import InputButton from '../InputButton';
import {AiFillGithub} from 'react-icons/ai'

const Calculator = () => {
    const [input, setInput] = useState('');

    return (
        <main className={styles.main}>
            <div className={styles.calculator}>
                <input type="text" disabled value={input} placeholder='0' className={styles.display}/>
                <div className={styles.calcActions}>
                    <InputButton value='ac' setInput={setInput} input={input} color='gray'>AC</InputButton>
                    <InputButton value='del' setInput={setInput} input={input} color='gray'>DEL</InputButton>
                    <InputButton value='%' setInput={setInput} input={input} color='gray'>%</InputButton>
                    <InputButton value='/' setInput={setInput} input={input} color='orange'>÷</InputButton>

                    <InputButton value='7' setInput={setInput} input={input}>7</InputButton>
                    <InputButton value='8' setInput={setInput} input={input}>8</InputButton>
                    <InputButton value='9' setInput={setInput} input={input}>9</InputButton>
                    <InputButton value='*' setInput={setInput} input={input} color='orange'>X</InputButton>

                    <InputButton value='4' setInput={setInput} input={input}>4</InputButton>
                    <InputButton value='5' setInput={setInput} input={input}>5</InputButton>
                    <InputButton value='6' setInput={setInput} input={input}>6</InputButton>
                    <InputButton value='-' setInput={setInput} input={input} color='orange'>-</InputButton>

                    <InputButton value='1' setInput={setInput} input={input}>1</InputButton>
                    <InputButton value='2' setInput={setInput} input={input}>2</InputButton>
                    <InputButton value='3' setInput={setInput} input={input}>3</InputButton>
                    <InputButton value='+' setInput={setInput} input={input} color='orange'>+</InputButton>

                    <InputButton value='0' setInput={setInput} input={input}>0</InputButton>
                    <InputButton value='.' setInput={setInput} input={input}>,</InputButton>
                    <InputButton value='=' setInput={setInput} input={input} color='orange'>=</InputButton>
                </div>
            </div>
            <div className={styles.footer}>
                <a className={styles.gitLink} href='https://github.com/jfilgueira'><AiFillGithub className={styles.gitIcon}/> JFilgueira</a>
            </div>
        </main>
    )
}

export default Calculator