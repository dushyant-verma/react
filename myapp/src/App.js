
import './App.css'; 
import Header from './components/Header';
import { Body } from './components/Body';
import { Footer } from './components/Footer';
import { NavMenu } from './NavMenu';
import { FormValidation } from './components/FormValidation';
import { ClickCounter } from './components/ClickCounter';
import { HideShow } from './components/hide&show';
import Effects from './components/Effects';
import {TodoApp} from "./components/todo-list-app";
import Counter from './components/ClassComponent';
import Conditionalrendering from './components/Conditionalrendering';
import ReactList from './components/ReactList';
import SignupToggle from './components/SignupToggle';

// const body = Header
// b()
// let {Body,Footer} ={ Body:Body,Footer:Footer}
function App() {
  const data = 'hello world'
  const newData = 'new hello world'
  const str = 'This is an String'
  return (
    <>
      {/* <Header/> */}
      {/* <Body/> */}
      {/* <Footer/> */}
      {/* <NavMenu/> */}
      {/* <FormValidation/> */}

      {/* <ClickCounter name={data}/>  */}
      
      {/* <ClickCounter name={newData}/> */}

      {/* <HideShow  randomProp={str}/> */}
      {/* <TodoApp /> */}
      {/* <Effects/> */}
      {/* <Counter/> */}

      {/* <Conditionalrendering/> */}
      <SignupToggle />
      {/* <ReactList/> */}
    </>
  );
}

export default App;
