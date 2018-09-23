import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchOffers } from 'actions/offers';
import { OffersList } from 'components/OffersList';
import { Loading } from 'components/Loading';

class Offers extends React.Component {
    constructor(props) {
        super(props);

        this.state = { currentPage: 1 };

        this.trackScrolling = this.trackScrolling.bind(this);
    }
    componentDidMount() {
        this.props.fetchOffers(this.state.currentPage);
    }

    trackScrolling(e) {
        const isBottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;

        if (isBottom) {
            this.setState({ currentPage: this.state.currentPage + 1 }, () => {
                this.props.fetchOffers(this.state.currentPage);
            });
        }
    }

    render() {
        return (
            <div className="infiniteScroll" onScroll={this.trackScrolling}>
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
