import axios from 'axios';

const BASE_URL = 'https://test-api428.p.rapidapi.com/data';

const options = {
    params: {
        maxResults: '10',
    },
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'test-api428.p.rapidapi.com',
    },
};

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
};
