interface IAcousticContentArticleThumbnail {
    id: string;
    url: string;
}

type AcousticContentArticleKeyword = string;

type AcousticContentArticleKind = string;

type AcousticContentArticleType = string;

interface IAcousticContentArticleLayout {
    layout: {
        id: string;
    };
}

interface IAcousticContentArticleSingleValueElement {
    elementType: string; // TODO: should be enum probably, but I don't yet know the type
    value: string;
    typeRef?: {
        id: string;
    }
}

interface IAcousticContentArticleMultiValueElement {
    elementType: string; // TODO: should be enum probably, but I don't yet know the type
    values: string[];
    typeRef?: {
        id: string;
    }
}

interface IAcousticContentArticleMainImage {
    elementType: string; // TODO: should be enum probably, but I don't yet know the type
    value: {
        leadImage: {
            mode: string // TODO: should be enum probably, but I don't yet know the type
            profiles: string[];
            renditions: {
                lead: {
                    source: string;
                    width: number;
                    height: number;
                    url: string;
                };
            };
            asset: {
                fileName: string;
                altText: string;
                fileSize: number;
                width: number;
                mediaType: string;
                id: string;
                resourceUri: string;
                height: number;
            };
            url: string;
        },
        leadImageCaption: IAcousticContentArticleSingleValueElement,
        leadImageCredit: IAcousticContentArticleSingleValueElement,
    }
}

interface IAcousticContentArticleElements {
    heading: IAcousticContentArticleSingleValueElement;
    author: IAcousticContentArticleSingleValueElement;
    body: IAcousticContentArticleMultiValueElement;
    date: IAcousticContentArticleSingleValueElement;
    mainImage: IAcousticContentArticleMainImage;
}

interface IAcousticContentArticleLink {
    href: string;
}

interface IAcousticContentArticleLinks {
    thumbnail: IAcousticContentArticleLink;
    "retire": IAcousticContentArticleLink;
    "draft": IAcousticContentArticleLink;
    "self": IAcousticContentArticleLink;
    "type": IAcousticContentArticleLink;
}

export interface IAcousticContentArticle {
    id: string;
    rev: string;
    thumbnail: IAcousticContentArticleThumbnail;
    keywords: AcousticContentArticleKeyword[];
    kind: AcousticContentArticleKind[];
    created: string;
    creatorId: string;
    description: string;
    classification: string; // should be enum probably, but I don't yet know the type
    type: string; // should be enum probably, but I don't yet know the type
    locale: string; // should be enum probably, but I don't yet know the type
    tags: AcousticContentArticleType[];
    selectedLayouts: IAcousticContentArticleLayout[];
    elements: IAcousticContentArticleElements;
    name: string;
    typeId: string;
    lastModifierId: string;
    lastModified: string;
    systemModified: string;
    status: string; // should be enum probably, but I don't yet know the type
    links: IAcousticContentArticleLinks;
}