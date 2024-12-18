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
import Arrowfunction from '../src/component/arrowfunction';
import Home from '../src/component/Home';
import About from '../src/component/about';
import Contact from '../src/component/contact';
import LinkRoute from './component/LinkRoute';
import DynamicRoute from './component/DynamicRoute';
import Error from './component/Error';




function App() {
  return (
    <>
    <BrowserRouter>
    <LinkRoute/>
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
      <Route path='/arrowfunction' element={<Arrowfunction/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/linkroute' element={<LinkRoute/>}/>
      <Route path='/dynamicroute/:UserName' element={<DynamicRoute/>}/>
      <Route path='*' element={<Error/>}/>


    
      
         </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
