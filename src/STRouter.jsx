import { Routes, Route} from 'react-router-dom';
import Home from './Home';
import NotFound from './NotFound';
import About from './About';
import Contact from './Contact';

const STRouter = () => {

    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                
                <Route path='*' element={<NotFound />} />
            </Routes>
        </>
    )
}
export default STRouter;