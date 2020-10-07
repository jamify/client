import React from 'react';
import { Comment as CommentType } from '../../store/player/types';

import './comment.css';

interface CommentProps {
  comment: CommentType;
}

const Comment = (props: CommentProps) => {
  const { comment } = props;
  const { text, userId } = comment;

  return (
    <div className="comment-container">
      <p className="comment-user">{userId}</p>
      <p>{text}</p>
    </div>
  );
};

export default Comment;
