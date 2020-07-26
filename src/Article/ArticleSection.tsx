/** @jsx jsx */
import React, {FC} from "react";
import sanitize from "sanitize-html";
import {css, jsx} from "@emotion/core";

interface IArticleSectionProps {
    content: string
}

export const ArticleSection: FC<IArticleSectionProps> = (props) => {
    return (
        <section
            dangerouslySetInnerHTML={{__html: sanitize(props.content)}}
            css={css`
                text-align: justify;
            `}
            className={"column"}
        />
    );
}