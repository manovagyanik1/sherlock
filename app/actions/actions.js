import 'whatwg-fetch';

export function likePostById(id) {
  return {
    id: id,
    type: 'LIKE_POST_BY_ID'
  };
}

export function addGifs(collection) {
  return {
    collection: collection,
    type: 'ADD_GIFS'
  };
}

export function fetchData() {
  const RESOURCE = 'http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC';

  return dispatch => {
    fetch(RESOURCE, {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      return response.json();
    }).then((jsonResponse) => {
      dispatch(addGifs(jsonResponse.data));
    });
  };
}

export const ActionTypes = {
    REQUEST_REVIEW_TEMPLATE: "request_review_template",
    RECEIVE_REVIEW_TEMPLATE: "receive_review_template",
    REQUEST_REVIEW_TEMPLATES: "request_review_templates",
    RECEIVE_REVIEW_TEMPLATES: "receive_review_templates",
    REQUEST_REVIEW_QUESTIONS: "request_review_questions",
    RECEIVE_REVIEW_QUESTIONS: "receive_review_questions",
    REQUEST_REVIEW_TASKS: "request_review_tasks",
    RECEIVE_REVIEW_TASKS: "receive_review_tasks",
  RECEIVE_FEED: "receive_feed",
  ERROR_FEED: "error_feed",
  REQUEST_COMMENTS: "request_comments",
  RECEIVE_COMMENTS: "receive_comments",
  ERROR_COMMENTS: "error_comments",
  ERROR_POST_USER_REACTION: "error_post_user_reaction",
  ERROR_COMMENT_USER_REACTION: "error_comment_user_reaction",
  INCREMENT_API_COUNT: "increment_api_count",
  DECREMENT_API_COUNT: "decrement_api_count",
  REQUEST_REACT_FEED: "request_react_feed",
  RECEIVE_REACT_FEED: "receive_react_feed",
  REQUEST_POST_USER_REACTION: 'request_post_user_reaction',
  REQUEST_COMMENT_USER_REACTION: 'request_comment_user_reaction',
  RECEIVE_POST_USER_REACTION: 'receive_post_user_reaction',
  RECEIVE_COMMENT_USER_REACTION: 'receive_comment_user_reaction',
  REQUEST_POST_USER_DEREACTION: "request_post_user_dereaction",
  REQUEST_COMMENT_USER_DEREACTION: "request_comment_user_dereaction",
  RECEIVE_POST_USER_DEREACTION: "receive_post_user_dereaction",
  RECEIVE_COMMENT_USER_DEREACTION: "receive_comment_user_dereaction",
  REQUEST_SHARE: "request_share",
  RECEIVE_SHARE: "receive_share",
  REQUEST_COMMENT: "request_comment",
  RECEIVE_COMMENT: "receive_comment",
  ERROR_COMMENT: "error_comment",
};

export class Actions {

  static incrementAPICount = () => ({
      type: ActionTypes.INCREMENT_API_COUNT,
  });

  static decrementAPICount = () => ({
      type: ActionTypes.DECREMENT_API_COUNT,
  });

  static errorFeed = () => ({
      type: ActionTypes.ERROR_FEED,
  });

  static errorCommentUserReaction = () => ({
      type: ActionTypes.ERROR_COMMENT_USER_REACTION,
  });

  static errorPostUserReaction = () => ({
      type: ActionTypes.ERROR_POST_USER_REACTION,
  });

  static errorComment = () => ({
      type: ActionTypes.ERROR_COMMENT,
  });

  static errorComments = () => ({
      type: ActionTypes.ERROR_COMMENTS,
  });

  static requestReviewTemplate = ({reviewProgram, reviewTemplateId}) => ({
      reviewProgram,
      reviewTemplateId,
      type: ActionTypes.REQUEST_REVIEW_TEMPLATE
  });

    static receiveReviewTemplate = ({reviewTemplate}) => ({
        reviewTemplate,
        type: ActionTypes.RECEIVE_REVIEW_TEMPLATE
    });

    static requestReviewTemplates = ({reviewProgram}) => ({
        reviewProgram,
        type: ActionTypes.REQUEST_REVIEW_TEMPLATES
    });

    static receiveReviewTemplates = ({reviewTemplates}) => ({
        reviewTemplates,
        type: ActionTypes.RECEIVE_REVIEW_TEMPLATES
    });

    static requestReviewQuestions = ({reviewTemplateId, reviewProgram}) => ({
        reviewTemplateId,
        reviewProgram,
        type: ActionTypes.REQUEST_REVIEW_QUESTIONS
    });

    static receiveReviewQuestions = (reviewQuestions) => ({
        reviewQuestions,
        type: ActionTypes.RECEIVE_REVIEW_QUESTIONS
    });

    static requestReviewTasks = ({reviewTemplateId, reviewProgram}) => ({
        reviewTemplateId,
        reviewProgram,
        type: ActionTypes.REQUEST_REVIEW_TASKS
    });

    static receiveReviewTasks = (reviewQuestions) => ({
        reviewQuestions,
        type: ActionTypes.RECEIVE_REVIEW_TASKS
    });



  static requestComments = ({nextPageUrl}) => ({
      nextPageUrl,
      type: ActionTypes.REQUEST_COMMENTS
  });

  static receiveFeed = ({nextPageUrl, paginatedPosts}) => {
      return {
          nextPageUrl,
          paginatedPosts,
          type: ActionTypes.RECEIVE_FEED
      }
  };

  static receiveComments = ({feedIndex, nextPageUrl, paginatedComments}) => {
      return {
          feedIndex,
          nextPageUrl,
          paginatedComments,
          type: ActionTypes.RECEIVE_COMMENTS
      }
  };

  static requestPostUserReaction = ({feedIndex, reactionType, postId}) => {
      return {
          feedIndex,
          postId,
          reactionType,
          type: ActionTypes.REQUEST_POST_USER_REACTION
      }
  };

  static requestCommentUserReaction = ({feedIndex, commentIndex, commentId, reactionType}) => {
      // NOTE: right as of now reactionType for a comment is also LIKE
      return {
          feedIndex,
          commentIndex,
          commentId,
          reactionType,
          type: ActionTypes.REQUEST_COMMENT_USER_REACTION
      }
  };

  static receivePostUserReaction = ({feedIndex, post, feedId}) => {
      return {
          feedIndex,
          feedId,
          post,
          type: ActionTypes.RECEIVE_POST_USER_REACTION
      }
  };

  static receiveCommentUserReaction = ({feedIndex, commentIndex, comment, commentId}) => {
      return {
          feedIndex,
          commentId,
          commentIndex,
          comment,
          type: ActionTypes.RECEIVE_COMMENT_USER_REACTION
      }
  };

  static requestComment = ({feedIndex, text, postId}) => {
      return {
          feedIndex,
          postId,
          text,
          type: ActionTypes.REQUEST_COMMENT
      }
  };

  static receiveComment = ({feedIndex, comment, postId}) => {
      return {
          feedIndex,
          postId,
          comment,
          type: ActionTypes.RECEIVE_COMMENT
      }
  };
}
