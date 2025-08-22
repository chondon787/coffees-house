  
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
 
 const MainLayout = () => {
    return (
        <div>
            <div className='h-24'>
                 <div className=''> <Toaster></Toaster></div>
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