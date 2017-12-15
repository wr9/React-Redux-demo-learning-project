import React, { Component } from 'react';
import leven from 'leven';

import './AuthorFilter.css';

class AuthorFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      selectedAuthor: '',
      loading: false,
      filteredAuthors: this.props.authors,
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
        let filteredAuthors = this.filterAuthors();
        this.setState({ filteredAuthors: filteredAuthors, loading: false });
      }, 100);
    }

    this.setState(newState);
  };

  handleAutocompleteSelect = author => {
    this.props.handleSelect(author);
    this.setState({ query: author, selectedAuthor: author });
  };

  filterAuthors = () => {
    let resultsWithDistances = [];
    this.props.authors.forEach(author => {
      resultsWithDistances.push({
        author: author,
        distance: leven(author, this.state.query) + 1,
      });
    });
    resultsWithDistances.sort((first, second) => first.distance - second.distance);
    return resultsWithDistances.slice(0, 5).map(result => result.author);
  };

  render() {
    const { query, selectedAuthor, filteredAuthors } = this.state;
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
