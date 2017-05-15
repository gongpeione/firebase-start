import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';

const config = {
	apiKey: "AIzaSyAYVJKkd_mr4RQZlkITUVUGLeyDieMPHdo",
	authDomain: "geeku-161115.firebaseapp.com",
	databaseURL: "https://geeku-161115.firebaseio.com",
	projectId: "geeku-161115",
	storageBucket: "geeku-161115.appspot.com",
	messagingSenderId: "516887303884"
};
firebase.initializeApp(config);

class App extends Component {
  constructor () {
    super();
    this.state = {
      test: 'test'
    }
  }

  componentDidMount () {
  	const rootRef = firebase.database().ref();
  	const testRef = rootRef.child('test');
  	testRef.on('value', test => {
  		this.setState({
		    test: test.val()
	    });
    });
  	console.log(rootRef, testRef);
  }

  render() {
    return (
      <div className="App">
	      {this.state.test}
      </div>
    );
  }
}

export default App;
