import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentBox extends Component {

  componentDidMount() {
    this.shouldNavigateAway()
  }

  componentDidUpdate() {
    this.shouldNavigateAway()
  }

  shouldNavigateAway() {
    if(!this.props.auth) {
      this.props.history.push('/');
    } 
  }

  render() {
    return (
    <div className="comment-box">
      <h1>Add a Comment</h1>
      <form className='form'>
        <textarea className="text-area">
        </textarea>
        <button className="btn">Submit Comment</button>
        <button className="btn">Fetch Comments</button>
      </form>
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(CommentBox) ;