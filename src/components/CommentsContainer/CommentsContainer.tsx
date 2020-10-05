import React, { useState, useCallback } from 'react';

import { Button, TextField } from '@shopify/polaris';

import Comment from '../Comments';
import { Comment as CommentType } from '../../store/player/types';

import './CommentContainer.css';
import NoMessages from '../NoMessages';

interface CommentsContainerProps {
  comments: CommentType[];
}

const CommentsContainer = (props: CommentsContainerProps) => {
  const [value, setValue] = useState('');
  const handleChange = useCallback((newValue) => setValue(newValue), []);

  const { comments } = props;

  const submitComment = () => {
    setValue('');
  };

  const commentMarkup = (comment: any, index: any) => {
    return <Comment key={index} comment={comment} />;
  };

  const commentMarkups = () => {
    if (comments.length === 0) {
      return <NoMessages />;
    }
    return comments.map(commentMarkup);
  };

  const keyPress = (e: any) => {
    if (e.keyCode === 13 && value !== '') {
      submitComment();
    }
  };

  return (
    <div className="comments-container-height-adjust">
      <h2>Comments</h2>
      <div className="comments-container">{commentMarkups()}</div>
      <div onKeyDown={keyPress} className="comment-input-container">
        <div className="button-container">
          <Button plain disabled={value === ''} onClick={submitComment}>
            Send
          </Button>
        </div>
        <TextField
          value={value}
          onChange={handleChange}
          placeholder="Leave a comment..."
          label=""
          labelHidden
          maxLength={100}
        />
      </div>
    </div>
  );
};

export default CommentsContainer;
