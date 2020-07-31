/** @jsx jsx */
import React, {FC} from 'react';
import {useTranslation} from "react-i18next";
import { jsx, css } from '@emotion/core';

interface IGenericErrorProps {
    error: any
}

export const GenericError: FC<IGenericErrorProps> = (props) => {
    const { t } = useTranslation();

    return (
        <main css={css`
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        `}>
            <div css={css`
                width: 50%;
            `}>
                {props.error?.code === 2003 && (
                    t("ENTITY_NOT_FOUND_MESSAGE")
                )}

                {/* I know this could be handled better, but I don't want to waste time on pinging Marcin via email */}
                {props.error?.code !== 2003 && (
                    t("SERVER_ERROR_MESSAGE")
                )}

                <code css={css`
                    display: block;
                    padding-top: 1rem;
                `}>
                    {JSON.stringify(props?.error?.description)}
                </code>
            </div>
        </main>
    );
}