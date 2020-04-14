import React, { Component } from 'react';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     list: [{name:'sanjan',
             age:25,
             username:'sanj31'},
             {name:'saloni',
             age:22,
             username:'sal45'},
             {name:'manish',
             age:25,
             username:'manish@31'},
             {name:'naina',
             age:29,
             username:'naina45'}],
    
  }
}
  render() {
   const {list} = this.state;    
    return (
      <div>
        <ul>
           {list.map((item, idx) => {
             console.log(idx,item)
             return (
              <li key={idx}>{item.name} <br/>{item.age} <br/>{item.username}</li>
            )}
          )}
        </ul>
  
      </div>
    );
  }
}
export default App;