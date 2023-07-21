import React from "react";

class NumberMultiplier extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      result: 0,
    };
  }

  handleChange = (event) => {
    const inputNumber = parseInt(event.target.value);
    this.setState({
      number: inputNumber,
      result: inputNumber * (this.props?.multiplier || 2),
    });
  };

  render() {
    const { number, result } = this.state;
    return (
      <div>
        <h2>Number Multiplier</h2>
        <input type="number" value={number} onChange={this.handleChange} />
        <p>Result: {result}</p>
      </div>
    );
  }
}

export default NumberMultiplier;
