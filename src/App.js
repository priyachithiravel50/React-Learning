import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from '../src/component/login';
import Form from '../src/component/form';
import Create from '../src/component/create';
import Log from '../src/component/log';
import Events from '../src/component/events';
import Lists from '../src/component/lists';
import Forms from '../src/component/forms';
// import Memo from '../src/component/memo';
import Conditional from '../src/component/conditional';
import Arrowfunction from '../src/component/arrowfunction';
import Home from '../src/component/Home';
import About from '../src/component/about';
import Contact from '../src/component/contact';
import LinkRoute from './component/LinkRoute';
import DynamicRoute from './component/DynamicRoute';
import Error from './component/Error';
import ES6 from './component/ES6';
import Reactmemo from './component/Reactmemo';
import Styling from './component/Styling';
import Usestate from './component/Usestate';
import Usestateform from './component/Usestateform';
import Useffect from './component/Useeffect';
import MyComponent from './component/MyComponent';
import UseEffects from './component/UseEffects';
// import DisplayData from './component/Display';
import Display from './component/display';
import Displayform from './component/displayform';
import Context from './component/Context';
import Useref from './component/Useref';











function App() {
  return (
    <>
    <BrowserRouter>
    {/* <LinkRoute/> */}
    <Routes>
      <Route path='/loginForm' element={<Login/>}/>
      <Route path='/createForm' element={<Form/>}/>
      <Route path='/Form' element={<Create/>}/>
      <Route path='/log' element={<Log/>}/>
      <Route path='/events' element={<Events/>}/>
      <Route path='/lists' element={<Lists/>}/>
      <Route path='/forms' element={<Forms/>}/>
      <Route path='/conditional' element={<Conditional/>}/>
      <Route path='/arrowfunction' element={<Arrowfunction/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/linkroute' element={<LinkRoute/>}/>
      <Route path='/dynamicroute/:UserName' element={<DynamicRoute/>}/>
      <Route path='*' element={<Error/>}/>
      <Route path='/es6' element={<ES6/>}/>
      <Route path='/reactmemo' element={<Reactmemo/>}/>
      <Route path='/styling' element={<Styling/>}/>
      <Route path='/usestate' element={<Usestate/>}/>
      <Route path='/usestateform' element={<Usestateform/>}/>
      <Route path='/useeffect' element={<Useffect/>}/>
      <Route path='/mycomponent' element={<MyComponent/>}/>
      <Route path='/useeffects' element={<UseEffects/>}/>
      <Route path='/display' element={<Display/>}/>
      <Route path='/displayform' element={<Displayform/>}/>
      <Route path='/context' element={<Context/>}/>
      <Route path='/useref' element={<Useref/>}/>
      
      
      
      
      



      
         </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
