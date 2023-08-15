import React from 'react'
import './Calculator.css'
class Calculator extends React.Component {
    constructor(props){
        super(props);
        this.state={
            output: 0,
            inputValue: " ",
        };
    }
    handleChange = (e) => {
        this.setState({
            inputValue:  e.target.value,

        });
    };
    handleClick = (e) => {
        const addition = parseInt(this.state.output) + parseInt(this.state.inputValue);
        this.setState({
            output: addition,
        });
    };
    handleSubtract = (e) => {
        const subtraction = parseInt(this.state.output) - parseInt(this.state.inputValue);
        this.setState({
            output: subtraction,
        });
    };
   
    handleMultiply = (e) => {
        const multiply = parseInt(this.state.output) * parseInt(this.state.inputValue);
        this.setState({
            output: multiply,
        });
    };
    handleClear = () => {
        this.setState({
            inputValue: '',
            output: 0,
        });
    };
    
    render() {
        return (

            <div className="calculatorBorder">
                <h4>Calculator</h4>
                <div >
                    <input className="input" value={this.state.inputValue} />
                      <h5>Typed value: {this.state.inputValue}</h5>
            
                </div>
                <div className="down">
                    <button className="btncalc" onClick={this.handleChange} value={(7)}>7</button>
                    <button className="btncalc" onClick={this.handleChange} value={(8)}>8</button>
                    <button className="btncalc" onClick={this.handleChange} value={9}>9</button>
                    <button className="btncalc" onClick={this.handleClick}>+</button>
                    

                </div>
                <div className="down">
                    <button className="btncalc" onClick={this.handleChange} value={4}>4</button>
                    <button className="btncalc" onClick={this.handleChange} value={5}>5</button>
                    <button className="btncalc" onClick={this.handleChange} value={6}>6</button>
                    <button className="btncalc" onClick={this.handleSubtract}>-</button>
                    

                </div>
                <div className="down">
                    <button className="btncalc" onClick={this.handleChange} value={1}>1</button>
                    <button className="btncalc" onClick={this.handleChange} value={2}>2</button>
                    <button className="btncalc" onClick={this.handleChange} value={3}>3</button>
                    <button className="btncalc" onClick={this.handleChange} value={"/"}>/</button>
                    

                </div>
                <div className="downbutton">
                    <button className="btncalc" onClick={this.handleMultiply}>*</button>
                    <button className="btncalc" onClick={this.handleAns}>=</button>
                    <button className="btncalc" onClick={this.handleClear } >C</button>
                    
                    

                </div>
                <h4>The result is: {this.state.output}</h4>
            </div>

        )
    }
}
export default Calculator;