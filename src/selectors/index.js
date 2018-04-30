import { createSelector } from 'reselect';

const filtersGetter = state => state.filters;
const articlesGetter = state => state.articles;

export const filteredArticlesSelector = createSelector(
  articlesGetter, filtersGetter,
  (articles, filters) => {
    const { dateRange: { from, to } } = filters;
    const selected = filters.selected.map(item => item.value);

    return articles.filter((article) => {
      const published = Date.parse(article.date);

      return (!selected.length || selected.includes(article.id)) &&
        (!from || !to || (published > from && published < to));
    });
  },
);