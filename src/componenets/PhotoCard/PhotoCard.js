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

  const { showingModal, toToggleModal } = props;

  return (
    <li className={st.galleryItem}>
      <div className={st.photoCard}>
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

        {!showingModal && (
          <button type="button" className={st.fullscreenButton}>
            <i
              className="material-icons"
              onClick={e => toToggleModal(e, largeImageURL)}
            >
              zoom_out_map
            </i>
          </button>
        )}
      </div>
    </li>
  );
}

PhotoCard.propTypes = {
  showingModal: PropTypes.bool.isRequired,
  toToggleModal: PropTypes.func.isRequired,
};

export default PhotoCard;
