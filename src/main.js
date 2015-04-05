'use strict';
import React  from 'react';
import Logger  from './utils/functions/Logger.js';

Logger.info("hello");

React.render(
	<h2 children="moke" />,
	document.getElementById('example')
);
