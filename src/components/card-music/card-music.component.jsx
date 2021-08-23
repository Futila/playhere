import React from 'react';
import ReactAudioPlayer from 'react-audio-player';


import CustomButton from '../custom-button/custom-button.component';



import './card-music.styles.css';

const CardMusic = ({ tracks, textButton, handleOnclickButton }) => {

    return (
        <div className="card-music">
            {
                tracks.map(track => {
                    const { 
                        album: {
                            cover_medium: coverImage,
                            title: albumTitle,
                        },
                        artist: { name: artistName },
                        title,
                        duration,
                        link,
                        preview,
                    } = track;

                    return (
                        <div key={track.id} className="music-item">
                            <img src={coverImage} alt="" />
                            <div className="music-details">
                                <strong>Album: {albumTitle}</strong>
                                <strong>Track: {title}</strong>
                                <h4>Singer: {artistName}</h4>
                                <h4>Duração: {duration} min</h4>

                                <ReactAudioPlayer
                                    src={preview}
                                    controls
                                />
                                <div className="deezer-favourite">
                                    <a href={link} target="_blank" rel="noopener noreferrer">Ouvir no Deezer</a>
                                    <CustomButton onClick={()=>handleOnclickButton(track)} textButton={textButton} />
                                </div>

                            </div>
                        </div>
                    )
                })
            }
        </div>
    );

}








export default CardMusic;