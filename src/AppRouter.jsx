import React from 'react';
import {
    BrowserRouter,
    Route
} from 'react-router-dom';
import App from './App'
import ProductDetailsPage from './pages/ProductDetailsPage';
import TrxPage from './pages/TrxPage';

class AppRouter extends React.Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                    <div>
                        <Route exact path='/' component={App}  />
                        <Route path="/product-details" component={ProductDetailsPage} />
                        <Route path="/transaction" component={TrxPage} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default AppRouter;