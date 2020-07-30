/** @jsx jsx */
import React, {FC} from "react";
import sanitize from "sanitize-html";
import {css, jsx} from "@emotion/core";
import {AcousticContentApi} from "../utils/acousticContentApi/acousticContentApi";

interface IArticleMainImageProps {
    url: string;
    caption?: string;
    altText?: string;
}

export const ArticleMainImage: FC<IArticleMainImageProps> = (props) => {
    return (
        <figure
            css={css`
                text-align: center;
                color: #999;
            `}
            className={"column"}
            data-testid={"article__main-image"}
        >
            <img src={props.url}
                alt={props.altText}
                data-testid={"article__main-image"}
                css={css`
                width: 100%;
                padding-bottom: 1rem;
            `}
            />
            <figcaption>{props.caption}</figcaption>
        </figure>
    );
}