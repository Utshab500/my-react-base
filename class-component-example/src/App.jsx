import React, { Component } from 'react';

// Importing CSS framework Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h1>Meet the { this.props.name }</h1>;
  }
}

function App() {
  const name = 'StarGazers';
  return (
    <div className="container">
      <article>
        <hgroup>
          <Welcome name = "Stars"></Welcome>
          <Welcome name = { name }></Welcome>
          <Welcome name = "StarsAliens"></Welcome>
          <p>Members of an <b>intergalactic alliance</b> paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
        </hgroup>
      </article>
    </div>
  )
}
export default App
