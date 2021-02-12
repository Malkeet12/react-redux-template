import React from "react";
import { Button, TextField } from "@material-ui/core";
import logo from "icons/logo.svg";
import styles from "./home.scss";
import { PATHS } from "app/constants";
import { Link } from "react-router-dom";

class Home extends React.Component {
  state = {
    collapsedMap: {},
    dir: [
      {
        name: "my-app",
        value: [
          {
            name: "node_modules",
            type: "folder",
            value: [
              {
                name: ".bin",
                type: "folder",
                value: [
                  {
                    name: "abc",
                    value: [{ name: "accorn", type: "file" }],
                    type: "folder",
                  },
                ],
              },
            ],
          },
          { name: "2.js", type: "file" },
          {
            name: "public",
            value: [{ name: "1.js", type: "file" }],
            type: "folder",
          },
        ],
        type: "folder",
      },
    ],
  };

  render() {
    let { home = {} } = this.props;
    let { dir } = this.state;

    return <div className="home">{this.buildList(dir)}</div>;
  }

  toggle = (item) => {
    let collapsedMapCopy = Object.assign({}, this.state.collapsedMap);
    collapsedMapCopy[item] = !collapsedMapCopy[item];
    this.setState({ collapsedMap: collapsedMapCopy });
  };
  buildList = (list) => {
    let { collapsedMap } = this.state;
    return list.map((item) => {
      return (
        <ul key={item.key}>
          <div onClick={() => this.toggle(item.name)}>{item.name}</div>

          {collapsedMap[item.name] &&
            item.value &&
            item.value.map((item) => {
              if (item.type === "file") {
                return (
                  <li key={item.name} className="files">
                    {item.name}
                  </li>
                );
              }
              if (item.type === "folder") {
                return this.buildList([item]);
              }
            })}
        </ul>
      );
    });
  };
}

export default Home;
