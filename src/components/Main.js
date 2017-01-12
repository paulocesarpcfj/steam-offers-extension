import React, { PropTypes } from 'react';

export const Main = (props) => (
    <div className="main">
        <header></header>

        <section className="content">
            {props.children}
        </section>
    </div>
);

Main.propTypes = {
    children: PropTypes.any,
};
