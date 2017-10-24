import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import FilterableTable from './containers/FilterableTable';
import Game from './containers/games/Game';
import About from './components/About';

export default (
	<Switch>
    // middlewareで整合性判定したい
		{/* <Route path="/" component={FilterableTable} /> */}
    <Route path="/games" component={Game} />
		<Route path="/about" component={About} />
	</Switch>
);
