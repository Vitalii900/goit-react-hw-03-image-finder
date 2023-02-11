import { Component } from 'react';

export class Searchbar extends Component {
  state = {
    name: '',
  };

  handleInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

    sendData = async event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
    });
  };

  render() {
    const {name} = this.state
    return (
      <header class="searchbar">
        <form class="form" onSubmit={this.sendData}>
          <button type="submit" class="button">
            <span class="button-label">Search</span>
          </button>

          <input
            onChange={this.handleInputChange}
            value={name}
            class="input"
            type="text"
            autocomplete="off"
            name="name"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
