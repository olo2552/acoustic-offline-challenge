import React from 'react';
import { render } from '@testing-library/react';
import {AsyncArticle} from "./AsyncArticle";

// @ts-ignore
import translationEN from '../locales/en/translation.json.ts';
import {getArticleNotFoundHandler} from "../async/acousticContentApi/acousticContentApi.handlers";
import {server} from "../setupTests";


const NON_EXISTENT_ARTICLE_ID = 'NON_EXISTENT_ARTICLE_ID';
const CORRECT_ARTICLE_ID = 'NON_EXISTENT_ARTICLE_ID';

describe('AsyncArticle Component', () => {
    describe('handles errors gently', () => {
        it('should show backend error message for 404 NOT FOUND', async () => {
            server.use(getArticleNotFoundHandler);

            const { findByText } = render(<AsyncArticle articleId={NON_EXISTENT_ARTICLE_ID} />);
            const errorMessage = await findByText("ENTITY_NOT_FOUND_MESSAGE");
            expect(errorMessage).toBeInTheDocument()
        });

        it('should show backend error message 401 UNAUTHORIZED', () => {
            // intentionally ommited, see tasks.md
        });

        it('should show backend error message for 404 SERVER ERROR', () => {
            const { getByText } = render(<AsyncArticle articleId={CORRECT_ARTICLE_ID} />);
            const errorElement = getByText(/learn react/i);
        });
    });

    describe('handles loading interactively', () => {
        it('should render Spinner component when promise is pending', () => {

        });
    });

    describe('renders Article component if everything is is fine', () => {

    });
});
