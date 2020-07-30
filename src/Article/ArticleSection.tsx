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
                font-size: 1.2rem;
            `}
            className={"column"}
            data-testid={"article__content-section"}
        />
    );
}