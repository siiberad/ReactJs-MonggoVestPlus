import React from 'react';
import {
    BrowserRouter,
    Route
} from 'react-router-dom';
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
import ProductDetails1 from './components/productDetails1';
import ProductDetails2 from './components/productDetails2';
import ProductDetails3 from './components/productDetails3';
import ProductDetails4 from './components/productDetails4';
import ProductDetails5 from './components/productDetails5';
import ProductDetails6 from './components/productDetails6';
import ProductDetails7 from './components/productDetails7';
import ProductDetails8 from './components/productDetails8';
import ProductDetails9 from './components/productDetails9';

class AppRouter extends React.Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                    <div>
                        <Route exact path='/' component={App}  />
                        <Route path='/tentangkami' component={TentangKami}  />
                        <Route path='/bantuan' component={Bantuan}  />
                        <Route path='/carakerja' component={CaraKerja}  />
                        {/* <Route path="/product-details/1" component={ProductDetails1} />
                        <Route path="/product-details/2" component={ProductDetails2} />
                        <Route path="/product-details/3" component={ProductDetails3} />
                        <Route path="/product-details/4" component={ProductDetails4} />
                        <Route path="/product-details/5" component={ProductDetails5} />
                        <Route path="/product-details/6" component={ProductDetails6} />
                        <Route path="/product-details/7" component={ProductDetails7} /> */}
                        {/* <Route path="/product-details/8" component={ProductDetails8} /> */}
                        {/* <Route path="/product-details/9" component={ProductDetails9} /> */}
                        <Route path="/product-details/:proId" component={ProductDetails9} />
                        <Route path='/transaction' component={TrxPage}  />
                        <Route exact path='/profile/edit' component={ProfileEditPage} />
                        <Route exact path='/search' component={Search} />
                        <Route exact path='/results' component={AppResults} />
                        <Route exact path='/allproduct/:group/:order(hargaModal|productId)/:arah(ASC|DESC)/:nomorhalaman' component={AllProductPage}  />
                        
                        
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default AppRouter;
