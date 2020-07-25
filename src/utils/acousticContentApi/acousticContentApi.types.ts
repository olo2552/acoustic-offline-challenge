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

type IAcousticContentArticleElement = {
    elementType: string; // TODO: should be enum probably, but I don't yet know the type
    value: string;
    typeRef?: {
        id: string;
    }
} | {
    elementType: string; // TODO: should be enum probably, but I don't yet know the type
    values: string[];
    typeRef?: {
        id: string;
    }
}

interface IAcousticContentArticleElements {
    elements: {
        heading: IAcousticContentArticleElement;
        author: IAcousticContentArticleElement;
        body: IAcousticContentArticleElement;
        date: IAcousticContentArticleElement;
    }
}

interface IAcousticContentArticleLink {
    href: string;
}

interface IAcousticContentArticleLinks {
    links: {
        thumbnail: IAcousticContentArticleLink;
        "retire": IAcousticContentArticleLink;
        "draft": IAcousticContentArticleLink;
        "self": IAcousticContentArticleLink;
        "type": IAcousticContentArticleLink;
    };
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