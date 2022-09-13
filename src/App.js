import { Fragment, useEffect, useState } from "react";
import "./App.css";
import Rolling from "./assets/Rolling.svg";
import MonsterRolodexs from "./components/card-list/MonsterRolodexes.component";
import Input from "./components/input-component/Input.component";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [filterMonsters, setFilterMonsters] = useState(monsters);
  const [searchValue, setSearchValue] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const search = (event) => {
    const searchValueString = event.target.value.toLowerCase();
    setSearchValue(searchValueString);
  };

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("https://jsonplaceholder.typicode.com/users");

      if (!res.ok) {
        throw new Error("Items not found , something went wrong");
      }

      await res.json().then((monsters) => {
        setMonsters(monsters);
      });
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const newFilterMonsters = monsters.filter(
      (monster) =>
        monster.name.toLowerCase().includes(searchValue) ||
        monster.username.toLowerCase().includes(searchValue)
    );
    setFilterMonsters(newFilterMonsters);
  }, [monsters, searchValue]);

  console.log("renderd");

  return (
    <Fragment>
      <h1 className="app-title">Monstert Rolodex</h1>
      <Input search={search} />
      <MonsterRolodexs rolodexes={filterMonsters} />
      {isLoading && <img src={Rolling} alt="" />}

      {error && <h1 className="error-message">{error}</h1>}
    </Fragment>
  );
};

export default App;

/*

class based component


import React, { Component } from "react";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      error: "",
      searchValue: "",
    };
  }

  fetchData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!res.ok) {
        throw new Error("Items not found");
      }

      await res.json().then((monsters) => {
        this.setState(() => {
          return {
            monsters,
          };
        });
        return monsters;
      });
    } catch (error) {
      this.setState(() => {
        return {
          error: error.message,
        };
      });
    }
  };

  componentDidMount = () => {
    this.fetchData();
  };

  search = (e) => {
    const searchValue = e.target.value.toLowerCase();
    this.setState(() => {
      return {
        searchValue,
      };
    });
  };

  render() {
    const { searchValue, monsters } = this.state;
    const filterMonsters = monsters.filter(
      (monster) =>
        monster.name.toLowerCase().includes(searchValue) ||
        monster.username.toLowerCase().includes(searchValue)
    );

    return (
      <React.Fragment>
        <h1 className="app-title">Monstert Rolodex</h1>
        <Input search={this.search} />

        {monsters.length > 0 ? (
          <MonsterRolodexs rolodexes={filterMonsters} />
        ) : (
          <h1>{this.state.error}</h1>
        )}
      </React.Fragment>
    );
  }
}

export default App;
*/
