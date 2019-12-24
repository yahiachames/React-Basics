import React, { Component } from "react";
class Input extends Component {
  state = { input: "" };
  render() {
    console.log(this.state.input);

    return (
      <div className='input-group input-group-sm mb-3'>
        <div className='input-group-prepend'>
          <button
            className='btn-dark'
            onClick={() => this.props.input(this.state.input)}
          >
            {" "}
            add{" "}
          </button>
        </div>
        <input
          type='text'
          className='form-control'
          aria-label='Small'
          aria-describedby='inputGroup-sizing-sm'
          onChange={e => this.setState({ input: e.target.value })}
        />
      </div>
    );
  }
}

export default Input;
