import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { filterTable } from '../actions';
import ProductTable from '../components/ProductTable';
import { filterableTable } from '../styles/filterableTable.scss';

const ws = new WebSocket('ws://localhost:1323/api/v1/games/ws/event', [1]);

ws.onopen = () =>  {
    console.log('Connected');
};

ws.onmessage = (evt) => {
    const out = document.getElementById('output');
    out.innerHTML += evt.data + '<br>';
};

setInterval(() => {
    ws.send(
      JSON.stringify({
          number: 1
      })
    );
}, 1000);

const FilterableTable = ({ filter, onFilter }) => {
    let input;

    return (
        <div className={filterableTable}>
            <input
                value={filter}
                ref={node => {input = node;}}
                onChange={() => onFilter(input.value)} />

            <ProductTable filter={filter} />
        </div>
    );
};

FilterableTable.propTypes = {
    filter: PropTypes.string,
    onFilter: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        filter: state.filter
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFilter: filterText => dispatch(filterTable(filterText))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterableTable);
