import React, { Component } from 'react';
import './list.css'
class Title extends Component {
	constructor (props) {
		super(props)
		this.state = {
			give_list: props.give_list,
			show_edit: false, 
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
			<div className="todo-list" 
				style={{display: this.state.give_list.length > 0 ? 'block' : 'none'}}>    
				<ul>
					{
						this.state.give_list.map((item, index) => {
							return (
								<li key={index}
									onDoubleClick={(e) => {
										this.setState({
											show_edit: true,
											index: index
										})
									}}>
									<div 
										className='edit'
										style={{display: this.state.show_edit && index === this.state.index ? 'block' : 'none'}}>
										<input 
											type="text"
											onBlur={(e) => {
												let give_list = this.state.give_list;
												give_list[index].text = e.target.value;
												this.props.set_content_list(give_list)
												this.props.set_give_list(give_list)
												this.setState({
													show_edit: false
												})
											}}
											onKeyUp= {(e) => {
												if (e.keyCode === 13) {
													let give_list = this.state.give_list;
													give_list[index].text = e.target.value;
													this.props.set_content_list(give_list)
													this.props.set_give_list(give_list)
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
												this.props.set_give_list(give_list)
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
											this.props.set_content_list(give_list)
											this.props.set_give_list(give_list)
										}}
										>x</span>
								</li>
							)
						})
					}
				</ul>
			</div>
		);
	}
}

export default Title;
