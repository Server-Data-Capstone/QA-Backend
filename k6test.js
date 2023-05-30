import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  stages: [
    { duration: '1s', target: 3000 },
    { duration: '28s', target: 3000 },
    { duration: '1s', target: 3000 },
  ],
};

export default function () {
  const getQuestions = () => {
  let testId = Math.floor(Math.random() * (1000011 - 900009)) + 900009;
  const res = http.get(`http://localhost:3000/qa/questions?product_id=${testId}`,
    {tags: {name: 'productId'}});
  check(res, {
    'is status 200': (r) => r.status === 200
  });
  sleep(1);
};

const getAnswers = () => {
  let testId = Math.floor(Math.random() * (3518963 - 3167066)) + 3167066;
  const res = http.get(`http://localhost:3000/qa/answers?id=${testId}`,
    {tags: {name: 'Id'}});
  check(res, {
    'is status 200': (r) => r.status === 200
  });
  sleep(1);
}

// getQuestions();
getAnswers();

}