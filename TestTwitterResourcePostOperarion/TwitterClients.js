let SL_TWITTER = require('slappforge-sdk-twitter');
const twitter = new SL_TWITTER.Twitter();
module.exports = {

        'twClient1': twitter.createClient({
            consumer_key: process.env.TWITTER_twClient1_consumerKey,
            consumer_secret: process.env.TWITTER_twClient1_consumerSecret,
            access_token: process.env.TWITTER_twClient1_accessToken,
            access_token_secret: process.env.TWITTER_twClient1_accessTokenSecret
        }),
};