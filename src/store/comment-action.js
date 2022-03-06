import { commentActions } from "./index";
import { notificationActions } from "./index";

// export const fetchCommentData = () => {
//     return async (dispatch) => {
//         const fetchData = async () => {
//             const response = await fetch('https://react-quotes-comments-default-rtdb.europe-west1.firebasedatabase.app/comments.json');
        
//             if(!response.ok) {
//                 console.log('Could not fetch comment data!');
//                 throw new Error('Could not fetch comment data!');
//             }
//             const data = await response.json();
//             return data;
//         }

//         try{
//             const commentData = await fetchData();
//             const loadedComments = [];
//             console.log(commentData)
            
//             for(const key in commentData) {
//                 loadedComments.push({
//                     id: key,
//                     commentText: commentData[key].commentText,
//                 })
//             }

//             dispatch(
//                 commentActions.replaceComments(loadedComments || [])
//                     )
//         } catch(err) {
//             console.log(err);
//             dispatch(notificationActions.changeNotification({
//                 status: 'error',
//                 text: 'Fetching data failed'
//             }))
//         }
//     } 
// }

export const sendCommentData = (comment) => {
    return async (dispatch) => {
        dispatch(notificationActions.changeNotification({
            status: 'loading',
            text: 'Sending data...'
        }))
        const sendRequest = async () => {
            const response = await fetch(`https://react-quotes-comments-default-rtdb.europe-west1.firebasedatabase.app/comments/${comment.quoteId}.json`, {
                method: 'POST',
                body: JSON.stringify({
                    comment: comment.commentText,
                    id: comment.id
                }),
                headers: {
                    'Content-Type': 'application/json',
                  },
            });
        
            if(!response.ok) {
            console.log('Could not send comments data!');
            throw new Error('Could not send comments data!');
            }
        }

        try {
            await sendRequest();
            console.log('success')
                dispatch(notificationActions.changeNotification({
                status: 'success',
                text: 'Data successfully sent!'
            }))
        } catch(err) {
            console.log('error')
                dispatch(notificationActions.changeNotification({
                status: 'error',
                text: 'Sending data failed'
            }))
        }
    }
}