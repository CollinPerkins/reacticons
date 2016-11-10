// React Modules
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Application Modules
import icons from "./components/icons.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      filter: ""
    }
    this.filterIcons = this.filterIcons.bind(this);
  }
  filterIcons(event){
    this.setState({filter: event.target.value})
  }
  renderIcons(){
    return icons.map((icon, index) => {
      //this.state.filter &&
      console.log(icon.name.toLocaleLowerCase() !== this.state.filter.toLocaleLowerCase());
      if (this.state.filter && icon.name.toLocaleLowerCase().indexOf(this.state.filter.toLocaleLowerCase()) === -1) return;
      return(
        <div key={index} style={{
              display: "inline-block",
              verticalAlign: "top",
              width: "50px",
              height: "50px"
           }}>
          {React.cloneElement(icon.component, {
            width: "50px",
            height: "50px"
          })}
          {/*<span style={{display: "block"}}>{icon.name}</span>*/}
        </div>
      )
    });
  }

  render(){
    return(
      <app>
        <input
          onChange={this.filterIcons}
          placeholder="Filter..."
          style={{display: "block", width: "100%"}}/>
        {this.renderIcons()}
      </app>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
