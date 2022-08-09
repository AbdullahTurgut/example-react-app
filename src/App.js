import './App.css';
import {
  BrowserRouter as Router,
  Route,Routes,NavLink
} from "react-router-dom";

import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import User from './components/User';
import Error404 from './components/Error404';
function App() {
  return (
    <Router>
      <div>
        <h2>Example App 2</h2>
        <nav>
          <ul>
            <li>
              <NavLink activeclassname="active" to="/">Home</NavLink>
            </li>
            <li>
              <NavLink activeclassname="active" to="/about">About</NavLink>
            </li>
            <li>
              <NavLink activeclassname="active" to="/users">Users</NavLink>
            </li>
          </ul>
        </nav>

        {/* <Switch> v6 ile değişti <Routes>  oldu */}

          <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/users" element={<Users/>}/>
            <Route path="/user/:id" element={<User/>}/>
            <Route path="*" element={<Error404/>}/>
            
            {/* Burda eğer home'u yukarıda yazarsak urlde diğerlerini göstersede home sayfası çıkar karşımıza bunun önüne geçmek için / olan kod parçası aşağıda kalmalı yada 
            2. yol olarak 
            <Route path="/"  (exact)probu bu şekilde eklenmeli  "element={<Home/>}/> 
            */}
          </Routes>
       </div>
    </Router>
  );
}

export default App;
