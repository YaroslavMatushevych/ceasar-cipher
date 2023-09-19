
import React, { useState, useMemo } from 'react';
import Input from '../Input/Input';
import Select from '../Select/Select';
import styles from './CaesarCipher.module.css';
import { caesarCipher } from '../../utils/cipher';
import { DirectionType } from '../../types';
import Button from '../Button/Button';

const directionOptions: DirectionType[] = ['right', 'left'];

const CaesarCipher: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [shift, setShift] = useState<number>(3);
  const [direction, setDirection] = useState<DirectionType>('right');

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleDirectionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDirection(event.target.value as DirectionType);
  };

  const incrementShift = () => {
    setShift(prevShift => prevShift + 1);
  };

  const decrementShift = () => {
    setShift(prevShift => prevShift - 1);
  };

  // Use useMemo to derive ciphered text based on current state
  const cipheredText = useMemo(() => {
    return caesarCipher(text, shift, direction);
  }, [text, shift, direction]);

  return (
    <div className={styles.caesarCipherForm}>
      <h2>CAESAR SHIFT CIPHER</h2>
      <div className={styles.shiftControls}>
        <Button onClick={decrementShift}>-</Button>
        <span className={styles.shiftValue}>{shift}</span>
        <Button onClick={incrementShift}>+</Button>
      </div>
      <Select value={direction} onChange={handleDirectionChange}>
        {directionOptions.map((dir) => {
          const formatedText = dir.charAt(0).toUpperCase() + dir.slice(1);
          return <option key={dir} value={dir}>{formatedText}</option>
        })}
      </Select>
      <Input value={text} onChange={handleTextChange} placeholder="Enter text to cipher" />
      <p className={styles.cipheredText}>{!cipheredText ? 'Ciphertext should appear here....' : `Ciphered Text: ${cipheredText}`}</p>
    </div>
  );
};

export default CaesarCipher;
