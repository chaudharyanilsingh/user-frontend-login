import React, { Component } from 'react';
import './Home.css';
import Axios from 'axios'
import { API_BASE_URL, ACCESS_TOKEN } from '../../constants';
import Profile from '../profile/Profile';
class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            currentUser:[],
            error:null
        }
    }

    componentDidMount(){
        
        const url=`${API_BASE_URL}/user/me`;
        
            Axios.get(url,{ headers: {"Authorization" : `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`} })
            .then(response=>{
                this.setState({
                    currentUser:response.data
                })
            })
            .catch(err=>{
                this.setState({
                    error:err.message

                })
            })
        }
    
    

    
    render() {
        
        return (
             <div className="home-container">
               <Profile currentUser={this.state.currentUser}/>
            </div>
        
        )
    }
}

export default Home;