/** @jsx jsx */
import React from 'react';
import LoaderSpinner from 'react-loader-spinner';
import {css, jsx} from "@emotion/core";

export const Spinner: React.FC = () => {
    return (
        <main css={css`
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        `}>
            <LoaderSpinner
                color={"#000"}
                type={"Bars"}
                visible
            />
        </main>
    )
}