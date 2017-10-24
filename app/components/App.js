import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import { Link } from 'react-router-dom';

// import { footer } from '../styles/footer.scss';
import Routes from '../routes';

const App = () =>
    <MuiThemeProvider>
        {/* <div>
            <h1>Filter table</h1> */}
            { Routes }
            {/* <footer className={footer}>
                <Link to="/">Filterable Table</Link>
                <Link to="/about">About</Link>
                <Link to="/games">About</Link>
            </footer> */}
        {/* </div> */}
    </MuiThemeProvider>;

export default App;
