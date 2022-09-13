import { Component } from "react";
import "../card-list/monsters.styles.css";
import MonsterRolodex from "./MonsterRolodex.component";
export default class MonsterRolodexes extends Component {
  render() {
    return (
      <div className="MonsterRolodexs">
        {this.props.rolodexes.map((item) => {
          return <MonsterRolodex key={item.id} {...item} />;
        })}
      </div>
    );
  }
}
