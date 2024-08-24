import { ENV } from '@/utils';

export class Book {
  async getLastBookPublished() {
    try {
      const sort = 'sort=publishedAt:desc';
      const pagination = 'pagination[limit]=3';
      const populate = 'populate=*';
      const urlParams = [pagination, sort, populate]
        .filter((param) => param)
        .join('&');

      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.BOOKS}?${urlParams}`;

      const response = await fetch(url);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }

  async getLatestBooks({ limit = 10, literaryGenresId = null }) {
    try {
      const pagination = `pagination[limit]=${limit}`;
      const sort = `sort[0]=publishedAt:desc`;
      const populate = `populate=*`;
      const filterLiteraryGenres =
        literaryGenresId &&
        `filters[literary-genres][id][$eq]=${literaryGenresId}`;

      const urlParams = [sort, pagination, filterLiteraryGenres, populate]
        .filter((param) => param)
        .join('&');

      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.BOOKS}?${urlParams}`;

      const response = await fetch(url);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }

  async getByGenreSlug(slug, page) {
    try {
      const filters = `filters[literary_genres][slug_genres][$eq]=${slug}`;
      const populate = `populate=*`;
      const pagination = `pagination[page]=${page}&pagination[pageSize]=5`;

      const urlParams = [filters, populate, pagination]
        .filter((param) => param)
        .join('&');

      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.BOOKS}?${urlParams}`;

      const response = await fetch(url);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }

  async searchBooks(text, page) {
    try {
      const filters = `filters[title][$contains]=${text}`;
      const pagination = `pagination[page]=${page}&pagination[pageSize]=30`;
      const populate = `populate=*`;

      const urlParams = [filters, pagination, populate]
        .filter((param) => param)
        .join('&');

      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.BOOKS}?${urlParams}`;
      const response = await fetch(url);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }
}
