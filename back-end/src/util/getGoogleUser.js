import axios from 'axios';
import { oAuthClient } from './oAuthClient';

const getAccessTokenAndBearerURl = ({accessToken}) => `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${accessToken}`

export const getGetGoogleUser = async ({code}) => {
    const  { tokens } = await oAuthClient.getToken(code);
    const response = await axios.get(
        getAccessTokenAndBearerURl({accessToken: tokens.access_token}),
        { headers: {Authorization: `Bearer ${tokens.id_token}`}},
    )

    return response.data;
}