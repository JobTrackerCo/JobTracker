import React, { Component } from 'react';
import { connect } from 'react-redux';

//import Nav from '../../components/Nav/Nav';
//import { USER_ACTIONS } from '../../redux/actions/userActions';

// const mapStateToProps = state => ({
//   user: state.user,
// });

class InfoPage extends Component {
  componentDidMount() {
    //this.props.dispatch({type: USER_ACTIONS.FETCH_USER});
  }

  componentDidUpdate() {
    // if (!this.props.user.isLoading && this.props.user.userName === null) {
    //   this.props.history.push('home');
    // }
  }

  render() {
    // let content = null;



    return (
      <div>
        <div>
          <p>
            Dashboard Page
          </p>
        </div>
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default InfoPage;
