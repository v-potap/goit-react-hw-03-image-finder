import React from 'react';

import PhotoCard from '../PhotoCard/PhotoCard';

import st from './Gallery.module.css';

function Gallery({
  showingModal,
  galleryItems,
  isLoading,
  toLoadMore,
  toToggleModal,
}) {
  return (
    <>
      {galleryItems.length > 0 && (
        <>
          <ul className={st.gallery}>
            {galleryItems.map(galleryItem => (
              <PhotoCard
                key={galleryItem.id}
                galleryItem={galleryItem}
                toToggleModal={toToggleModal}
                showingModal={showingModal}
              />
            ))}
          </ul>
          <button
            className={st.button}
            type="button"
            onClick={toLoadMore}
            name="LoadMore"
            disabled={isLoading}
          >
            {isLoading ? 'Loading ' : 'Load more'}
            {isLoading ? (
              <span className={st.spinner}>
                <div className={st.bounce1} />
                <div className={st.bounce2} />
                <div className={st.bounce3} />
              </span>
            ) : (
              ''
            )}
          </button>
        </>
      )}
    </>
  );
}

export default Gallery;
