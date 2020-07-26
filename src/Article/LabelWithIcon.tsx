import React, {FC} from "react";
import {css} from "emotion";

interface IArticleDateProps {
    label?: string
    icon: string
}

export const LabelWithIcon: FC<IArticleDateProps> = (props) => {
    if (!props.label) {
        return null;
    }

    return (
        <div>
            <span className={"icon"}>
                <i className={`fas fa-${props.icon}`}/>
            </span>
            <span className={css`
                padding-left: 1rem;
            `}>
                {props.label}
            </span>
        </div>
    )
}