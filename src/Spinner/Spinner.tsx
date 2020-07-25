import React from 'react';
import LoaderSpinner from 'react-loader-spinner';

export const Spinner: React.FC = () => {
    return (
        <LoaderSpinner type={"Bars"} visible />
    )
}