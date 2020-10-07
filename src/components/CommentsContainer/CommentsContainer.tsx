import React, { useEffect, useState, useCallback, useRef } from 'react';
import { useSelector } from 'react-redux';

import { Button, Spinner, TextField } from '@shopify/polaris';

import Comment from '../Comments';
import NoMessages from '../NoMessages';

import { RootState } from '../../store';
import { Comment as CommentType, PlayerState } from '../../store/player/types';

import { jamifyAPI } from '../../api';
import pusher from '../../utils/pusher';

import './CommentContainer.css';

const MESSAGE = 'message';

const CommentsContainer = () => {
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [comments, setComments] = useState([]);

  const bottomRef: any = useRef();

  const selectPlayerState = (state: RootState) => state.player;
  const playerState: PlayerState = useSelector(selectPlayerState);

  const handleChange = useCallback((newValue) => setValue(newValue), []);

  const submitComment = async () => {
    setIsLoading(true);
    await jamifyAPI.messages.post(playerState.host, value);
    setIsLoading(false);
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

  const renderSpinner = () => {
    if (isLoading) {
      return (
        <div className="spinner-container">
          <Spinner
            accessibilityLabel="Loading"
            size="small"
            color="inkLightest"
          />
        </div>
      );
    }
    return;
  };

  const setupPusher = () => {
    const channel = pusher().subscribe(playerState.host);
    channel.bind(MESSAGE, onMessageReceived);
  };

  const onMessageReceived = (data: CommentType) => {
    setComments((prevMessages: CommentType[]): any => {
      return [...prevMessages, data];
    });
  };

  const getChannelComments = async () => {
    const response = await jamifyAPI.messages.get(playerState.host);
    const { messages } = response;
    setComments(messages);
  };

  const scrollToBottom = () => {
    bottomRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  useEffect(() => {
    getChannelComments();
    setupPusher();
    scrollToBottom();
    return (): void => {
      pusher().unbind(MESSAGE, onMessageReceived);
    };
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [comments]);

  return (
    <div className="comments-container-height-adjust">
      <h2>Comments</h2>
      <div className="comments-container">
        {commentMarkups()}
        <div ref={bottomRef}></div>
      </div>
      <div onKeyDown={keyPress} className="comment-input-container">
        {renderSpinner()}
        <div className="button-container">
          <Button
            plain
            disabled={value === '' || isLoading}
            onClick={submitComment}
          >
            Send
          </Button>
        </div>
        <TextField
          autoComplete="off"
          value={value}
          onChange={handleChange}
          placeholder="Leave a comment..."
          label=""
          labelHidden
          disabled={isLoading}
          maxLength={100}
        />
      </div>
    </div>
  );
};

export default CommentsContainer;
