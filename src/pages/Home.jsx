 
import { Outlet, useLoaderData } from 'react-router-dom';
import Bannar from '../components/Bannar';
import Categories from '../components/Categories';
import Heading from '../components/Heading';
 


const Home = () => {
    const categories = useLoaderData()
    return (
        <div>
            <Bannar></Bannar>
            <Heading></Heading>
           <Categories categories={categories}></Categories>
           <Outlet></Outlet>
        </div>
    );
};

export default Home;