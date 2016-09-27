import React, { Component } from 'react';

class Search extends Component{
    onSubmit(e){
        e.preventDefault();
        let username = this.refs.username.value.trim();
        if(!username){
            alert('please enter a valid username');
            return;
        }
        this.props.onFormSubmit(username);
        this.refs.username.value = '';
    }
    render(){
        return(
            <div className="form">
                <form onSubmit = {this.onSubmit.bind(this)}>
                    <label>search github users</label>
                    <input type="text" ref="username" className="form-control"/>
                    <button className="btn btn-danger" type="submit">submit</button>
                </form>
            </div>
        )
    }

}
export default Search
