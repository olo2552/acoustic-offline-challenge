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
            {t("SERVER_ERROR_MESSAGE")}
            <code>
                {JSON.stringify(props.error?.errors?.description)}
            </code>
        </main>
    );
}