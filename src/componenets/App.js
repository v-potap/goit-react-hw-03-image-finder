import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './App.module.css';

import SearchForm from './SearchForm/SearchForm';
import Gallery from './Gallery/Gallery';
import Modal from './Modal/Modal';

import * as imageAPI from '../services/images-api';

const INITIAL_STATE = {
  galleryItems: [],
  page: 1,
  q: '',
  loading: false,
  showingModal: false,
  largeImageURL: '',
};

class App extends Component {
  constructor() {
    super();

    this.state = { ...INITIAL_STATE };
  }

  handleLoadMoreClick = async () => {
    await this.setState((state, props) => ({
      loading: true,
      page: state.page + 1,
    }));
    const { q, page } = this.state;
    const imageList = await imageAPI.getImageList({ q, page });

    await this.setState((state, props) => ({
      loading: false,
      galleryItems: [...state.galleryItems, ...imageList],
    }));

    // await setTimeout(() => window.scrollBy(0, window.innerHeight), 2000);
    window.scrollBy(0, window.innerHeight - 100);
  };

  handleSearchSubmit = async e => {
    e.preventDefault();
    const userInput = e.target[0].value;
    e.target[0].value = '';

    if (userInput.length < 3) {
      toast.warn('At least 3 characters to start search !', {
        autoClose: 5000,
      });
      return;
    }

    await this.setState({ q: userInput, loading: true, page: 1 });

    const { q, page } = this.state;
    const imageList = await imageAPI.getImageList({ q, page });
    this.setState({ galleryItems: imageList, loading: false });
  };

  toggleModal = async (e, largeImageURL) => {
    if (e.target === e.currentTarget || e instanceof KeyboardEvent) {
      await this.setState(prevState => ({
        showingModal: !prevState.showingModal,
        largeImageURL,
      }));
    }
  };

  render() {
    const { galleryItems, loading, showingModal, largeImageURL } = this.state;

    return (
      <div className={styles.app}>
        <SearchForm execOnSubmit={this.handleSearchSubmit} />
        {galleryItems === undefined ? (
          <p>Network error ...</p>
        ) : (
          <Gallery
            galleryItems={galleryItems}
            isLoading={loading}
            toLoadMore={this.handleLoadMoreClick}
            toToggleModal={this.toggleModal}
            showingModal={showingModal}
          />
        )}
        {showingModal && (
          <Modal toToggleModal={this.toggleModal} srcURL={largeImageURL} />
        )}
        <ToastContainer />
      </div>
    );
  }
}

export default App;
