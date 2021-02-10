import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {Link, Route} from 'react-router-dom';
import CommentBox from './CommentBox';
import CommentList from './CommentList';


class App extends Component {
  renderButton() {
      if(this.props.isSignedIn) {
        return <button>Sign Out</button>
      } else {
        return <button>Sign In</button>
      }
  }

  renderHeader() {
    return(
      <Fragment>
        <ul className="nav__list">
          <li className="nav__item" ><Link to='/'>Home</Link></li>
          <li className="nav__item" ><Link to='/post'>Create a Post</Link></li>
          <li className="nav__item">{this.renderButton()}</li>
        </ul>
        <hr/>
      </Fragment>
    )
  }

  render() {
    return (
      <Fragment>
        <div className='nav'>{this.renderHeader()}</div>
        <div>
          <Route exact path='/' component={CommentList}/>
          <Route path='/post' component={CommentBox}/>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
};

export default connect(mapStateToProps)(App);