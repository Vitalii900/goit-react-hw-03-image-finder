import '../Modal/Modal.css';
import { Component } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
    window.addEventListener('click', this.clickOnOverley);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
    window.removeEventListener('click', this.clickOnOverley);
  }

  handleKeyDown = (event) => {
    if (event.code === 'Escape') {
      this.props.onClose();
      this.props.reset();
    }
  }

  clickOnOverley = (event) => {
    if (event.target.nodeName !== 'IMG') {
      this.props.onClose();
      this.props.reset();
    }
  }

  render() {
    return createPortal(
      <div className="overlay">
        <div className="modal">
          <img className="largeImage" src={this.props.image} alt="" />
        </div>
      </div>,
      modalRoot
    );
  }
}
