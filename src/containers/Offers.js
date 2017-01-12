import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchOffers } from 'actions/offers';
import { OffersList } from 'components/OffersList';

class Offers extends React.Component {
    componentDidMount() {
        this.props.fetchOffers();
    }

    render() {
        return (
            <OffersList offers={this.props.offers.items} />
        );
    }
}

Offers.propTypes = {
    offers: PropTypes.object,
    fetchOffers: PropTypes.func,
};

const mapStateToProps = ({ offers }) => ({ offers });

export default connect(mapStateToProps, { fetchOffers })(Offers);
