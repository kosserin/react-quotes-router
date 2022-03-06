import { quoteActions } from "./index";
import { notificationActions } from "./index";

export const fetchQuoteData = () => {
    return async (dispatch) => {
        dispatch(notificationActions.changeNotification({
            status: 'loading',
            text: 'Fetching data...'
        }))
        const fetchData = async () => {
            const response = await fetch('https://react-quotes-comments-default-rtdb.europe-west1.firebasedatabase.app/quotes.json');
        
            if(!response.ok) {
                console.log('Could not fetch cart data!');
                throw new Error('Could not fetch cart data!');
            }
            const data = await response.json();
            return data;
        }

        try{
            const quoteData = await fetchData();
            const loadedQuotes = [];

            for(const key in quoteData) {
                loadedQuotes.push({
                    id: key,
                    text: quoteData[key].text,
                    author: quoteData[key].author,
                })
            }
            dispatch(notificationActions.changeNotification({
                status: 'success',
                text: 'Data successfully fetched'
            }))

            dispatch(
                quoteActions.replaceQuotes(loadedQuotes || [])
                    )
        } catch(err) {
            console.log(err);
            dispatch(notificationActions.changeNotification({
                status: 'error',
                text: 'Fetching data failed'
            }))
        }
    } 
}

export const sendQuoteData = (quotes) => {
    return async (dispatch) => {
        dispatch(notificationActions.changeNotification({
            status: 'loading',
            text: 'Sending data...'
        }))
        const sendRequest = async () => {
            const response = await fetch('https://react-quotes-comments-default-rtdb.europe-west1.firebasedatabase.app/quotes.json', {
                method: 'PUT',
                body: JSON.stringify(quotes)
            });
        
            if(!response.ok) {
            console.log('Could not send quotes data!');
            throw new Error('Could not send quotes data!');
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