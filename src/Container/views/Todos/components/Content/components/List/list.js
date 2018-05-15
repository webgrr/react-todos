import React, { Component } from 'react';
import Litem from './components/Litem'
import './list.css'
class Title extends Component {
	constructor (props) {
		super(props)
		this.state = {
			give_list: props.give_list,
			index: 0
		}
	}
	componentWillReceiveProps (nextProps) {
		this.setState({
			give_list: nextProps.give_list
		})
	}
	render() {
		return (
			<ul
				className="todo-list"
				style={{display: this.state.give_list.length > 0 ? 'block' : 'none'}}
				>
				{
					this.state.give_list.map((item, index) => {
						return (
							<Litem 
								key={index}		
								item={item}
								index={index}
								state_index={this.state.index}			
								give_list={this.state.give_list}
								set_content_list={this.props.set_content_list}
								/>
						)
					})
				}
			</ul>
		);
	}
}

export default Title;
