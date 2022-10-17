type RequestParameters = {
	url: string;
    body?: any;
	headers?: Headers;
    signal?: AbortSignal;
}

function fetchData(url: string, request: RequestInit, resolve: any, reject: any) {
    fetch(url, request)
        .then((response: any) => response.json())
        .then((data: any) => resolve(data))
        .catch(() => reject())
}

const api = {
    get: (params: RequestParameters) => {
        const { url, headers, signal } = params

        return new Promise((resolve, reject) => {
            const request: RequestInit = {
                method: "GET",
                headers: headers,
                signal: signal,
            }

            fetchData(url, request, resolve, reject)
        })
    },
    post: (params: RequestParameters) => {
        const { url, headers, body, signal } = params

        return new Promise((resolve, reject) => {
            const request: RequestInit = {
                method: "POST",
                headers: headers,
                body: body,
                signal: signal,
            }

            fetchData(url, request, resolve, reject)
        })
    },
}

export default api;