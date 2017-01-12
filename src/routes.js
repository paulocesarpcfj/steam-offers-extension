import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { Main } from 'components/Main';
import Offers from 'containers/Offers';

export default (
    <Route>
        <Route path="/" component={Main}>
            <IndexRoute component={Offers} />
        </Route>
    </Route>
);
