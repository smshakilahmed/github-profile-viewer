/**
 * Created by sms ahmed on 24-08-16.
 */


import React, {Component} from 'react';

class Repo extends Component{

    render(){
        const {repo} =  this.props;
        //const repo = {repo};
        //const repoCount = {repo}.length;
        return(
            //repoCount>2 ? 'hello' : 'no hello'
            <li className="list-group-item">
                <a href=  {repo.html_url} >
                    {repo.name}
                </a> : {repo.description}
            </li>


        )
    }

}
export default Repo
