import React, { Component } from 'react';
import './litem.css'
class Edit extends Component {
	constructor (props) {
		super(props)
		this.state = {
			state_index: props.state_index,
			show_edit: false,
			give_list: props.give_list
		}
	}
	render() {
		console.log(this.state.show_edit)
		let { index, item } = this.props;
		return (
			<li
				onDoubleClick={(e) => {
					this.setState({
						show_edit: true,
						index: index
					})
				}}
				>
				<div 
					className='edit'
					style={{display: this.state.show_edit && index === this.state.state_index ? 'block' : 'none'}}>
					<input 
						type="text"
						onBlur={(e) => {
							let give_list = this.state.give_list;
							give_list[index].text = e.target.value;
							this.props.set_content_list(give_list)
							// this.props.set_give_list(give_list)
							this.setState({
								show_edit: false
							})
						}}
						onKeyUp= {(e) => {
							if (e.keyCode === 13) {
								let give_list = this.state.give_list;
								give_list[index].text = e.target.value;
								this.props.set_content_list(give_list)
								// this.props.set_give_list(give_list)
								this.setState({
									show_edit: false
								})
							}
						}}/>
				</div>
				<time>
					<input 
						type="checkbox" 
						id={index} 
						checked={item.isChecked}
						onChange={(e) => {
							let give_list = this.state.give_list;
							give_list[index].isChecked = e.target.checked;
							this.props.set_content_list(give_list)
							// this.props.set_give_list(give_list)
					}}/>
					<label htmlFor={index}></label>
				</time>
				{
					item.isChecked ? <s>{item.text}</s> : <span>{item.text}</span>
				}
				<span 
					className='delete'
					onClick={() => {
						let give_list = this.state.give_list;
						give_list.splice(index, 1)
						this.props.set_content_list(give_list, false)
						// this.props.set_give_list(give_list)
					}}
					>x</span>
			</li>
		)	
	}
}

export default Edit;
