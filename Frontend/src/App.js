import SignIn from "./component/SignIn";
import SignUp from "./component/SignUp";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Task from "./component/Task";

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>

          <Route element={<SignIn />} path='/' />
          <Route element={<Task />} path='/Task' />
          <Route element={<SignUp />} path='/SignUp-Page' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
