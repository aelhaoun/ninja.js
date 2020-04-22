import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange = event => {
    const text = event.target.value;
    const { onSearch } = this.props;
    onSearch(text);
  };

  render() {
    return (
      <div className="p-b-1">
        <input
          type="search"
          className="form-control"
          placeholder="Søg brugere"
          onChange={this.onInputChange}
        />
      </div>
    );
  }
}

export default Search;
