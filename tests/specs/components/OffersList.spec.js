import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { OffersList } from 'components/OffersList';

const data = [
    {
        link: "http://store.steampowered.com/app/317250/?snr=1_7_7_204_150_1",
        image: "http://cdn.edgecast.steamstatic.com/steam/apps/317250/capsule_sm_120.jpg?t=1479751485",
        title: "Airscape - The Fall of Gravity",
        discount: "-90%",
        oldPrice: "R$ 4,29",
        newPrice: "R$ 0,42"
    }
]

describe('OffersList - <OffersList />', () => {
    it('should render the view component', () => {
        const wrapper = shallow(<OffersList offers={data} />);
        expect(wrapper.find('.offers-list')).to.have.length(1);
    });
})
