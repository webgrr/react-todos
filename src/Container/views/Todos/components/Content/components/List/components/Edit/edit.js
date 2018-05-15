import React, { Component } from 'react';
import './edit.css'
class Edit extends Component {
	constructor (props) {
		super(props)
		this.state = {
			show_edit: props.show_edit
		}
	}
	render() {
		console.log(this.state.show_edit)
		return (
			<div 
				className='edit'
				style={{display: this.state.show_edit && this.props.index === this.props.state_index ? 'block' : 'none'}}>
				<input 
					type="text"
					onBlur={(e) => {
						let give_list = this.state.give_list;
						give_list[this.props.index].text = e.target.value;
						this.props.set_content_list(give_list)
						this.setState({
							show_edit: false
						})
					}}
					onKeyUp= {(e) => {
						if (e.keyCode === 13) {
							let give_list = this.state.give_list;
							give_list[this.props.index].text = e.target.value;
							this.props.set_content_list(give_list)
							this.setState({
								show_edit: false
							})
						}
					}}/>
			</div>
		);
	}
}

export default Edit;
