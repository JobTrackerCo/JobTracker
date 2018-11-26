import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'

//import Nav from '../../components/Nav/Nav';
//import { USER_ACTIONS } from '../../redux/actions/userActions';

const mapStateToProps = state => ({
  user: state.user,
});

class InfoPage extends Component {
    constructor(props){
        super(props)

        this.state = {
            ENVIRONMENT: ''
        }
    }




  componentDidMount() {
    axios.get('/api/env/get-env')
    .then((response)=>{
        this.setState({
            ENVIRONMENT: response.data
        })
    })
  }

  componentDidUpdate() {
    // if (!this.props.user.isLoading && this.props.user.userName === null) {
    //   this.props.history.push('home');
    // }
  }

  render() {
    let content;

    console.log(this.state.ENVIRONMENT);
    


    if (this.state.ENVIRONMENT === 'LOCAL') {
      content =
        (<div>
          <a href="http://localhost:5000/api/auth/linkedin">click me</a>
        </div>)
    }
    else if (this.state.ENVIRONMENT === 'HEROKU_TEST') {
      content =
        (<div>
          <a href="http://localhost:5000/api/auth/linkedin">click me</a>
        </div>)
    }
    else if (this.state.ENVIRONMENT === 'HEROKU') {
      content =
        (<div>
          <a href="http://localhost:5000/api/auth/linkedin">click me</a>
        </div>)
    }

    return (
      <div>
        <div>
          <p>
            Home Page
          </p>
          {content}
        </div>
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default InfoPage;
