import React from 'react';
import {
    BrowserRouter as
    Router,
    Route
} from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';
import App from './App'
import ProductDetailsPage from './pages/ProductDetailsPage';
import TentangKami from './pagetentangkami/TentangKami';
import Bantuan from './pagebantuan/Bantuan';
import CaraKerja from './pagecarakerja/CaraKerja';
import TrxPage from './pages/TrxPage';
import AllProductPage from './pages/AllProductPage';
import ProfileEditPage from './pages/ProfileEditPage';
import Search from './searchpage/Search';
import AppResults from './searchpage/AppResults';
import AppLoginRegistState from './components/AppLoginRegistState';
import HomePages from './pages/HomePages';
import Investasi from './pageinvestasi/Investasi';

class AppRouter extends React.Component{
    render(){
        return(
            <div>
                <Router>
                    <LastLocationProvider>
                            <div>
                                <Route exact path='/' component={App}  />
                                <Route path='/tentangkami' component={TentangKami}  />
                                <Route path='/bantuan' component={Bantuan}  />
                                <Route path='/carakerja' component={CaraKerja}  />
                                <Route exact path='/allproduct' component={AllProductPage}  />
                                <Route path="/product-details" component={ProductDetailsPage} />
                                <Route path='/transaction' component={TrxPage}  />
                                <Route path='/profile/edit' component={ProfileEditPage} />
                                <Route path='/search' component={Search} />
                                <Route path='/results/:keyword' component={AppResults} />
                                <Route path='/homepage' component={HomePages} />
                                <Route path='/investasi' component={Investasi} />
                            </div>
                    </LastLocationProvider>
                </Router>
            </div>
        )
    }
}

export default AppRouter;