/** @jsx jsx */
import React, {useMemo} from "react";
import {useAsyncValue} from "../utils/useAsyncValue/useAsyncValue";
import {AcousticContentApi} from "../utils/acousticContentApi/acousticContentApi";
import {Spinner} from "../Spinner/Spinner";
import {Article} from "./Article";
import {jsx} from "@emotion/core";

interface IAsyncArticleProps {
    articleId: string;
}

export const AsyncArticle: React.FC<IAsyncArticleProps> = (props) => {
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

    if (articleError || !asyncArticle) {
        return (
          <p>{"something went wrong"}</p>
        );
    }

    return (
        <Article
            articleId={asyncArticle.id}
            title={asyncArticle.elements.heading.value}
            content={asyncArticle.elements.body.values}
            tags={asyncArticle.tags}
            createdAt={asyncArticle.elements.date.value}
            authorName={asyncArticle.elements.author.value}
            mainImage={{
                url: asyncArticle.elements.mainImage.value.leadImage.renditions.lead.url,
                caption: asyncArticle.elements.mainImage.value.leadImageCaption.value,
                altText: asyncArticle.elements.mainImage.value.leadImage.asset.altText,
            }}
        />
    );
}