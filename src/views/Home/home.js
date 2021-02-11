import React from "react";
import { Button, TextField } from "@material-ui/core";
import logo from "icons/logo.svg";
import styles from "./home.scss";
import { PATHS } from "app/constants";
import { Link } from "react-router-dom";

class Home extends React.Component {
  state = {
    id: "",
    task: "",
  };
  componentDidMount = () => {
    this.props.getTasks();
  };
  navigateToProfile = (uId) => {
    let path = PATHS.PROFILE;
    path = path.replace(":profile_id?", uId || "");
    return this.props.history.push({
      pathname: path,
    });
  };
  handleInputChange = (e, key) => {
    let newValue = e.target.value;
    this.setState({ [key]: newValue });
  };
  addTask = () => {
    let { id, task } = this.state;
    this.props.addTask({ id, task });
  };
  render() {
    let { id, task } = this.state;
    let { home = {} } = this.props;
    let { tasks } = home;
    // let { apiTracker } = this.props.common;
    // let tListApiTracker = apiTracker[API_URL.getTasks];
    return (
      <div className="home">
        <img src={logo} className="logo" alt="logo" />

        <TextField
          value={id}
          required
          label="Required"
          onChange={(e) => this.handleInputChange(e, "id")}
        />
        <TextField
          value={task}
          required
          label="Required"
          onChange={(e) => this.handleInputChange(e, "task")}
        />
        <Button onClick={this.addTask} variant="contained" color="primary">
          Add task
        </Button>
        {tasks && this.buildList(tasks)}
        <div>
          <Button
            onClick={() => this.navigateToProfile("malkeet-singh")}
            variant="contained"
            color="primary"
          >
            Profile
          </Button>
          <li>
            <Link to={PATHS.TOPICS}>Topics</Link>
          </li>
        </div>
      </div>
    );
  }
  buildList = (tasks) => {
    if (!tasks) {
      return;
    }
    return (
      <ul>
        {Object.keys(tasks)?.map((taskId) => (
          <li key={taskId}>{tasks[taskId]["task"]}</li>
        ))}
      </ul>
    );
  };
}

export default Home;
