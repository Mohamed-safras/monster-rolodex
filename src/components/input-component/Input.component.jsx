import "../input-component/search-box.styles.css";

const Input = ({ search }) => {
  return (
    <input
      className="search-box"
      type="search"
      onChange={search}
      placeholder="Search"
    />
  );
};

export default Input;

/*
import { Component } from "react";
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
*/
