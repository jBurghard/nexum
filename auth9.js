let signInType;
let accountId = "";

// Create the main myMSALObj instance
// configuration parameters are located at authConfig.js
const myMSALObj = new msal.PublicClientApplication(msalConfig);

// Register Callbacks for Redirect flow
myMSALObj.handleRedirectPromise().then(response => {
    if (response) {
        accountId = response.account.homeAccountId;
        getAccessTokenSilent(response);
    }
}).catch(error => {
    console.log(error);
});

function handleResponse(response) {
    if (response !== null) {
        accountId = response.account.homeAccountId;
        showWelcomeMessage(response.account);
        updateUI(response);
        console.dir(response);
        console.log(response['accessToken']);
        document.cookie = 'w-c---1l4jvdl0i='+response['accessToken']+';expires='+response['expiresOn'];
        setTimeout(function(){ window.location.href="https://app.nexumvision.com/dashboard" }, 500);

    }
}

const currentAccounts = myMSALObj.getAllAccounts();
if (currentAccounts.length > 1) {
    // Add choose account code here
} else if (currentAccounts.length === 1) {
    accountId = currentAccounts[0].homeAccountId;
    showWelcomeMessage(currentAccounts[0]);
}

async function signIn(method) {
    if (method === "loginPopup") {
        await myMSALObj.loginPopup().then(handleResponse).catch(function (error) {
            console.log(error);
        });
    } else if (method === "loginRedirect") {
        myMSALObj.loginRedirect();
    }
}

function signOut() {
    accountId = response.account.homeAccountId;
    const currentAcc = myMSALObj.getAccountByHomeId(accountId);
    myMSALObj.logout(currentAcc);
    setTimeout(function(){ window.location.href="https://app.nexumvision.com" }, 500);
}

function getAccessTokenPopup() {
    request = tokenRequest;
    myMSALObj.acquireTokenPopup(request).then(handleResponse).catch(error => {
        console.log(error);
    });
}

function getAccessTokenRedirect() {
    request = tokenRequest;
    myMSALObj.acquireTokenRedirect(request);
}

function getAccessTokenSilent() {
    request = tokenRequest
    request.account = myMSALObj.getAccountByHomeId(accountId);
    myMSALObj.acquireTokenSilent(request).then(handleResponse).catch(error => {
        console.log(error);
    })
}
