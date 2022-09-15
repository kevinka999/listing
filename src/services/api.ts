type RequestParameters = {
	url: string;
    body?: any;
	headers?: Headers;
}

function fetchData(url: string, request: RequestInit, resolve: any, reject: any) {
    fetch(url, request)
        .then((response: any) => response.json())
        .then((data: any) => resolve(data))
        .catch(() => reject())
}

const api = {
    get: (params: RequestParameters) => {
        const { url, headers } = params

        return new Promise((resolve, reject) => {
            const request: RequestInit = {
                method: "GET",
                headers: headers,
            }

            fetchData(url, request, resolve, reject)
        })
    },
    post: (params: RequestParameters) => {
        const { url, headers, body } = params

        return new Promise((resolve, reject) => {
            const request: RequestInit = {
                method: "POST",
                headers: headers,
                body: body,
            }

            fetchData(url, request, resolve, reject)
        })
    },
}

export default api;