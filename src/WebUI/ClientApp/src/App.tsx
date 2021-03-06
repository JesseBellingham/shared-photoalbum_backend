import React from 'react'
import Feed from './components/Feed'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { CloudinaryContext } from 'cloudinary-react'
import Invite from './components/Invite'
import { store, StoreContext } from './stores/StoreContext'
import AuthorizeRoute from './components/api-authorization/AuthorizeRoute'
import { ApplicationPaths } from './components/api-authorization/ApiAuthorizationConstants'
import ApiAuthorizationRoutes from './components/api-authorization/ApiAuthorizationRoutes'
import Layout from './components/shared/Layout'

function App() {
    const cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME

    return (
        //todo: remove cloudname
        <CloudinaryContext cloudName="dzehqlqqu">
            <StoreContext.Provider value={store}>
                <BrowserRouter>
                    <Switch>
                        <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes} />
                        <AuthorizeRoute path="/invite/:inviteCode" component={Invite} />
                        <AuthorizeRoute path="/:feedId?" component={Feed} />
                    </Switch>
                </BrowserRouter>
            </StoreContext.Provider>
        </CloudinaryContext>
    )
}

export default App
