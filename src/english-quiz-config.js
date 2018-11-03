import AWS from 'aws-sdk';
export const endpoints = {
  submitAnswers: 'https://4drp61oon0.execute-api.ap-northeast-1.amazonaws.com/EnglishQuizDeployStage/checkAnswers',
};

AWS.config.region = 'ap-northeast-1'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: 'ap-northeast-1:512a49fe-9ebe-4229-adbd-2c943019c0f3',
});

export const dynamoConfig = {
  apiVersion: '2012-08-10',
  endpoint: 'https://dynamodb.ap-northeast-1.amazonaws.com',
  accessKeyId: 335323568344,
  region: AWS.config.region,
  credentials: AWS.config.credentials,
};