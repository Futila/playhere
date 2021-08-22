import React from 'react';
import { connect } from 'react-redux';
import api from '../../services/api';
import axios from 'axios';

import SearchBox from '../../components/search-box/search-box.component';
import CardMusic from '../../components/card-music/card-music.component';

import { addItem } from '../../redux/favorites/favorites.actions';

import './homepage.styles.css';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchText: '',
            searchBy:'', 
            datas:[]
        }
    };

    async componentDidMount() {

        const response = await api.get("/chart/0/tracks");
        console.log(response);
        this.setState({datas: response.data.data});
    }

    handleSubmit = async  (event) => {
        event.preventDefault();
        console.log(this.state.searchText, this.state.searchBy);
        const constrain = "album";
        const query="eminem"

        const res = await api.get(
            `search/${constrain}?q=:${query}&order=RANKING&limit=10`
          )
          const { data } = res.data
          console.log(data);

    }
    handleInputChange = (event) => {
        this.setState({ searchText: event.target.value });
    }
    handleRadioChange = (event) => {
        this.setState({searchBy: event.target.value})
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

const mapDispatchToProps = dispatch =>({
    AddToFavorite: item => dispatch(addItem(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
