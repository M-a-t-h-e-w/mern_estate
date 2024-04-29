import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import About from './pages/About';
import Profile from './pages/Profile';
import Header from './components/Header';


export default function App() {
  return <BrowserRouter>

    <Header />

    <Routes>
  
      <Route path="/" element={<Home />} /> 
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/About" element={<About />} />
      <Route path="/Profile" element={<Profile />} />
     

    </Routes>
    
    </BrowserRouter>;
  
}
