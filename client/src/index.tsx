import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './app';

ReactDOM.render(<App />, document.getElementById('root'));

if (import.meta.hot) {
  import.meta.hot.accept();
}
