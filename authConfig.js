// Config object to be passed to Msal on creation
const msalConfig = {
    auth: {
        clientId: "c14b4f3f-4412-4b0f-abbd-b79ac40f02e9",
        authority: "https://platformnexumvision.b2clogin.com/platformnexumvision.onmicrosoft.com/B2C_1_signupsignin1/",
        knownAuthorities: ["platformnexumvision.b2clogin.com"],
    },
    cache: {
        cacheLocation: "sessionStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    }
};

// Add here scopes for id token to be used at MS Identity Platform endpoints.
const tokenRequest = {
    scopes: ["c14b4f3f-4412-4b0f-abbd-b79ac40f02e9"],
    forceRefresh: false // Set this to "true" to skip a cached token and go to the server to get a new token
};