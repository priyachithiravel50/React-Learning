import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from '../src/component/login';
import Form from '../src/component/form';
import Create from '../src/component/create';
import Log from '../src/component/log';
import Events from '../src/component/events';
import Lists from '../src/component/lists';
import Forms from '../src/component/forms';
import Memo from '../src/component/memo';
import Conditional from '../src/component/conditional';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/loginForm' element={<Login/>}/>
      <Route path='/createForm' element={<Form/>}/>
      <Route path='/Form' element={<Create/>}/>
      <Route path='/log' element={<Log/>}/>
      <Route path='/events' element={<Events/>}/>
      <Route path='/lists' element={<Lists/>}/>
      <Route path='/forms' element={<Forms/>}/>
      <Route path='/memo' element={<Memo/>}/>
      <Route path='/conditional' element={<Conditional/>}/>
         </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
