import './App.css';
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import { Landingpage } from './components/Landingpage';
import { UserLogin } from './components/UserLogin';
import { AdminLogin } from './components/AdminLogin';
import { Adminportal } from './components/Adminportal';
import { Userportal } from './components/Userportal';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
   <Routes>
    <Route path='/Libmngapp' element={<Landingpage/>}/>
    <Route path='/admin-login' element={<AdminLogin/>}/>
    <Route path='/user-login' element={<UserLogin/>}/>
    <Route path='/admin/*' element={<Adminportal/>}/>
    <Route path='/user/*' element={<Userportal/>}/>

   </Routes>
   </BrowserRouter>
    </div>
   
  );
}

export default App;
