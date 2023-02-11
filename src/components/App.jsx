import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import '../components/App.css'
import getPhotoFromServer from './API';

export class App extends Component {
  state = {
    searchName: null,
    arrayOfPhoto: [],
    isLoading: false,
    showModal: false,
    filter: null
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.searchName !== prevState.searchName) {
      this.addResponseToState(this.state.searchName);
    }
  }

  toggleModal = () => {
    this.setState(({showModal}) => ({ showModal: !showModal}));
  }

  reset = () => {
    this.setState(({ filter }) => ({filter: null}));
  }

  onImageClick = (largeImage) => {
    this.toggleModal();
    const findLargePhoto = this.state.arrayOfPhoto.filter(
      photo => photo.largeImageURL === largeImage
    );
    this.setState({ filter: findLargePhoto[0].largeImageURL });
  }


  formSubmitHandler = data => {
    this.setState({
      searchName: data.name,
    });
  };

  addResponseToState = async value => {
    this.setState({ isLoading: true });
    const { hits } = await getPhotoFromServer(value);
    this.setState({ arrayOfPhoto: hits, isLoading: false });
  };

  render() {
    const { arrayOfPhoto, isLoading, showModal, filter } = this.state;
    return (
      <div className='container'>
        <Searchbar onSubmit={this.formSubmitHandler}></Searchbar>
        <ImageGallery
          onImageClick={this.onImageClick}
          images={arrayOfPhoto}
        ></ImageGallery>
        {showModal && <Modal reset={this.reset} onClose={this.toggleModal} image={filter}></Modal>}
        {arrayOfPhoto.length !== 0 && <Button></Button>}
        {isLoading && <Loader></Loader>}
      </div>
    );
  }
}
