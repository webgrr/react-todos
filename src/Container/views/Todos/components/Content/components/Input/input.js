import React, { Component } from 'react';
import './input.css'
class Input extends Component {
	// constructor (props) {
	// 	super(props)
	// 	this.state = {
	// 		input_content: []
	// 	}
	// }
	
	render() {
		return (
			<div className="todo-input">  
				<span>
					<span 
						style={{
							display: this.props.is_all_checked.length > 0 ? 'block' : 'none',
							color: this.props.is_all_checked.flag ? '#737373': '#e6e6e6'
							}}
						>ˇ</span>
				</span>
				<input type="text" 
					placeholder='what needs to be done ?' 
					onKeyUp= {(e) => {
						if (e.keyCode === 13) {
							if (e.target.value !== '') {
								let input_content = []
								input_content.push({
									'text': e.target.value,
									'isChecked': false
								 })
								this.props.set_content_list(input_content)
								e.target.value = ''
							}
						}
					}}/>
			</div>
		);
	}
}

export default Input;
