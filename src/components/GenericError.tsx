import React, {FC} from 'react';
import {useTranslation} from "react-i18next";

interface IGenericErrorProps {
    error: any
}

export const GenericError: FC<IGenericErrorProps> = (props) => {
    const { t } = useTranslation();

    console.log({props})

    return (
        <main>
            {props.error?.code === 2003 && (
                t("ENTITY_NOT_FOUND_MESSAGE")
            )}

            {/* I know this could be handled better, but I don't want to waste time on pinging Marcin via email */}
            {props.error?.code !== 2003 && (
                t("ENTITY_NOT_FOUND_MESSAGE")
            )}
            <code>
                {JSON.stringify(props?.error?.description)}
            </code>
        </main>
    );
}