import { Component } from "react";
import "../input-component/search-box.styles.css";
class Input extends Component {
  render() {
    const { search } = this.props;
    return (
      <input
        className="search-box"
        type="search"
        onChange={search}
        placeholder="Search"
      />
    );
  }
}

export default Input;
