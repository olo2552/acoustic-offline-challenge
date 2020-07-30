/** @jsx jsx */
import React, {FC} from "react";
import sanitize from "sanitize-html";
import {css, jsx} from "@emotion/core";

interface IArticleContentProps {
    content: string
}

export const ArticleContent: FC<IArticleContentProps> = (props) => {
    return (
        <section
            dangerouslySetInnerHTML={{__html: sanitize(props.content)}}
            css={css`
                text-align: justify;
                font-size: 1.2rem;
            `}
            className={"column"}
            data-testid={"article__content-section"}
        />
    );
}