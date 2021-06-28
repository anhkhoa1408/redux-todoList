import React, { Component } from "react";
import TaskItem from "./TaskItem";

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterName: "",
      filterStatus: -1,
    };
  }

  onChange = (e) => {
    var name = e.target.name;
    var value = e.target.value;
    this.props.onFilter(
      name === "filterName" ? value : this.state.filterName,
      name === "filterStatus" ? value : this.state.filterStatus
    );
    this.setState({
      [name]: value,
    });
  };

  render() {
    var { tasks } = this.props;
    var { filterName, filterStatus } = this.state;
    var elmTasks = tasks.map((task, index) => (
      <TaskItem
        key={task.id}
        index={index}
        task={task}
        onUpdateStatus={this.props.onUpdateStatus}
        onDelete={this.props.onDelete}
        onUpdate={this.props.onUpdate}
      />
    ));
    return (
      <table className="table table-bordered table-hover mt-5">
        <thead>
          <tr>
            <th className="text-center">#</th>
            <th className="text-center">Name</th>
            <th className="text-center">Status</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>
              <input
                type="text"
                className="form-control"
                name="filterName"
                value={filterName}
                onChange={this.onChange}
              />
            </td>
            <td>
              <select
                className="form-control"
                name="filterStatus"
                value={filterStatus}
                onChange={this.onChange}
              >
                <option value={-1}>All</option>
                <option value={0}>Passive</option>
                <option value={1}>Active</option>
              </select>
            </td>
            <td></td>
          </tr>

          {elmTasks}
        </tbody>
      </table>
    );
  }
}

export default TaskList;
