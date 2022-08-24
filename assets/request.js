const requestCoins = async value => {
    const baseURL = 'https://api.coinlore.net/api/tickers/?start=0&limit=100'

    const response = await fetch(baseURL);
    const json = await response.json();
    // const data = json.data;
    const results = value
    ? chunkArrayInGroups(data.filter(coin => coin.name.toLowerCase().includes
    (value.toLowerCase())
    ),10
    )
    : chunkArrayInGroups(data, 10);

    return {
        results: results,
        total: results.length,
        current: 0,
        prev: null,
        next: 1,

    };

};

    const chunkArrayInGroups = (arr, size) => {
        let chunk = [];
        for(let i = 0; i < arr.lenght; i + size) {
            chunk.push(arr.slice(i, i + size));
        }
        return chunk;
    };

