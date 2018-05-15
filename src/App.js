import React, { Component } from 'react';
import './App.css';
import Title from './Container/views/Todos/components/Title/index'
import Input from './Container/views/Todos/components/Input/index'
import List from './Container/views/Todos/components/List/index'
import Condition from './Container/views/Todos/components/Condition/index'
class App extends Component {
	constructor (props) {
		super(props)
		this.state = {
			content_list: [],
			give_list: []
		}
	}
	set_content_list = (new_list) => {
		this.setState({
			content_list: new_list
		})
	}
	set_give_list = (new_list) => {
		this.setState({
			give_list: new_list
		})
	}
	// is_all_checked = () => {
	// 	let flag = true
	// 	this.state.content_list.map((item, index) => {
	// 		if (!item.isChecked) {
	// 			flag = false
	// 		} 
	// 	})
	// 	return flag
	// }
	render() {
		// console.log(this.is_all_checked())
		return (
			<div className="App">   
				<Title />  
				<div className="todo_content_box">
					<Input 
						set_content_list={this.set_content_list}
						give_list={this.state.give_list}
						content_list={this.state.content_list}
						set_give_list={this.set_give_list}
						/>
					<List 
						set_content_list={this.set_content_list}
						give_list={this.state.give_list}
						content_list={this.state.content_list}
						set_give_list={this.set_give_list}
						/>
					<Condition 
						set_content_list={this.set_content_list}
						give_list={this.state.give_list}
						content_list={this.state.content_list}
						set_give_list={this.set_give_list}
						/>
				</div>
			</div>
		);
	}
}

export default App;
