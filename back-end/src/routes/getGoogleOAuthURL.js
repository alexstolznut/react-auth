import { getGoogleOAuth } from "../util/getGoogleOAuth";

export const getGoogleOAuthURL = {
    path: '/auth/google/url',
    method: 'get',
    handler: (req, res) => {
        const url = getGoogleOAuth();
        res.status(200).json({ url });
    }
};