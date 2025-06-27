import {Routes, Route} from 'react-router-dom';

import Home from '../pages/Home';
import Products from '../pages/Products';

export default function AppRouter(){
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
        </Routes>
    )
}
