import React from 'react';
import {
    BrowserRouter,
    Route
} from 'react-router-dom';
import App from './App'
import TentangKami from './pagetentangkami/TentangKami';
import Bantuan from './pagebantuan/Bantuan';
import CaraKerja from './pagecarakerja/CaraKerja';
import TrxPage from './pages/TrxPage';
import ProfileEditPage from './pages/ProfileEditPage';

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
                        <Route exact path='/transaction' component={TrxPage}  />
                        <Route exact path='/profile/edit' component={ProfileEditPage} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default AppRouter;