import React from 'react';
import {
    BrowserRouter,
    Route
} from 'react-router-dom';
import App from './App'
import RegistrationPage from './pages/RegistrationPage';
import TentangKami from './pagetentangkami/TentangKami';
import Bantuan from './pagebantuan/Bantuan';
import CaraKerja from './pagecarakerja/CaraKerja';
import Search from './searchpage/Search';
import AppResults from './searchpage/AppResults';

class AppRouter extends React.Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                    <div>
                        <Route exact path='/' component={App}  />
                        <Route path='/register' component={RegistrationPage} />
                        <Route path='/tentangkami' component={TentangKami}  />
                        <Route path='/bantuan' component={Bantuan}  />
                        <Route path='/carakerja' component={CaraKerja}  />
                        <Route exact path='/search' component={Search} />
                        <Route exact path='/results' component={AppResults} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default AppRouter;