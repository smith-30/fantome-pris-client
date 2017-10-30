import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './containers/games/App';
import About from './components/About';

export default (
	<Switch>
    // middlewareで整合性判定したい
		{/* <Route path="/" component={FilterableTable} /> */}
    <Route path="/games" component={App} />
		<Route path="/about" component={About} />
	</Switch>
);
