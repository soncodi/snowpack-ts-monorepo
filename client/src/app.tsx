import * as React from 'react';
import { data } from '@soncodi/common';

console.log('start client', data);

export const App = () => (
  <div>app {Date.now()} {data}</div>
);
