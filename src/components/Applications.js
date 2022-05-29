import { Routes, Route } from 'react-router-dom';
import App1 from './apps/App1';
import App2 from './apps/App2';
import App3 from './apps/App3';

function Applications() {
  return (
    <>
        <Routes>
          <Route path='/app1' element={<App1 />} />
          <Route path='/app2' element={<App2 />} />
          <Route path='/app3' element={<App3 />} />
        </Routes>
    </>
  );
}

export default Applications;
