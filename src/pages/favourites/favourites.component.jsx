import React from 'react';
import { connect } from 'react-redux';
import api from '../../services/api';

import SearchBox  from '../../components/search-box/search-box.component';
import CardMusic from '../../components/card-music/card-music.component';

import { removeItem } from '../../redux/favorites/favorites.actions';

import './favourites.styles.css';


class Favourites extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            text: ''
        }
    };

    async componentDidMount(){
        const response = await api.get('/chart/0/tracks', );
        console.log(response.data);
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        console.log(this.state.text);

    }
    handleInputChange = (event) =>{
        this.setState({text:event.target.value});
    }
    handleRadioChange = (event)=>{
        console.log(event.target.value);
    }
    render(){
        return (
            <div className="homepage">
                <SearchBox 
                    handleSubmit={this.handleSubmit}
                    handleInputChange={this.handleInputChange}
                    handleRadioChange={this.handleRadioChange} 
                    placeholder="Pesquise aqui"
                />  
                <CardMusic 
                handleOnclickButton={this.props.removeFromFavorites}
                tracks={this.props.tracks} 
                textButton="Remove"/>   
            </div>
        )
    }
}


const mapStateToProps = state => ({
    tracks: state.favorites.favoriteItems
});

const mapDispatchToProps = dispatch =>({
    removeFromFavorites: item => dispatch(removeItem(item))
});
export default connect(mapStateToProps, mapDispatchToProps)(Favourites);
