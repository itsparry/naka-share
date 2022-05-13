import { SERVER_ROOT } from "./urls";


export const getContent = (postId) => {
    return fetch(`${SERVER_ROOT}/${postId}`)
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            return [];
        });
};