import React, { Component } from 'react';

class Sorts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSortLabel: '',
    };
  }

  handleSelect = sort => {
    const { handleSelect, handleUnselect } = this.props;
    if (sort.label === this.state.selectedSortLabel) {
      this.setState({ selectedSortLabel: '' });
      handleUnselect();
    } else {
      this.setState({ selectedSortLabel: sort.label });
      handleSelect(sort);
    }
  };

  render() {
    return (
      <div>
        <h3>Sort by</h3>
        {this.props.sorts.map(sort => (
          <div key={sort.label}>
            <input
              type="radio"
              checked={sort.label === this.state.selectedSortLabel}
              onClick={() => this.handleSelect(sort)}
            />
            <label>{sort.label}</label>
          </div>
        ))}
      </div>
    );
  }
}

export default Sorts;
