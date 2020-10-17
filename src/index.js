import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import {sellers, items} from './data';

const rootElement = document.getElementById('root');

ReactDOM.render(<App sellers={sellers} items={items} />, rootElement);
