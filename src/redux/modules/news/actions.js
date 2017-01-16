import axios from 'axios';

export const FETCH_NEWS = 'news/fetch';
const ROOT_URL_NEWS = 'http://app.thearcticinstitute.org/wp-json/wp/v2/posts?per_page=5';

export function fetchNews() {
  const request = axios.get(ROOT_URL_NEWS);

  return {
    type: FETCH_NEWS,
    payload: request,
  };
}
