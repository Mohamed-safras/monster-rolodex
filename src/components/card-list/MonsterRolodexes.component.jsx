import "../card-list/monsters.styles.css";
import MonsterRolodex from "./MonsterRolodex.component";

const MonsterRolodexes = ({ rolodexes }) => {
  console.log();
  return (
    <div className="MonsterRolodexs">
      {rolodexes.map((item) => {
        return <MonsterRolodex key={item.id} {...item} />;
      })}
    </div>
  );
};

export default MonsterRolodexes;

/*
class based component

import { Component } from "react";
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
*/
