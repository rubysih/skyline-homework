import React, { Component } from "react";
import "./index.scss";

class Index extends Component {
  constructor() {
    super();
    //以兩個陣列分別存放數字及運算子，要運算時再拚成一個算式
    this.state = {
      show: '0',
      numList: [],
      opList: [],
      isFinshCal: false
    };
  }

  handleNumClick = (e) => {
    const { opList, numList, isFinshCal } = this.state;
    const value = e.target.value;
    const index = opList.length || 0;
    if(!numList.length){
      numList.push(value);
    }else if(isFinshCal){
      numList[index] = value;
    }else{
      numList[index] = numList[index] ? numList[index] + value : value;
    }
    this.setState({
      ...this.state,
      numList,
      show: numList[numList.length - 1],
      isFinshCal: false
    })
  }

  handleOpClick = (e) => {
    const value = e.target.value;
    const { opList } = this.state;
    switch(value) {
      case 'x':
        opList.push('*');
        break;
      case '÷':
        opList.push('/');
        break;
      default:
        opList.push(value);
    }
    this.setState({
      ...this.state,
      opList,
      isFinshCal: false
    })
  }

  handleCalculate = () => {
    let formula = '';
    const { opList, numList } = this.state;
    opList.forEach((item, index) => {
      formula += numList[index] + item;
      if(index === (opList.length - 1)) formula += numList[index + 1];
    })
    let show = eval(formula);
    this.setState({
      ...this.state,
      show,
      opList: [],
      numList: [show],
      isFinshCal: true
    })
  }

  handleRefresh = () => {
    this.setState({
      ...this.setState,
      show: '0',
      numList: [],
      opList: [],
      isFinshCal: false
    })
  }

  render() {
    let numList = [];
    let opList = ["+", "-", "x", "÷"];
    for (let i = 1; i <= 9; i++) {
      numList.push(i);
    }
    numList = [...numList, 0, "."];
    const { show } = this.state;
    return (
      <div className="container">
        <div className="show-block">{show}</div>
        <div className="btn-block">
          <div className="number-block">
            {numList.map(item => (
              <button key={item} type="button" className={`btn  ${item===0 ? "two" : ""}`} onClick={this.handleNumClick} value={item}>{item}</button>
            ))}
          </div>
          {opList.map(item => (
            <button key={item} type="button" className={`btn `} onClick={this.handleOpClick} value={item}>{item}</button>
          ))}
          <button key='AC' type="button" className='btn two' onClick={this.handleRefresh}>AC</button>
          <button key='=' type="button" className='btn two' onClick={this.handleCalculate}>=</button>
        </div>
      </div>
    );
  }
}

export default Index;
