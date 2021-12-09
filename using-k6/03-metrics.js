import http from 'k6/http';

export default function () {
  const res = http.get('http://httpbin.org');
  console.log('Response time was ' + String(res.timings.duration) + ' ms');
}