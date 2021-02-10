import React, { Component } from 'react';
import requireAuth from './requireAuth';

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


export default requireAuth(CommentBox);