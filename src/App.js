
import Home from "./routes/home/home";
import { Routes, Route} from 'react-router-dom'
import Navigation from "./routes/navigation/navigation";
import SignIn from "./routes/sign-in/signIn";

const App = () => {


  const Shop = () => {
    <div>
      <h1> I am a Shop</h1>
    </div>
  }
  
  return (
    <Routes>
      <Route path='/' element={<Navigation/>} >
      <Route index element={<Home/>} />
      <Route path='shop' element={<Shop/>} />
      <Route path='sign-in' element={<SignIn/>} />
      </Route>
    </Routes>
  
  );
}

export default App;
