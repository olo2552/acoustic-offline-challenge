/** @jsx jsx */
import React from "react";
import {AcousticContentApi} from "../async/acousticContentApi/acousticContentApi";
import {ArticleContent} from "./ArticleContent";
import {css, jsx} from "@emotion/core";
import {LabelWithIcon} from "./LabelWithIcon";
import {formatDistanceToNow} from "date-fns";
import {ArticleMainImage} from "./ArticleMainImage";

const getArticleCreationDate = (isoDate: string): string => {
    return formatDistanceToNow(new Date(isoDate), {
        addSuffix: true
    });
}

interface IArticleProps {
    articleId: string;
    mainImage?: {
        url: string;
        altText?: string;
        caption?: string;
    };
    title: string;
    authorName?: string;
    createdAt?: string;
    content: string[];
    tags?: string[];
}

export const Article: React.FC<IArticleProps> = (props) => {
    return (
        <article
            css={css`
                max-width: 760px;
                margin: 0 auto;
                padding: 4rem 2rem;
            `}
            className={"content columns is-vcentered"}
            data-testid={"article"}
        >
            {!!props.content.length && (
                <section
                    css={css`
                        width: 100%;
                        display: flex;
                        justify-content: space-between;
                    `}
                >
                    {!!props.authorName && (
                        <LabelWithIcon
                            label={props.authorName}
                            icon={"user"}
                        />
                    )}
                    {!!props.createdAt && (
                        <LabelWithIcon
                            label={getArticleCreationDate(props.createdAt)}
                            icon={"calendar"}
                        />
                    )}
                </section>
            )}

            <h1 className={"title is-1"}
                css={css`
                    font-size: 4rem;
                    text-align: center;
                `}
                data-testid={'article__header'}
            >
                {props.title}
            </h1>

            {!!props.mainImage && (
                <ArticleMainImage
                    url={AcousticContentApi.getImageLink(props.mainImage.url)}
                    caption={props.mainImage.caption}
                    altText={props.mainImage.altText}
                />
            )}
            {!!props.content.length && (
                <ArticleContent content={props.content.join('')} />
            )}
        </article>
    );
}