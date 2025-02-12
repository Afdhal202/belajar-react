
import './App.css'
import { Button } from './component/button';
import { Alert } from "./component/Navbar";




function App() {
  return (
    <>
      <div className='flex place-content-between '>
        <Alert></Alert>
        <Button variant="primary">Register</Button>
        <Button variant="secondery">Login</Button>
      </div>
    </>

  );
}

export default App
