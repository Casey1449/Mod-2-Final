import React from 'react';
import { render } from 'react-dom';
import App from './components/App.js';

require('./styles.css');

render(<App />, document.getElementById('application'));
