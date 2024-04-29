import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import About from './pages/About';
import Profile from './pages/Profile';


export default function App() {
  return <BrowserRouter>
    <Routes>

      <Route path="/Home" element={<Home />} /> 
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/About" element={<About />} />
      <Route path="/Profile" element={<Profile />} />
     

    </Routes>
    
    </BrowserRouter>;
  
}
