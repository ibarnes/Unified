import { Amplify } from 'aws-amplify';

const amplifyConfig = {
    Auth: {
        region: '<your-region>',
        userPoolId: '<your-user-pool-id>',
        userPoolWebClientId: '<your-user-pool-client-id>',
    },
    API: {
        endpoints: [
            {
                name: 'apiName',
                endpoint: '<your-api-endpoint>',
                region: '<your-region>',
            },
        ],
    },
};

Amplify.configure(amplifyConfig);

export default amplifyConfig;