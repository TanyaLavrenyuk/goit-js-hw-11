import axios from 'axios';

export function getImagesByQuery(query) {
  const API_KEY = '55631968-7584b9a203dbb647b76045b43';
  const BASE_URL = 'https://pixabay.com/api/';

  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  return axios.get(BASE_URL, { params }).then(response => {
    return response.data;
  });
}
