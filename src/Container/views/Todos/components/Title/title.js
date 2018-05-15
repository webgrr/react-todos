import React, { Component } from 'react';
import './title.css'
const Title = (props) => {
	return (
		<h1 className='todo-title'>
			{props.title}
		</h1>
	);
}

export default Title;
