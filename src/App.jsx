import { Outlet } from 'react-router-dom';
import './App.css';
import Aside from './components/Aside/Aside';
import UserIcon from './images/Dorothy.jpg'

const App = () => {

  // user data template
  const user = {
    firstName: 'Dorothy',
    lastName: 'Kovalsky Parker',
    photo: UserIcon,
    role: 'Pet Owner',
    isActive: true
  }

  return (
    <div className='flex '>
      <Aside user={user} />
      <Outlet />
    </div>
  );
};

export default App;
