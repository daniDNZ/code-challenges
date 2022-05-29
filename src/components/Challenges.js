import { Routes, Route } from 'react-router-dom';
import FizzBuzz from './challenges/FizzBuzz';
import Fibonacci from './challenges/Fibonacci';
import Anagram from './challenges/Anagram';

function Challenges() {
  return (
    <>
        <Routes>
          <Route path='/fizz-buzz' element={<FizzBuzz />} />
          <Route path='/anagram' element={<Anagram />} />
          <Route path='/fibonacci' element={<Fibonacci />} />
        </Routes>
    </>
  );
}

export default Challenges;
