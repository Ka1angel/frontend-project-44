#!/usr/bin/env node
import { playGame, getRandomNumber } from '../utils.js';

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

export default function startBrainEven() {
  playGame(rules, generateRound);
}
