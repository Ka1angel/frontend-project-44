#!/usr/bin/env node
import { playGame, getRandomNumber } from '../utils.js';

export const getCorrectAnswer = (num1, sign, num2) => {
  switch (sign) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};

const rules = 'What is the result of the expression?';

const generateRoundCalc = () => {
  const mathOperator = ['+', '-', '*'];
  const getMathOperator = mathOperator[getRandomNumber(0, mathOperator.length - 1)];
  const number1 = getRandomNumber(1, 50);
  const number2 = getRandomNumber(1, 50);
  const question = `${number1} ${getMathOperator} ${number2}`;
  const correctAnswer = getCorrectAnswer(number1, getMathOperator, number2).toString();
  return [question, correctAnswer];
};

export default function startBrainCalc() {
  playGame(rules, generateRoundCalc);
};
