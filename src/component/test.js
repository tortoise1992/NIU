import React, { Component } from 'react';
import {Button} from 'antd-mobile';
import {connect} from 'react-redux'
import {addItem,loseItem} from '../store/redux'
class Test extends Component {
  constructor(props) {
    super(props);
  }
  handleAdd(num){
    this.props.addItem(num)
  }
  handlelose(num){
    this.props.loseItem(num)
  }
  render() {
    const {num}=this.props
    console.log(num)
    return (
      <div>
        <div>测试一下</div>

        <Button type='primary' size='small' onClick={this.handleAdd.bind(this,2)}>加1</Button>
        <div>{num}</div>
        <Button type='primary' size='small' onClick={this.handlelose.bind(this,2)}>减1</Button>
      </div>
    );
  }
}

export default connect(state=>state,{addItem,loseItem})(Test);
