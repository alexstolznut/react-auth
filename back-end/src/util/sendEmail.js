import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SEND_GRID_API_KEY);

export const sendEmail = ({ to, from, subject, text, html}) => {
    const msg = { to, from, subject, text, html};
    return sendgrid.send(msg);
}