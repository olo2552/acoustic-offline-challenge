import React, {useMemo} from "react";
import {useAsyncValue} from "../utils/useAsyncValue/useAsyncValue";
import {AcousticContentApi} from "../utils/acousticContentApi/acousticContentApi";
import {Spinner} from "../Spinner/Spinner";

interface IArticleProps {
    articleId: string;
}

export const Article: React.FC<IArticleProps> = (props) => {
    const articlePromise = useMemo(() => AcousticContentApi.getArticle(props.articleId), [props.articleId]);
    const {
        asyncValue: asyncArticle,
        error: articleError,
        isLoading: isArticleLoading,
    } = useAsyncValue(articlePromise);

    console.log({isArticleLoading, articleError, asyncArticle})

    if (isArticleLoading) {
        return (
            <Spinner/>
        );
    }

    if (articleError) {
        return (
          <p>{"something went wrong"}</p>
        );
    }

    return (
        <div>
            {JSON.stringify(asyncArticle)}
        </div>
    );
}