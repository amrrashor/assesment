import React from 'react';
import { Spinner } from './Loader.style';
const Loader = () => {
    return (
    <Spinner>
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
    </Spinner>
    );
};

export default Loader;