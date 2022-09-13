import { Component } from "react";

import "../card-list/monsters.styles.css";
export default class Rolodex extends Component {
  render() {
    const { id, name, username } = this.props;
    return (
      <div className="rolodex">
        <img
          alt={`monster ${name}`}
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
        />
        <h1>{name}</h1>
        <p>{username}</p>
      </div>
    );
  }
}
