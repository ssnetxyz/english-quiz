import { endpoints, dynamoConfig } from '../../english-quiz-config'
import DynamoDB from 'aws-sdk/clients/dynamodb';
import axios from 'axios';

const db = new DynamoDB(dynamoConfig);


export function shuffle(array) {
  let counter = array.length;
  while (counter > 0) {
    const index = Math.floor(Math.random() * counter);
    counter--;
    const temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
}

export async function submitAnswers() {
  const response = await axios(endpoints.submitAnswers);
  console.log(response);

}

export async function getQuestions(QuizId) {
  const params = { Key: { 'QuizId': { S: QuizId }, }, TableName: 'Quiz' };
  const dbItem = await new Promise(resolve => {
    db.getItem(params, (err, data) => {
      if (err) { throw err; }
      resolve(data.Item);
    });
  });
  const quiz = DynamoDB.Converter.unmarshall(dbItem);
  return quiz.qs.map((q, i) => {
    const [type, ...items] = q
    return { id: i, type, items: shuffle(items) };
  });
}