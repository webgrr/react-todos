import React, { Component } from 'react';
import './condition.css'
class Title extends Component {
	no_checked_count = () => {
		let count = 0;
		this.props.content_list.map( (item, index) => {
			if (!item.isChecked) {
				count ++;
			}
		})
		return count
	}
	render() {
		// console.log(this.props.content_list)
		return (
			<div 
				style={{display: this.props.content_list.length > 0 ? 'block' : 'none'}}
				className="todo-condition"
				>    
				<span className='left'>
					{this.no_checked_count()}items left
				</span>
				<ul onClick={() => {
					console.log('ulululululululul')
				}}>
					<li>
						<span onClick={() => {
							this.props.set_give_list(this.props.content_list)
						}}>All</span>
					</li>
					<li>
						<span onClick={() => {
							let content_list = []
							this.props.content_list.map((item, index) => {
								if (!item.isChecked) {
									content_list.push(item)
								}
							})
							this.props.set_give_list(content_list)
						}}>Active</span>
					</li>
					<li>
						<span onClick={() => {
							let content_list = [];
							this.props.content_list.map((item, index) => {
								if (item.isChecked) {
									content_list.push(item)
								}
							})
							this.props.set_give_list(content_list)
							
						}}>Completed</span>
					</li>
				</ul>
				<span className='right'>
					<a href="#" onClick = {() => {
						let content_list = []
						this.props.content_list.map((item, index) => {
							if (!item.isChecked) {
								content_list.push(item)
							}
						})
						this.props.set_content_list(content_list)
						this.props.set_give_list(content_list);
					}}>Clear completed</a>
				</span>
			</div>
		);
	}
}

export default Title;
