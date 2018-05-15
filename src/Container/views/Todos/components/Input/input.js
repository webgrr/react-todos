import React, { Component } from 'react';
import './input.css'
class Input extends Component {
	constructor (props) {
		super(props)
		this.state = {
			content_list: this.props.content_list
		}
	}
	is_all_checked = () => {
		let flag = true
		this.state.content_list.map((item, index) => {
			if (!item.isChecked) {
				flag = false
			} 
		})
		return flag
	}
	render() {
		console.log(this.is_all_checked())
		return (
			<div className="todo-input">  
				<span>
					<span 
						style={{
							display: this.state.content_list.length > 0 ? 'block' : 'none',
							color: this.is_all_checked() ? '#737373': '#e6e6e6'
							}}
						>ˇ</span>
				</span>
				<input type="text" 
					placeholder='what needs to be done ?' 
					onKeyUp= {(e) => {
						if (e.keyCode === 13) {
							// console.log(e.target.value);
							let content_list = this.state.content_list
							if (e.target.value !== '') {
								content_list.push({
									'text': e.target.value,
									'isChecked': false
								 })
								this.setState({
									content_list
								}, () => {
									this.props.set_content_list(this.state.content_list)
									this.props.set_give_list(this.state.content_list)
								})
								e.target.value = ''
							}
						}
					}}/>
			</div>
		);
	}
}

export default Input;
