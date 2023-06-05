import { useContext } from 'react';
import { AuthContext } from '../../Authentication/AuthenticationContext';
import Header from './components/Header';
import BlogList from './components/BlogList';
import './style.css';

function Blogs() {

    const authContext = useContext(AuthContext);
    const authData = authContext?.authData;  

  return (
    <div>
        <Header />
        <div className='dashboard-header'>Dashboard</div>
        <div className='bloglist-container'>
            <BlogList />
        </div>
    </div>
  )
}

export default Blogs