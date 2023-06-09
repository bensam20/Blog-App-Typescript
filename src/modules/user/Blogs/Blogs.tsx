import { useContext } from 'react';
import { AuthContext } from '../../Authentication/AuthenticationContext';
import Header from './components/Header';
import BlogList from './components/BlogList';
import './style.css';
import { postReq, getAllReq, getOneReq, delReq, editReq } from '../../../api/apicall';

function Blogs() {

  const authContext = useContext(AuthContext);
  const authData = authContext?.authData;

  const posttestdata = {
    title: 'Test',
    author: 'Test Author',
    image: 'testmfajsasdfasdcadsfav',
    text: 'testmfajs fsidhaks sadfvisjdnva dsasdc s asdviakdsv sdovna sdvoajsd pasdf.'
  }

  const gettestdata = {
      ID: '647f16ef456f2b03e80bb893'
  }

  const deltestdata = {
    ID: '647f16ef456f2b03e80bb893'
  }

  const edittestdata = {
    title: 'edit',
    author: 'edit Author',
    image: 'edit',
    text: 'edit edit edit edit edit edit editedit editedit edit vvv edit edit edit edit edit edit edit.'
  }

  const editId = {
    ID: '647f02d3456f2b03e80bb7f3'
  }

  return (
    <div>
      <button onClick={() => getAllReq('/blog')}>Get test</button>
      <button onClick={() => getOneReq('/blog', gettestdata)}>Get_one test</button>
      <button onClick={() => postReq('/blog', posttestdata)}>Post test</button>
      <button onClick={() => delReq('/blog', deltestdata)}>Del test</button>
      <button onClick={() => editReq('/blog', editId, edittestdata)}>Edit test</button>
      <Header />
      <div className='dashboard-header'>Dashboard</div>
      <div className='bloglist-container'>
        <BlogList />
      </div>
    </div>
  )
}

export default Blogs