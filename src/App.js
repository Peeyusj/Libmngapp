import './App.css';
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import { Landingpage } from './components/Landingpage';
import { UserLogin } from './components/UserLogin';
import { AdminLogin } from './components/AdminLogin';
function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Landingpage/>}/>
    <Route path='/admin-login' element={<AdminLogin/>}/>
    <Route path='/user-login' element={<UserLogin/>}/>


   </Routes>
   </BrowserRouter>
  );
}

export default App;