import React from 'react';
// @ts-ignore
import { render, waitForElementToBeRemoved } from '@testing-library/react';
import {AsyncArticle} from "./AsyncArticle";
import {
    getArticleNotFoundHandler,
    getArticleServerFailedHandler
} from "../async/acousticContentApi/acousticContentApi.handlers";
import {server} from "../setupTests";


const NON_EXISTENT_ARTICLE_ID = 'NON_EXISTENT_ARTICLE_ID';
const CORRECT_ARTICLE_ID = 'fa9519d5-0363-4b8d-8e1f-627d802c08a8';

const DefaultAsyncArticle = <AsyncArticle articleId={CORRECT_ARTICLE_ID} />;

describe('AsyncArticle Component', () => {
    describe('handles errors gently', () => {
        it('should show backend error message for 404 NOT FOUND', async () => {
            server.use(getArticleNotFoundHandler);

            const { findByText } = render(<AsyncArticle articleId={NON_EXISTENT_ARTICLE_ID} />);
            const errorMessage = await findByText("ENTITY_NOT_FOUND_MESSAGE");
            expect(errorMessage).toBeInTheDocument()
        });

        it('should show backend error message 401 UNAUTHORIZED', () => {
            // intentionally omitted, see tasks.md
        });

        it('should show backend error message for 500 SERVER ERROR', async () => {
            server.use(getArticleServerFailedHandler);

            const { findByText } = render(DefaultAsyncArticle);
            const errorElement = await findByText("SERVER_ERROR_MESSAGE");
            expect(errorElement).toBeInTheDocument();
        });
    });

    describe('handles loading interactively', () => {
        it('should render Spinner component when promise is pending', async () => {
            const { findByTestId } = render(DefaultAsyncArticle);
            const spinnerElement = await findByTestId("spinner");
            expect(spinnerElement).toBeInTheDocument();
        });

        it('should remove spinner after dta is loaded', async () => {
            const { findByTestId } = render(DefaultAsyncArticle);
            const spinnerElement = await findByTestId("spinner");
            expect(spinnerElement).toBeInTheDocument();
            waitForElementToBeRemoved(() => spinnerElement);
        });
    });

    describe('renders Article component if everything is is fine', () => {
        it("renders article", async () => {
            const { findByTestId } = render(DefaultAsyncArticle);
            const spinnerElement = await findByTestId("article");
            expect(spinnerElement).toBeInTheDocument();
        });

        it("passes correct content", async () => {
            const { findAllByText } = render(DefaultAsyncArticle);
            const paragraphElems = await findAllByText("Lorem Ipsum", {exact: false});
            expect(paragraphElems).toHaveLength(4);
        });

        it("passes correct image", async () => {
            const { findByTestId } = render(DefaultAsyncArticle);
            const imageElem = await findByTestId("article__main-image");
            expect(imageElem).toBeInTheDocument();
        });

        it("passes correct heading", async () => {
            const { findByTestId } = render(DefaultAsyncArticle);
            const headerElem = await findByTestId("article__header");
            expect(headerElem).toContainHTML('Staffordshire Terrier Pups');
        });
    });
});
