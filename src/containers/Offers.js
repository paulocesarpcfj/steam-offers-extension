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
        this.isBottom = this.isBottom.bind(this);
    }
    componentDidMount() {
        this.props.fetchOffers(this.state.currentPage);

        document.addEventListener('scroll', this.trackScrolling);
    }

    componentWillUnmount() {
      document.removeEventListener('scroll', this.trackScrolling);
    }

    isBottom(el) {
        return el.getBoundingClientRect().bottom <= window.innerHeight;
    }

    trackScrolling() {
        const wrappedElement = document.getElementById('main');

        if (this.isBottom(wrappedElement)) {
            this.setState({ currentPage: this.state.currentPage + 1 }, () => {
                this.props.fetchOffers(this.state.currentPage);
                console.log('header bottom reached');
            });
        }
    };

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
