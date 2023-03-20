import React from 'react';
import { Route, Routes} from 'react-router-dom';
import { PostDetails, Posts, User } from '@screens';

const MainRoutes = () => {
    return (
        <>
            <Routes>
                <Route element={<Posts/>} path="/" />
                <Route element={<PostDetails />} path={`/postdetails/:id`}/>
                <Route element={<User />} path={`/user/:id`}/>
            </Routes>
        </>
    )
}

export default MainRoutes