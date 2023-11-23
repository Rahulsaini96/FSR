import { render } from 'preact'
import { App } from './app.jsx'
import './index.css'
import Mixpanel from 'mixpanel-browser';
Mixpanel.init('e764a1abd14aab1186ef0079f0ecc77e');
render(<App />, document.getElementById('app'))
