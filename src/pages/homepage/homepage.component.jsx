import React from 'react';
import { connect } from 'react-redux';
import api from '../../services/api';

import SearchBox from '../../components/search-box/search-box.component';
import CardMusic from '../../components/card-music/card-music.component';

import { addItem } from '../../redux/favorites/favorites.actions';

import './homepage.styles.css';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        }
    };

    async componentDidMount() {

        console.log(this.props.tracks);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.text);

    }
    handleInputChange = (event) => {
        this.setState({ text: event.target.value });
    }
    handleRadioChange = (event) => {
        console.log(event.target.value);
    }
    render() {
        return (
            <div className="homepage">
                <SearchBox
                    handleSubmit={this.handleSubmit}
                    handleInputChange={this.handleInputChange}
                    handleRadioChange={this.handleRadioChange}
                    placeholder="Pesquise aqui"
                />

                <CardMusic
                    handleOnclickButton={this.props.AddToFavorite}
                    tracks={this.props.tracks}
                    textButton="Add"
                />

            </div>
        )
    }
}
const mapStateToProps = state => ({
    tracks: state.tracks.track_list
});

const mapDispatchToProps = dispatch =>({
    AddToFavorite: item => dispatch(addItem(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
