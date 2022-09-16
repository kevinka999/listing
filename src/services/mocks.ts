import { ResponseUserList } from "types";

export const mockUserList: ResponseUserList = {
    "results": [
        {
            "gender": "male",
            "name": {
                "title": "Madame",
                "first": "Kevin",
                "last": "Katzer"
            },
            "location": {
                "street": {
                    "number": 477,
                    "name": "Rue de la Charité"
                },
                "city": "Stetten (Sh)",
                "state": "Basel-Landschaft",
                "country": "Switzerland",
                "postcode": 6150,
                "coordinates": {
                    "latitude": "-57.1197",
                    "longitude": "159.5575"
                },
                "timezone": {
                    "offset": "-6:00",
                    "description": "Central Time (US & Canada), Mexico City"
                }
            },
            "email": "lana.louis@example.com",
            "login": {
                "uuid": "89f30ad1-ad38-42d8-8f4d-f305fe98ea17",
                "username": "ticklishwolf288",
                "password": "darkside",
                "salt": "1lFjZFF0",
                "md5": "e12ee464b0ec8e468edb0ba8a9aed347",
                "sha1": "8fd63e7c61ea89ff825dc7cc6a8fc7f5dc88952d",
                "sha256": "deec4aadba109d53648270f800aef2f0d7913e92f3abafb487e3e75922258a4c"
            },
            "dob": {
                "date": "1945-04-12T16:11:35.120Z",
                "age": 77
            },
            "registered": {
                "date": "2009-08-23T22:45:37.166Z",
                "age": 13
            },
            "phone": "077 860 49 51",
            "cell": "078 025 37 21",
            "id": {
                "name": "AVS",
                "value": "756.8872.8006.60"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/91.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/91.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/91.jpg"
            },
            "nat": "CH"
        },
    ],
    "info": {
        "seed": "7b19bd64481000b1",
        "results": 2,
        "page": 1,
        "version": "1.4"
    }
};