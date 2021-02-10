import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentBox extends Component {

  

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