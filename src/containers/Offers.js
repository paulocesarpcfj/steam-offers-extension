import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchOffers } from 'actions/offers';
import { OffersList } from 'components/OffersList';
import { Loading } from 'components/Loading';
import { Search } from 'components/Search';

class Offers extends React.Component {
    constructor(props) {
        super(props);

        this.state = { currentPage: 1, searchFor: false };

        this.trackScrolling = this.trackScrolling.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    componentDidMount() {
        this.props.fetchOffers(this.state.currentPage, this.state.searchFor);
    }

    trackScrolling(e) {
        const isBottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;

        if (isBottom) {
            this.setState({ currentPage: this.state.currentPage + 1 }, () => {
                this.props.fetchOffers(this.state.currentPage, this.state.searchFor);
            });
        }
    }

    handleSearch(term) {
        this.setState({ searchFor: term, currentPage: 1 }, () => {
            this.props.fetchOffers(this.state.currentPage, this.state.searchFor);
        });
    }

    render() {
        return (
            <div className="infiniteScroll" onScroll={this.trackScrolling}>
                <Search handleSearch={this.handleSearch} />

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
