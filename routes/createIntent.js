const dialogflow = require('dialogflow');
const JSON = {
    // JSON HERE
    
        "type": "service_account",
        "project_id": "faqchat-4bcc8",
        "private_key_id": "89680b52c42e87e1a5450ec74e9ab790ba41aab5",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCqzfaSXAQ1+qPm\ncg9ojHS7CwGszhmoR8CLqr5rei7hCuLh3ZH4psFjMd647ZA6Txu/KfprbjRLUZ6a\nwc/1SvMAFuTX6iz2uIk8rp8IDv/ZPxPsl2ikAUcjy50o34QR7J4NuXqKm7kLWCDx\nGxNpJsLthWtS+zwXlyriK5gcJLcD3AzCsHbIgr0ybk1JA07KSrG9w1a3EyKCaBB7\nzCdA4FTQMZVZjBFwmLwAya/2fs0QikxtzahWZ5kcR1ThT+nDEMUPa/uSoOu1AJuR\nRiAWW5w6n+ujDfbhoFNnULHcBB+gZX8cV3JATm99vA1SI/mAPihBMmkezeUFnb+A\nonCsu1yfAgMBAAECggEACcLpk4whfxNxTuTRddBV7EnNvhpG1xot3XPtnADVZKEV\npE9GxCbrjtRO/gYw1u3ZQ3/BQwB/I2RpVwwHUX862GEQK2xdRq0qX3oI6d7Jk/9w\nQqliHo7zVnVdgid7/PZAqViI5Odo/nmT45OZ9JZCT6BVwneyahRTX0ea7G86Ul5A\nit8R01dMFqnRUEf79J3q0HS3JNlSH1fU2jHnI5awmgVkcwREClTgs8v22WYv6nKD\nTZR+fzNcB6H3XQPPr7tNE2pR7PZt7Y+bFbqAIxHgN/oPP1h+xwwLoO6Uk4+fjNkF\n+sqZhw1r9yZXPdXa42Wr7mM4+8xuX8KZdLKr1QSe6QKBgQDZ+2o8lvQ5g1pGvK4u\nOfVxEhj9sIOAhfuXjhRROafkMtE/Wm6plpT2WvcmKCpV8EE4a8CC5ayEpP+dkNdn\nwwSkS9aJrOxw7t2UOaeRObv/sVOvqlg4ODirLsWw0iRQF2zvM2H2EFxvK7LECEsh\nbx5ARW9pOJX4iFCssQPKXKbzDQKBgQDImCOUpd4BBxs+tj0GOLBjmXmupNe+l9se\nVcOqSpIyzfzTkcmFo5KDULiy3BtfAnuQs0jPnOwgTgYnj5LbWhRbXBn0B/AhNUd/\nVEjsjwf2heN6hoqJ8KpjrjbwbvN177QdNAJaraU3DrepppCTTX6al8ugngMQOURL\n0oXUXH0TWwKBgQDIc0QsV3xabwnTRqq945pq0gOdNnaW9552rbbNQsG7PWfiZFyj\nIs/1A42GzySvRnITWjL7rAzLJZfR42HSDynzk7HDhPsglue36JTJHVheN0kHnxPl\nDv49nJM6mOO/qusHxC5vQnhd2sdXMXE1W6Nr4u4iymBO3buiMl2T90Om+QKBgQC7\n1wvqlPAxUjBHJ2w5uTgj7IIv8pk9FwLPg0x42N/Sx2Xr0Oc/R49ZfGuYwdi3vaFs\nPRb/o1jSX34P6biBw/awHq0HAa/xyOys5YZsTvwL9BCyme59gWptcaRsvdkqJU8q\n0ZsqwtSlnBiMuzdDWRwnM+IxBAamWJoFzpwX4owVZQKBgBeHFwJRgpEsTtUwlaNH\nStXRp2redGCHUA/bPtr8u/tZGe24HMrVlJYk2eghb3uOV3SZM4FgqnIG9+W8NJo6\njYP+xtfcEw3ngkBu+vl90rQbWoTTLMsDSmPJNHprgN/0RB7NyU1KEtKr0DoxHzkr\nP/aocj3G7YCHktta4GOK/9Me\n-----END PRIVATE KEY-----\n",
        "client_email": "dialogflow-uwcrim@faqchat-4bcc8.iam.gserviceaccount.com",
        "client_id": "112268643410524713038",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/dialogflow-uwcrim%40faqchat-4bcc8.iam.gserviceaccount.com"
      
      
  }// You can find your project ID in your Dialogflow agent settings
const projectId = 'faqchat-4bcc8'; //https://dialogflow.com/docs/agents#settings
module.exports = (req, res) => { 
//console.log(req.body); 
const IntentName = req.body.intentName;
const config = {
    credentials: {
        private_key: JSON.private_key,
        client_email: JSON.client_email
    }
}
const trainingPhrases = [
    {
        type: 'EXAMPLE',
        parts: [
            { 
                text: req.body.text1
            }
        ],
    },
    {
        type: 'EXAMPLE',
        parts: [
            { 
                text: req.body.text2
            }
        ],
    }
];

// Here we create Parameters
const parameter = {
    displayName: 'Parameter',
    entityTypeDisplayName: '@sys.any',
    value: 'Name of param',
}

// Here we create responses
const messageText = {
    text: [req.body.response]
};
// Instantiates the Intent Client
const intentsClient = new dialogflow.IntentsClient(config);
const agentPath = intentsClient.projectAgentPath(projectId);

trainingPhrases.forEach(trainingPhrase => trainingPhrases.push(trainingPhrase)) ;

const message = {
  text: messageText,
};

const intent = {
  displayName: IntentName,
  trainingPhrases: trainingPhrases,
  messages: [message],
  parameters: [parameter],
};

const createIntentRequest = {
  parent: agentPath,
  intent: intent,
};

// Create the intent
intentsClient.createIntent(createIntentRequest)
  .then(responses => res.send({"Message":`Intent ${responses[0].name} created`}));

}
 return module;