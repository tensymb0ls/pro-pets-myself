import { Outlet } from 'react-router-dom';
import './App.css';
import Aside from './components/Aside/Aside';


const App = () => {

  return (
    <div className='flex '>
      <Outlet />
    </div>
  );
};

export default App;
