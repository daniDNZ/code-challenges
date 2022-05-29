import { Routes, Route } from 'react-router-dom';
import Applications from './Applications';
import Challenges from './Challenges';
import Home from './Home';

function Main() {
  return (
    <>
      <main className="main">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/apps/*' element={<Applications />} />
          <Route path='/challenges/*' element={<Challenges />} />
        </Routes>
      </main>
    </>
  );
}

export default Main;
