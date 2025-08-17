  
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
 
 const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-122px)] mx-8'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
 };
 
 export default MainLayout;