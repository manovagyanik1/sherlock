import {Actions} from './actions';
import Gen from './utils/gen';
import * as Constants from './utils/constants';

const errorFunc = (errorAction, dispatch) => (err) => {
	Gen.log(err);
	dispatch(Actions.decrementAPICount({}));
	dispatch(errorAction);
};

export const fetchReviewTemplate = ({reviewProgram, reviewTemplateId}) =>
    (dispatch) => {
        dispatch(Actions.requestReviewTemplate({reviewProgram, reviewTemplateId}));
        dispatch(Actions.incrementAPICount({}));
        const url = `${Gen.getBaseUrl()}/tasker/reviewprograms/${reviewProgram}/reviewtemplates/${reviewTemplateId}`;
        return fetch(url, Gen.getBodyAuthHeader())
            .then(response => response.json())
            .then((reviewTemplate) => {
                Gen.log(reviewTemplate);
                dispatch(Actions.decrementAPICount({}));
                dispatch(Actions.receiveReviewTemplate(reviewTemplate));
            }).catch(errorFunc(Actions.errorFeed, dispatch));
    };

export const fetchReviewTemplates = ({reviewProgram}) =>
    (dispatch) => {
        dispatch(Actions.requestReviewTemplates({reviewProgram}));
        dispatch(Actions.incrementAPICount({}));
        const url = `${Gen.getBaseUrl()}/tasker/reviewprograms/${reviewProgram}/reviewtemplates`;
        return fetch(url, Gen.getBodyAuthHeader())
            .then(response => response.json())
            .then((reviewTemplates) => {
                Gen.log(reviewTemplates);
                dispatch(Actions.decrementAPICount({}));
                dispatch(Actions.receiveReviewTemplates(reviewTemplates));
            }).catch(errorFunc(Actions.errorFeed, dispatch));
    };

export const fetchReviewQuestions = ({reviewTemplateId, reviewProgram}) =>
    (dispatch) => {
        dispatch(Actions.requestReviewQuestions({reviewProgram, reviewTemplateId}));
        dispatch(Actions.incrementAPICount({}));
        const url = `${Gen.getBaseUrl()}api/v1/reviewprograms/${reviewProgram}/reviewtemplates/${reviewTemplateId}/questions`;
        return fetch(url, Gen.getBodyAuthHeader())
            .then(response => response.json())
            .then((reviewQuestions) => {
                Gen.log(reviewQuestions);
                dispatch(Actions.decrementAPICount({}));
                dispatch(Actions.receiveReviewQuestions(reviewQuestions));
            }).catch(errorFunc(Actions.errorFeed, dispatch));
    };

export const fetchReviewTasks = ({reviewTemplateId, reviewProgram}) =>
    (dispatch) => {
        dispatch(Actions.requestReviewQuestions({reviewProgram, reviewTemplateId}));
        dispatch(Actions.incrementAPICount({}));
        const url = `${Gen.getBaseUrl()}api/v1/reviewprograms/${reviewProgram}/reviewtemplates/${reviewTemplateId}/tasks`;
        return fetch(url, Gen.getBodyAuthHeader())
            .then(response => response.json())
            .then((reviewQuestions) => {
                Gen.log(reviewQuestions);
                dispatch(Actions.decrementAPICount({}));
                dispatch(Actions.receiveReviewQuestions(reviewQuestions));
            }).catch(errorFunc(Actions.errorFeed, dispatch));
    };

// };
//
// export const fetchComments = ({feedIndex, nextPageUrl = null, postId}) => (dispatch) => {
//     // TODO: add pagination logic
// 	dispatch(Actions.requestComments({nextPageUrl}));
// 	dispatch(Actions.incrementAPICount({}));
//     const url = nextPageUrl ? `${Gen.getBaseUrl()}${nextPageUrl}` : `${Gen.getBaseUrl()}/v1/comments/${postId}`;
//     return Gen.getUserToken()
//         .then((token) => fetch(url, Gen.getBodyAuthHeader({token}))
//         .then(response => {
//             return response.json();
//         })
//         .then(paginatedComments => {
// 	Gen.log(paginatedComments);
// 	dispatch(Actions.decrementAPICount({}));
// 	dispatch(Actions.receiveComments({feedIndex, nextPageUrl, paginatedComments}));
// }))
//         .catch(errorFunc(Actions.errorComments, dispatch));
// };
//
// export const fetchCommentReaction = ({feedIndex, commentIndex, commentId, reactionType}) => (dispatch) => {
// 	dispatch(Actions.requestCommentUserReaction({feedIndex, commentIndex, commentId, reactionType}));
// 	dispatch(Actions.incrementAPICount({}));
// 	const url = `${Gen.getBaseUrl()}/v1/user-reaction`;
// 	const postData = {
// 		targetId: commentId,
// 		reaction: reactionType,
// 		type: 'COMMENT',
// 	};
//     return Gen.getUserToken()
//         .then((token) => fetch(url, Gen.getPostBodyAuthHeader({token, postData}))
//         .then(response => response.json())
//         .then(comment => {
// 	Gen.log(comment);
// 	dispatch(Actions.decrementAPICount());
// 	dispatch(Actions.receiveCommentUserReaction({feedIndex, commentIndex, commentId, comment}));
// }))
//         .catch(errorFunc(Actions.errorCommentUserReaction, dispatch));
// };
//
// export const fetchFeedReaction = ({feedIndex, feedId, reactionType}) => (dispatch) => {
// 	dispatch(Actions.requestPostUserReaction({feedIndex, feedId, reactionType}));
// 	dispatch(Actions.incrementAPICount({}));
// 	const url = `${Gen.getBaseUrl()}/v1/user-reaction`;
// 	const postData = {
// 		targetId: feedId,
// 		reaction: reactionType,
// 		type: Constants.CONTENT_TYPE.POST,
// 	};
//     return Gen.getUserToken()
//         .then((token) => fetch(url, Gen.getPostBodyAuthHeader({token, postData}))
//         .then(response => response.json())
//         .then(userReaction => {
// 	Gen.log(userReaction);
// 	dispatch(Actions.decrementAPICount());
// 	dispatch(Actions.receivePostUserReaction({feedIndex, feedId, userReaction}));
// }))
//         .catch(errorFunc(Actions.errorPostUserReaction(), dispatch));
// };
//
// export const fetchComment = ({feedIndex, postId, text}) => (dispatch) => {
// 	dispatch(Actions.requestComment({feedIndex, postId, text}));
// 	dispatch(Actions.incrementAPICount({}));
// 	const url = `${Gen.getBaseUrl()}/v1/comment`;
// 	const postData = {
// 		postId,
// 		text,
// 	};
//     return Gen.getUserToken()
//         .then((token) => fetch(url, Gen.getPostBodyAuthHeader({token, postData}))
//         .then(response => response.json())
//         .then(comment => {
// 	Gen.log(comment);
// 	dispatch(Actions.decrementAPICount());
// 	dispatch(Actions.receiveComment({feedIndex, postId, comment}));
// }))
//         .catch(errorFunc(Actions.errorComment(), dispatch));
// };