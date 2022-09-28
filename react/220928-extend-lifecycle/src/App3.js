import React, { Component } from 'react';
import ScrollBox from './ScrollBox';
 
class App3 extends Component {
  render() {
    return(
      <div>
        <ScrollBox ref={(ref) => this.scroll=ref} />
        <button onClick={() => this.scroll.ScrollBottom()}>맨 밑으로</button>
        <button onClick={() => this.scroll.ScrollTop()}>맨 위로</button>
   </div>
    )
  }
}
 
export default App3;