import React, { Component } from 'react';
import Input from './components/Input/index'
import List from './components/List/index'
import Condition from './components/Condition/index'
class Content extends Component {
    constructor (props) {
        super(props)
        this.state = {
            content_list: [],
			give_list: []
        }
    }
    set_content_list = (input_content, flag) => {
        // let content_list = this.state.content_list
        // content_list.push(input_content)
        console.log(flag)
        if (flag) {

        } else {

        }
		this.setState({
            content_list: [
                ...this.state.content_list,
                ...input_content
            ],
            give_list: [
                ...this.state.give_list,
                ...input_content
            ]
		})
	}
	set_give_list = (new_list) => {
		this.setState({
			give_list: new_list
		})
    }
    is_all_checked = () => {
        let flag = true
        let length = false
        let checked_count = 0
        if (this.state.content_list.length > 0) {
            length = true
            this.state.content_list.map((item, index) => {
                if (!item.isChecked) {
                    flag = false
                } else {
                    checked_count ++
                }
            })
        }
        return {
            length,
            checked_count,
            flag
        }
	}
	render() {
        console.log(this.state.content_list);
        console.log(this.state.give_list)
        return (
            <div className="todo_content_box">
                <Input 
                    set_content_list={this.set_content_list}
                    is_all_checked={this.is_all_checked()}
                    />
                <List 
                    set_content_list={this.set_content_list}
                    give_list={this.state.give_list}
                    />
                <Condition 
                    set_content_list={this.set_content_list}
                    give_list={this.state.give_list}
                    content_list={this.state.content_list}
                    set_give_list={this.set_give_list}
                    />
            </div>
        )
		
	}
}

export default Content;
