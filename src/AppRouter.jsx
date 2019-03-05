import React from 'react';
import {
    BrowserRouter,
    Route
} from 'react-router-dom';
import App from './App'
<<<<<<< HEAD
import ProductDetailsPage from './pages/ProductDetailsPage';
=======
import TentangKami from './pagetentangkami/TentangKami';
import Bantuan from './pagebantuan/Bantuan';
import CaraKerja from './pagecarakerja/CaraKerja';
import TrxPage from './pages/TrxPage';
>>>>>>> c0f8cd1b76d40a455c56916f3b097af1a59687d5

class AppRouter extends React.Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                    <div>
                        <Route exact path='/' component={App}  />
<<<<<<< HEAD
                        <Route path="/product-details" component={ProductDetailsPage} />
=======
                        <Route path='/tentangkami' component={TentangKami}  />
                        <Route path='/bantuan' component={Bantuan}  />
                        <Route path='/carakerja' component={CaraKerja}  />
                        <Route exact path='/transaction' component={TrxPage}  />
>>>>>>> c0f8cd1b76d40a455c56916f3b097af1a59687d5
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default AppRouter;