import React, { PropTypes } from 'react';

import PagePreview from '../PagePreview';

const PagesList = ({ pages }) =>
   (
     <div>
       {
      pages.length
      ? (
        <ul>
          {
          pages.map(page => (
            <li key={page.title}><PagePreview {...page} /></li>
          ))
        }
        </ul>
      )
      : 'No posts yet.'
    }
     </div>
  )
;

PagesList.propTypes = {
  pages: PropTypes.Array.isRequired,
};

export default PagesList;
