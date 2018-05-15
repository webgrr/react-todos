import React, { Component, Fragment } from 'react';
import './App.css';
import Content from './Container/views/Todos/components/Content/index'

const Title = (props) => <h1 className='todo-title'>{props.title}</h1>

class App extends Component {
	constructor (props) {
		super(props)
		this.state = {
			title: 'todos'
		}
	}
	render() {
		return (
			<Fragment>   
				<Title title={this.state.title}/>  
				<Content />
			</Fragment>
		);
	}
}

export default App;
