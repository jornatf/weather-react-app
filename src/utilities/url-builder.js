const urlBuilder = (query) => {
    const baseUrl = 'https://api.weatherapi.com/v1/current.json'
    const params = {
        key: process.env.API_KEY, // your api key here: http://weatherapi.com
        aqi: 'no',
        q: query
    }

    let url = new URL(baseUrl);
    Object.entries(params).forEach(([key, value]) => {
        url.searchParams.append(key, value);
    });

    return url.toString();
}

export default urlBuilder;