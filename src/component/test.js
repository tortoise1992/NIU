import React, { Component } from 'react';
import {Button} from 'antd-mobile'
class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div>
        <div>测试一下</div>
        <Button type='ghost' size='small'>测试按钮</Button>
      </div>
    );
  }
}

export default Test;
