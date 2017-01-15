import axios from 'axios';

export const FETCH_NEWS = 'news/fetch';
const ROOT_URL = 'http://app.thearcticinstitute.org/wp-json/wp/v2/posts?per_page=5';

export function fetchNews() {
  const request = axios.get(ROOT_URL);

  return {
    type: FETCH_NEWS,
    payload: request,
  };
}
