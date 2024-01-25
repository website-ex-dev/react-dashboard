export const GET = (path, params = {}) => {
    const url = path + '?' + new URLSearchParams(params).toString();

    return fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.status, response.statusText);
            }

            return response.json();
        })
        .catch((err) => {
            if (err instanceof SyntaxError) {
                throw new Error('fetchApi: bad JSON');
            }
            if (err instanceof Error) {
                throw err;
            }

            throw new Error(err.message);
        });
};
