import React, { Component } from 'react';
import './AuthorFilter.css';

class AuthorFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      selectedAuthor: '',
      loading: false,
    };
  }

  handleAutocompleteChange = event => {
    let newState = {
      query: event.target.value,
    };
    if (this.state.selectedAuthor) {
      this.props.handleUnselect();
      newState.selectedAuthor = '';
    }

    if (!this.state.loading) {
      newState.loading = true;

      window.setTimeout(() => {
        this.props.handleQueryChange(this.state.query)
        this.setState({ loading: false });
      }, 100);
    }

    this.setState(newState);
  };

  handleAutocompleteSelect = author => {
    this.props.handleSelect(author);
    this.setState({ query: author, selectedAuthor: author });
  };

  render() {
    const { query, selectedAuthor } = this.state;
    const { filteredAuthors } = this.props;
    return (
      <div>
        <h3>Filter</h3>
        <input value={query} onChange={this.handleAutocompleteChange} placeholder="author" />
        {query &&
          !selectedAuthor && (
            <div className="dropdown-content">
              {filteredAuthors.map(author => (
                <div key={author}>
                  <div
                    className="dropdown-content-element"
                    onClick={() => this.handleAutocompleteSelect(author)}
                  >
                    <div>{author}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
      </div>
    );
  }
}

export default AuthorFilter;
