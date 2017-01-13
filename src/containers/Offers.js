import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchOffers } from 'actions/offers';
import { OffersList } from 'components/OffersList';
import { Loading } from 'components/Loading';

class Offers extends React.Component {
    componentDidMount() {
        this.props.fetchOffers();
    }

    render() {
        return (
            <div>
                <Loading loading={this.props.offers.isLoading} />
                <OffersList offers={this.props.offers.items} />
            </div>
        );
    }
}

Offers.propTypes = {
    offers: PropTypes.object,
    fetchOffers: PropTypes.func,
};

const mapStateToProps = ({ offers }) => ({ offers });

export default connect(mapStateToProps, { fetchOffers })(Offers);
