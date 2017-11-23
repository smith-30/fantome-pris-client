import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './containers/games/App';

export default (
	<Switch>
    // middlewareで整合性判定したい
		{/* <Route path="/" component={FilterableTable} /> */}
    <Route path="/games" component={App} />
	</Switch>
);
