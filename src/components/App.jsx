/**
 * Created by sms ahmed on 23-08-16.
 */

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Profile from './github/profile.jsx';
import Search from './github/search.jsx';


class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            username : 'smshakilahmed',
            userData : [],
            userRepos: [],
            perPage: 5
        }

    }

    //get user data from github
    getUserData(){
        $.ajax({
            url: 'https://api.github.com/users/' +
            this.state.username + '?client_id=' +
            this.props.clientId + '&client_secret=' +
            this.props.clientSecret,
            dataType: 'json',
            cache: false,
            success: function(data){
                this.setState({userData : data});
                console.log(data);
            }.bind(this),
            error: function(xhr,status,err){
                this.setState({username:"shakil"});
                alert(err);
            }.bind(this)
        })//.ajax
    }//./getUserData


    // get user Repo from github
    getUserRepos(){
        $.ajax({
            url: 'https://api.github.com/users/' + this.state.username +
            '/repos?per_page='+ this.state.perPage +
            '&client_id=' + this.props.clientId +
            '&client_secret=' + this.props.clientSecret +
            '&sort=created',
            dataType: 'json',
            cache: false,
            success: function(data){
                this.setState({userRepos : data});
            }.bind(this),
            error: function(xhr, status, err){
                this.setState({userRepos : null});
                alert(err);
            }.bind(this)
        })//.ajax
    }//./getUserRepos




    componentDidMount(){
        this.getUserData();
        this.getUserRepos();
    }
    handleFormSubmit(username){
        this.setState({username: username},()=>{
            this.getUserData();
            this.getUserRepos();
        });
    }
    render(){
        return(
            <div>
                <Search onFormSubmit={this.handleFormSubmit.bind(this)}/>
                <Profile {...this.state}/>
            </div>
        )
    }

}

App.propTypes = {
    clientId: React.PropTypes.string,
    clientSecret:  React.PropTypes.string
};
App.defaultProps = {
    clientId: '50389124f9bc31dbccd1',
    clientSecret: '75505562ab386179112ce66223281e50de7fc58b'
};
export default App