/** @jsx jsx */
import React from "react";
import {useAsyncValue} from "../async/useAsyncValue/useAsyncValue";
import {AcousticContentApi} from "../async/acousticContentApi/acousticContentApi";
import {Article} from "./Article";
import {jsx} from "@emotion/core";
import {Spinner} from "../components/Spinner";
import {GenericError} from "../components/GenericError";

interface IAsyncArticleProps {
    articleId: string;
}

export const AsyncArticle: React.FC<IAsyncArticleProps> = (props) => {
    const {
        asyncValue: asyncArticle,
        error: articleError,
        isLoading: isArticleLoading,
    } = useAsyncValue(AcousticContentApi.getArticle, [props.articleId]);

    if (isArticleLoading) {
        return (
            <Spinner/>
        );
    }

    if (articleError) {
        return (
            <GenericError error={articleError?.response?.data?.errors}/>
        );
    }

    if (!asyncArticle) {
        return null;
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