  
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
 
 const MainLayout = () => {
    return (
        <div>
            <div className='h-24'>
                <Navbar></Navbar>
            </div>
            <div className='min-h-[calc(100vh-122px)] lg:mx-8 mx-2'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
 };
 
 export default MainLayout;