import axios from 'axios';

const DEFAULT_QUERY = '';
const DEFAULT_PAGE = 1;

const API_INITIAL_STATE = {
  baseUrl: 'https://pixabay.com/api/',
  key: '13247929-24969c80cab3ee5b7c0b2131a',
  imageType: 'photo',
  orientation: 'horizontal',
  q: DEFAULT_QUERY,
  page: DEFAULT_PAGE,
  perPage: 12,
};

export const getImageList = (
  query = { q: DEFAULT_QUERY, page: DEFAULT_PAGE },
) => {
  const apiState = {
    ...API_INITIAL_STATE,
    ...query,
  };

  const strQuery =
    `${apiState.baseUrl}?` +
    `key=${apiState.key}&&` +
    `image_type=${apiState.imageType}&&` +
    `orientation=${apiState.orientation}&&` +
    `per_page=${apiState.perPage}&&` +
    `q=${apiState.q}&&` +
    `page=${apiState.page}`;

  const imageList = axios
    .get(strQuery)
    .then(res => res.data.hits)
    .catch(err => console.log('err', err));

  return imageList;
};

export const w = () => {};
