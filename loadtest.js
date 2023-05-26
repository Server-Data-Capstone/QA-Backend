import http from 'k6/http';
import { check } from 'k6';

export const options = {
  vus: 1,
  duration: '20s',
};

export default function () {
  const res = http.get('http://localhost:3000/qa/questions?product_id=999969');
  check(res, {
    'is status 200': (r) => r.status === 200
  });
}