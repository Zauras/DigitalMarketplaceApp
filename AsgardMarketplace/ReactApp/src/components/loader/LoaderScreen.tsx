import React, {Fragment, useEffect, useState} from 'react';
import Loader from 'react-loader-spinner';

import './LoaderScreen.scss';

const minSpinTime: number = 500;

const voidFunc = () => {};


const LoaderScreen = ({ isLoading=true, onLoadUnlock=voidFunc}) => {
    const [isLoaderLocked, setIsLoaderLocked] = useState<boolean>(false);

    useEffect(() => {
        if (isLoading) { (async ()=> await startSpinLockTimeout())(); }
    });
    
    const startSpinLockTimeout = async () => {
        setIsLoaderLocked(true);
        await setTimeout(() => {
            onLoadUnlock();
            setIsLoaderLocked(false);
            }, minSpinTime);
    }
    
    return (
        <Fragment>
            { (isLoading || isLoaderLocked) &&
                <div className="loader-screen">
                    <div className="loader-align">
                        <Loader type='Puff' color='#00BFFF' height={100} width={100} />
                    </div>
                </div>
            }
        </Fragment>
    );
};

LoaderScreen.displayName = 'LoaderScreen';
export default LoaderScreen;
