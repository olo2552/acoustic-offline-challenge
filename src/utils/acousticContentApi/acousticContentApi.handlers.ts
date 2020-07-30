import {rest} from "msw";

const getArticleUrl = 'https://content-eu-4.content-cms.com/api/859f2008-a40a-4b92-afd0-24bb44d10124/delivery/v1/content/'

export const getArticleHandler = rest.get(getArticleUrl, (req, res, ctx) => {
    return res(ctx.json({
        "rev": "3-dd1647c7c463e67e018dbd0715e0696b",
        "thumbnail": {
            "id": "c98d44eb-5976-42a1-97d6-9a5840fa9fb4",
            "url": "/api/859f2008-a40a-4b92-afd0-24bb44d10124/delivery/v1/resources/9a069bfa086cfe1ae7c98e789fec1c58"
        },
        "keywords": [],
        "kind": [],
        "created": "2019-09-09T11:53:24.851Z",
        "creatorId": "d22a22f7-f08f-4699-80d5-fbaf64ba013b",
        "description": "",
        "classification": "content",
        "type": "Article",
        "locale": "en",
        "tags": [],
        "selectedLayouts": [
            {
                "layout": {
                    "id": "design-article-layout"
                }
            }
        ],
        "elements": {
            "heading": {
                "elementType": "text",
                "value": "Staffordshire Terrier Pups"
            },
            "author": {
                "elementType": "text",
                "value": "Gabe Bravo"
            },
            "body": {
                "values": [
                    "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n",
                    "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n",
                    "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n",
                    "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n"
                ],
                "elementType": "formattedtext"
            },
            "date": {
                "elementType": "datetime",
                "value": "2019-12-13T17:00:00Z"
            },
            "mainImage": {
                "elementType": "group",
                "value": {
                    "leadImage": {
                        "mode": "shared",
                        "profiles": [
                            "3428916c-b356-4b47-aeb2-5eb8e3494b00"
                        ],
                        "renditions": {
                            "lead": {
                                "source": "/delivery/v1/resources/93493572-ea5b-4c27-89cf-8a5c3ee617ad?resize=1200px:846px&crop=1200:624;0,111",
                                "width": 1200,
                                "height": 624,
                                "transform": {
                                    "scale": 0.75,
                                    "crop": {
                                        "x": 0,
                                        "y": 111,
                                        "width": 1200,
                                        "height": 624
                                    }
                                },
                                "url": "/859f2008-a40a-4b92-afd0-24bb44d10124/dxresources/9349/93493572-ea5b-4c27-89cf-8a5c3ee617ad.jpg?resize=1200px%3A846px&crop=1200%3A624%3B0%2C111"
                            },
                            "card": {
                                "source": "/delivery/v1/resources/93493572-ea5b-4c27-89cf-8a5c3ee617ad?resize=640px:451px&crop=640:360;0,46",
                                "width": 640,
                                "height": 360,
                                "transform": {
                                    "scale": 0.4,
                                    "crop": {
                                        "x": 0,
                                        "y": 46,
                                        "width": 640,
                                        "height": 360
                                    }
                                },
                                "url": "/859f2008-a40a-4b92-afd0-24bb44d10124/dxresources/9349/93493572-ea5b-4c27-89cf-8a5c3ee617ad.jpg?resize=640px%3A451px&crop=640%3A360%3B0%2C46"
                            },
                            "default": {
                                "width": 1600,
                                "source": "/delivery/v1/resources/93493572-ea5b-4c27-89cf-8a5c3ee617ad",
                                "height": 1128,
                                "url": "/859f2008-a40a-4b92-afd0-24bb44d10124/dxresources/9349/93493572-ea5b-4c27-89cf-8a5c3ee617ad.jpg"
                            }
                        },
                        "asset": {
                            "fileName": "staffy_terrier_pups.jpg",
                            "altText": "",
                            "fileSize": 147926,
                            "width": 1600,
                            "mediaType": "image/jpeg",
                            "id": "ecb71d3a-6d04-47b5-a175-0a41656ee9be",
                            "resourceUri": "/delivery/v1/resources/93493572-ea5b-4c27-89cf-8a5c3ee617ad",
                            "height": 1128
                        },
                        "elementType": "image",
                        "url": "/859f2008-a40a-4b92-afd0-24bb44d10124/dxresources/9349/93493572-ea5b-4c27-89cf-8a5c3ee617ad.jpg"
                    },
                    "leadImageCaption": {
                        "elementType": "text",
                        "value": "Staffordshire Terrier Pups"
                    },
                    "leadImageCredit": {
                        "elementType": "text",
                        "value": "depositphotos.com"
                    }
                },
                "typeRef": {
                    "id": "fe31fbf4-4bc4-4ffa-9b27-615af51d23fe"
                }
            }
        },
        "name": "Sample Article",
        "lastModifierId": "7b3aaa23-f709-428c-ad7d-d1b121b1fa9e",
        "typeId": "e3240b78-5712-42aa-9b28-99cf13b90f04",
        "links": {
            "thumbnail": {
                "href": "/authoring/v1/resources/9a069bfa086cfe1ae7c98e789fec1c58"
            },
            "retire": {
                "href": "/authoring/v1/changes/content/fa9519d5-0363-4b8d-8e1f-627d802c08a8/status/retire"
            },
            "draft": {
                "href": "/authoring/v1/content/fa9519d5-0363-4b8d-8e1f-627d802c08a8:draft"
            },
            "self": {
                "href": "/authoring/v1/content/fa9519d5-0363-4b8d-8e1f-627d802c08a8"
            },
            "type": {
                "href": "/authoring/v1/types/e3240b78-5712-42aa-9b28-99cf13b90f04"
            }
        },
        "id": "fa9519d5-0363-4b8d-8e1f-627d802c08a8",
        "lastModified": "2019-12-15T01:04:14.445Z",
        "systemModified": "2019-12-15T01:04:14.577Z",
        "status": "ready"
    }))
});

const getArticleServerFailedHandler = rest.get('', (req, res, ctx) => {
    return res(
        ctx.status(500),
        ctx.json({
            message: 'Server Error',
        })
    );
});