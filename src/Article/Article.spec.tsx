import React from 'react';
import { render } from '@testing-library/react';
import {Article} from "./Article";

const MOCK_ARTICLE_TITLE = 'Some generic random title';
const MOCK_ARTICLE_AUTHOR = 'Aleksander Wielgórski';
const MOCK_ARTICLE_TAGS = [
    'lifestyle',
    'influencer',
    'YOLO',
];
const MOCK_ARTICLE_CONTENT = [
    '<script></script><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n',
    '<p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n',
    '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n',
    '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n',
];
const MOCK_ARTICLE_CREATION_DATE = '2019-09-09T11:53:24.851Z';
const MOCK_MAIN_IMAGE = {
    url: "/859f2008-a40a-4b92-afd0-24bb44d10124/dxresources/9349/93493572-ea5b-4c27-89cf-8a5c3ee617ad.jpg?resize=1200px%3A846px&crop=1200%3A624%3B0%2C111",
    altText: 'some default alternate text for mainImage',
};
const MOCK_ARTICLE_ID = 'abc';

const DefaultArticle = <Article
    articleId={MOCK_ARTICLE_ID}
    title={MOCK_ARTICLE_TITLE}
    content={MOCK_ARTICLE_CONTENT}
    tags={MOCK_ARTICLE_TAGS}
    authorName={MOCK_ARTICLE_AUTHOR}
    createdAt={MOCK_ARTICLE_CREATION_DATE}
    mainImage={MOCK_MAIN_IMAGE}
/>

describe('Article Component', () => {
    it('should render without any errors', () => {
        expect(DefaultArticle)
    })
    describe('content rendering', () => {
        it('should render nothing, when provided empty content array', () => {
            const {queryByTestId} = render(<Article
                title={MOCK_ARTICLE_TITLE}
                content={[]}
            />);
            const sectionElem = queryByTestId('article__content-section');
            expect(sectionElem).not.toBeInTheDocument();
        });

        it('should render elements correctly by content', async () => {
            const {queryAllByText} = render(DefaultArticle);
            // not using data-testid because setDangerouslyInnerHtml removes that attribute
            const sectionParagraphs = await queryAllByText('Lorem Ipsum', {exact: false});

            // checking only the text- we could add parsing for the elements, or dynamically add attributes to them
            // therefore, checking the markup is antipattern. User only cares about what he sees
            expect(sectionParagraphs).toHaveLength(MOCK_ARTICLE_CONTENT.length);
        });

        it(`shouldn't pass XSS attack via content injection`, async () => {
            const xssFunc = jest.fn();
            global.xssFunc = xssFunc;
            const {} = render(<Article
                articleId={'abc'}
                title={MOCK_ARTICLE_TITLE}
                content={[`<script>xssFunc()</script><p>abc</p>`]}
            />);
            expect(xssFunc).toBeCalledTimes(0);
        });
    });

    describe('mainImage rendering', () => {
        it('should attach correct alt prop to rendered image', () => {
            const {getByAltText} = render(DefaultArticle);
            const imgElem = getByAltText(MOCK_MAIN_IMAGE.altText)
            expect(imgElem).toBeInTheDocument();
        });

        it('should attach correct src prop to rendered image', () => {
            const {getByAltText} = render(DefaultArticle);
            const imgElem = getByAltText(MOCK_MAIN_IMAGE.altText)
            expect(imgElem).toHaveAttribute(
                'src',
                expect.stringContaining(MOCK_MAIN_IMAGE.url)
            );
        });

        it('should be omitted from the article, if no image is given', () => {
            const {queryByTestId} = render(<Article
                title={MOCK_ARTICLE_TITLE}
                content={MOCK_ARTICLE_CONTENT}
            />);
            const imgElem = queryByTestId('article__main-image')
            expect(imgElem).not.toBeInTheDocument();
        });
    });
});

