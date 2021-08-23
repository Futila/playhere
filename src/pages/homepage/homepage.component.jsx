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
            searchText: '',
            searchBy: '',
            datas: []
        }
    };

    async componentDidMount() {

        const response = await api.get("/chart/0/tracks");
        console.log(response);
        this.setState({ datas: response.data.data });
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        switch (this.state.searchBy) {
            case 'album':
                const responseAlbum = await api.get(`search/?q=album:${this.state.searchText}`);
               this.setState({datas: responseAlbum.data.data});
                break;

            case 'artist':
               const responseArtist = await api.get(`search/?q=artist:${this.state.searchText}`);
               this.setState({datas: responseArtist.data.data});
               break;

            case 'music-title':
                const responseTrack = await api.get(`search/?q=track:${this.state.searchText}`);
               this.setState({datas: responseTrack.data.data});
                break;

            default:
                break;
        }

    }
    handleInputChange = (event) => {
        this.setState({ searchText: event.target.value });
    }
    handleRadioChange = (event) => {
        this.setState({ searchBy: event.target.value })
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
                    tracks={this.state.datas}
                    textButton="Add"
                />

            </div>
        )
    }
}
const mapStateToProps = state => ({
    tracks: state.tracks.track_list
});

const mapDispatchToProps = dispatch => ({
    AddToFavorite: item => dispatch(addItem(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
