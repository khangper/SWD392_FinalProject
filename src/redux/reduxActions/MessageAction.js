import {
    FETCH_CHAT_MESSAGES_REQUEST,
    FETCH_CHAT_MESSAGES_SUCCESS,
    FETCH_CHAT_MESSAGES_FAILURE
} from "../../constant/data"

export const fetchChatMessagesRequest = () => ({
    type: FETCH_CHAT_MESSAGES_REQUEST
});

export const fetchChatMessagesSuccess = (messages) => ({
    type: FETCH_CHAT_MESSAGES_SUCCESS,
    payload: messages
});

export const fetchChatMessagesFailure = (error) => ({
    type: FETCH_CHAT_MESSAGES_FAILURE,
    payload: error
});
