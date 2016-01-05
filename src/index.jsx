import React from 'react'; //eslint-disable-line
import ReactDOM from 'react-dom';
import VisComponent from './components/viscomponent/viscomponent.jsx';

import '../index.html';

// This will render out an an example of viscomponent
import sampleData from '../data/sample_data';

var config = {};
var data = sampleData;

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    <VisComponent
      config={config}
      data={data}
    />,
    document.querySelector("#main"));
});
