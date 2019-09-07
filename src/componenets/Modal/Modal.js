import React, { Component } from 'react';
import PropTypes from 'prop-types';

import st from './Modal.module.css';

export class Modal extends Component {
  state = {};

  componentDidMount() {
    document.addEventListener('keydown', this.handleEscKey, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleEscKey, false);
  }

  handleEscKey = e => {
    if (e.keyCode === 27) {
      this.props.toToggleModal(e, '');
    }
  };

  render() {
    const { toToggleModal, srcURL } = this.props;
    return (
      <div className={st.lightbox}>
        <div className={st.lightbox__overlay} />

        <div
          className={st.lightbox__content}
          onClick={e => toToggleModal(e, '')}
        >
          <img className={st.lightbox___image} src={srcURL} alt="" />
        </div>

        <button type="button" className={st.lightbox__button}>
          <i className="material-icons" onClick={e => toToggleModal(e, '')}>
            close
          </i>
        </button>
      </div>
    );
  }
}

Modal.defaultProps = {
  srcURL: '',
};

Modal.propTypes = {
  toToggleModal: PropTypes.func.isRequired,
  srcURL: PropTypes.string,
};

export default Modal;
