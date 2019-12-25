import React from 'react';
import {New} from './New';
import PropTypes from 'prop-types';

const ListNews = ({ news }) => (
    <div className="row">
        {news.filter(e => e.author).map((element) => (
          <New key={element.url} {...element}></New>
          ))}
    </div>
)

ListNews.propTypes = {
    news: PropTypes.array.isRequired,
}
export {ListNews};