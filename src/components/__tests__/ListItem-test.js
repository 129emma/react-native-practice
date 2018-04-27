import React from 'react';
import renderder from 'react-test-renderer';

import ListItem from '../ListItem/ListItem';

it('renders ListItem using Snapshots', () => {
    const listItem = renderder.create(<ListItem />).toJSON();
        expect(listItem).toMatchSnapshot();
});

