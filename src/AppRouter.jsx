import React from 'react';
import {
    BrowserRouter,
    Route
} from 'react-router-dom';
import App from './App'
import RegistrationPage from './pages/RegistrationPage';

class AppRouter extends React.Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                    <div>
                        <Route exact path='/' component={App}  />
                        <Route path="/register" component={RegistrationPage} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default AppRouter;