import React from 'react';
import PropTypes from 'prop-types';
import st from './PhotoCard.module.css';

function PhotoCard(props) {
  const {
    webformatURL,
    largeImageURL,
    likes,
    views,
    comments,
    downloads,
    type,
    tags,
  } = props.galleryItem;

  return (
    <li className={st.galleryItem}>
      <div className={st.PhotoCard}>
        <img src={webformatURL} alt={`${type} with tags: ${tags}`} />

        <div className={st.stats}>
          <p className={st.statsItem}>
            <i className="material-icons">thumb_up</i>
            {likes}
          </p>
          <p className={st.statsItem}>
            <i className="material-icons">visibility</i>
            {views}
          </p>
          <p className={st.statsItem}>
            <i className="material-icons">comment</i>
            {comments}
          </p>
          <p className={st.statsItem}>
            <i className="material-icons">cloud_download</i>
            {downloads}
          </p>
        </div>

        <button type="button" className={st.fullscreenButton}>
          <i className="material-icons">zoom_out_map</i>
        </button>
      </div>
    </li>
  );
}

PhotoCard.propTypes = {};

export default PhotoCard;
