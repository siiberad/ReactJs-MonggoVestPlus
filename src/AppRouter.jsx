import React from 'react';
import {
    BrowserRouter,
    Route
} from 'react-router-dom';
import App from './App'
import ProfileEditPage from './pages/ProfileEditPage';

class AppRouter extends React.Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                    <div>
                        <Route exact path='/' component={App}  />
                        <Route exact path='/profile/edit' component={ProfileEditPage} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default AppRouter;