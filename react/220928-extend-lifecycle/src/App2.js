import React, { Component } from 'react';
import Scroll from './Scroll';
 
class App2 extends Component {
  render() {
    return(
      <div>
    <Scroll ref={(ref) => this.scroll=ref} />
    <button onClick={() => this.scroll.scrollBottom()}>맨 밑으로</button>
   </div>
    )
  }
}
 
export default App2;