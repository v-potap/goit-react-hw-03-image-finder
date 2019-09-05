import React from 'react';

import PhotoCard from '../PhotoCard/PhotoCard';

import st from './Gallery.module.css';

function Gallery({ galleryItems, isLoading, toLoadMore }) {
  return (
    <>
      {galleryItems.length > 0 && (
        <>
          <ul className={st.gallery}>
            {galleryItems.map(galleryItem => (
              <PhotoCard key={galleryItem.id} galleryItem={galleryItem} />
            ))}
          </ul>
          <button
            className={st.button}
            type="button"
            onClick={toLoadMore}
            name="LoadMore"
            disabled={isLoading}
          >
            {isLoading ? 'Loading ...' : 'Load more'}
          </button>
        </>
      )}
    </>
  );
}

export default Gallery;
