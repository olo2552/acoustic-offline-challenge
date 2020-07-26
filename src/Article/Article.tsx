/** @jsx jsx */
import React, {useMemo} from "react";
import {useAsyncValue} from "../utils/useAsyncValue/useAsyncValue";
import {AcousticContentApi} from "../utils/acousticContentApi/acousticContentApi";
import {Spinner} from "../components/Spinner";
import {ArticleSection} from "./ArticleSection";
import {css, jsx} from "@emotion/core";
import {LabelWithIcon} from "./LabelWithIcon";
import {formatDistanceToNow} from "date-fns";
import {GenericError} from "../components/GenericError";

interface IArticleProps {
    articleId: string;
}

const getArticleCreationDate = (isoDate: string): string => {
    return formatDistanceToNow(new Date(isoDate), {
        addSuffix: true
    });
}

export const Article: React.FC<IArticleProps> = (props) => {
    const articlePromise = useMemo(() => AcousticContentApi.getArticle(props.articleId), [props.articleId]);
    const {
        asyncValue: asyncArticle,
        error: articleError,
        isLoading: isArticleLoading,
    } = useAsyncValue(articlePromise);

    if (isArticleLoading) {
        return (
            <Spinner/>
        );
    }

    if (articleError) {
        return (
          <GenericError error={articleError.response?.data}/>
        );
    }

    return (
        <article
            css={css`
                max-width: 760px;
                margin: 0 auto;
            `}
            className={"content columns is-vcentered"}
        >
            <img
                style={{
                    width: "100%"
                }}
                src={AcousticContentApi.getImageLink(asyncArticle?.elements.mainImage.value.leadImage.renditions.lead.url)}
                alt={asyncArticle?.elements.mainImage.value.leadImageCaption.value}
            />
            <h1
                className={"title is-1"}
                css={css`
                    text-align: center;
                    font-size: 3rem
                `}
                >
                {asyncArticle?.elements.heading.value}
            </h1>
            <section css={css`
                width: 100%;
                display: flex;
                justify-content: space-between;
            `}>
                <LabelWithIcon
                    label={asyncArticle?.elements.author.value || 'Author'}
                    icon={"user"}
                />
                {asyncArticle?.elements.date.value && (
                    <LabelWithIcon
                        label={getArticleCreationDate(asyncArticle?.elements.date.value)}
                        icon={"calendar"}
                    />
                )}
            </section>
            {asyncArticle?.elements.body.values.map((articleSectionContent, sectionIndex) => {
                return (
                    <ArticleSection
                        key={sectionIndex}
                        content={articleSectionContent}
                    />
                );
            })}
        </article>
    );
}