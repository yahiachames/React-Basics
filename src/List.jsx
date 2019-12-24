import React, { Component } from "react";
import "./List.css";
import Input from "./input";

class List extends Component {
  state = {
    names: [],
    permession: 0,
    DeletedTarget: -1
  };

  componentDidMount() {
    this.setState({ names: ["chames", "ala", "walid", "aymen", "ahmed"] });
  }

  allowAdd = () => {
    this.setState(() => {
      return { permession: this.state.permession + 1 };
    });
    console.log(this.state.permession);
  };
  addName = a => {
    let arr = this.state.names;
    arr.push(a);
    console.log(a);
    this.setState(state => {
      return { names: arr };
    });
  };
  deleteName = () => {
    let arr = this.state.names;
    arr = arr.splice(this.state.DeletedTarget, 1);

    this.setState({ DeletedTarget: arr });
  };
  render() {
    return (
      <ul className='list-group container justify'>
        {this.state.names.map((el, i) => (
          <li
            className='list-group-item widthbig '
            key={i}
            onClick={() => {
              console.log(this.state.DeletedTarget);
              this.setState({ DeletedTarget: i });
            }}
          >
            {" "}
            {el}{" "}
          </li>
        ))}
        <div className='buttons'>
          {" "}
          <button className='btn btn-danger' onClick={this.allowAdd}>
            {" "}
            Add Name{" "}
          </button>{" "}
          <button className='btn btn-primary' onClick={() => this.deleteName()}>
            Delete Name{" "}
          </button>{" "}
        </div>

        {this.state.permession % 2 !== 0 ? (
          <Input input={this.addName} />
        ) : (
          <div></div>
        )}
      </ul>
    );
  }
}

export default List;
