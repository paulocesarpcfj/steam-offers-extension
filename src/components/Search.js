import React, { PropTypes } from 'react';
import { DebounceInput } from 'react-debounce-input';

export const Search = props => (
    <article className="search">
        <DebounceInput
            minLength={3}
            debounceTimeout={300}
            onChange={e => props.handleSearch(e.target.value)}
        />
    </article>
);

Search.propTypes = {
    loading: PropTypes.bool,
    handleSearch: PropTypes.func,
};
