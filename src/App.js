import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Profile1 from './components/Profile1';
import Profile2 from './components/Prifile2';
import Profile3 from './components/Prifile3';
import Profile4 from './components/Prifile4';
import Profile5 from './components/Prifile5';
import Profile6 from './components/Prifile6';
import Profile7 from './components/Prifile7';
import Profile8 from './components/Prifile8';
import Profile9 from './components/Prifile9';
import Profile10 from './components/Prifile10';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
        <Routes>
          <Route  path="/" element={<Profile1/>}></Route>
            
          <Route path="/profile1" element={<Profile2/>}></Route>
          <Route path="/profile2" element={<Profile3/>}></Route>
          <Route  path="/profile3" element={<Profile4/>}></Route>
          <Route path="/profile4" element={<Profile5/>}></Route>
          <Route path="/profile5" element={<Profile6/>}></Route>
          <Route path="/profile6" element={<Profile7/>}></Route>
          <Route path="/profile7" element={<Profile8/>}></Route>
          <Route path="/profile8" element={<Profile9/>}></Route>
          <Route path="/profile9" element={<Profile10/>}></Route>
          
          
        
          </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;










