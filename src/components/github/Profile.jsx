/**
 * Created by sms ahmed on 24-08-16.
 */


import React, {Component} from 'react';
import RepoList from "./RepoList.jsx";

class Profile extends Component{
    render(){
        return(
        <div>
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">{this.props.userData.name}</h3>
                </div>
                <div className="panel-body">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={this.props.userData.avatar_url} alt="" style={{width: "100%"}}/>
                        </div>
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-12">
                                    <span className="label label-primary">{this.props.userData.public_repos} Repos </span>
                                    <span className="label label-success">{this.props.userData.public_gists} Public Gists</span>
                                    <span className="label label-info">{this.props.userData.followers} Followers </span>
                                    <span className="label label-danger">{this.props.userData.following} Following </span>
                                </div>
                            </div>
                            <hr/>
                            <div className="col-md-12">
                                <ul className="list-group">
                                    <li className="list-group-item"><strong>User name: </strong>{this.props.userData.login}</li>
                                    <li className="list-group-item"><strong>User location: </strong>{this.props.userData.location}</li>
                                    <li className="list-group-item"><strong>User Email: </strong>{this.props.userData.email}</li>
                                    <li className="list-group-item"><strong>User Email: </strong>{this.props.userData.url}</li>
                                    <li className="list-group-item"><strong>User Email: </strong>{this.props.userData.email}</li>
                                    <li className="list-group-item"><strong>User Email: </strong>{this.props.userData.email}</li>
                                </ul>
                                <a className="btn btn-primary" href={this.props.userData.html_url}>View profile</a>
                            </div>
                        </div>

                    </div>

                </div>
                <hr/>
                <h3>UserRepositerioe: </h3>
                <RepoList userRepos = {this.props.userRepos} />
            </div>
        </div>

        )
    }

}
export default Profile
