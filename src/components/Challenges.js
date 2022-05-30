import { Routes, Route } from 'react-router-dom';
import FizzBuzz from './challenges/FizzBuzz';
import Fibonacci from './challenges/Fibonacci';
import Anagram from './challenges/Anagram';
import PrimeNumber from './challenges/PrimeNumber';
import PolygonArea from './challenges/PolygonArea';

function Challenges() {
  return (
    <>
        <Routes>
          <Route path='/fizz-buzz' element={<FizzBuzz />} />
          <Route path='/anagram' element={<Anagram />} />
          <Route path='/fibonacci' element={<Fibonacci />} />
          <Route path='/prime-number' element={<PrimeNumber />} />
          <Route path='/polygon-area' element={<PolygonArea />} />
        </Routes>
    </>
  );
}

export default Challenges;
