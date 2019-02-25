import React from 'react';
import {
    BrowserRouter,
    Route
} from 'react-router-dom';
import App from './App'

class AppRouter extends React.Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                    <div>
                        <Route exact path='/' component={App}  />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default AppRouter;