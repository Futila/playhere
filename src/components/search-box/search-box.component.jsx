import React from 'react';


import './search-box.styles.css';
import CustomButton from '../custom-button/custom-button.component';

const SearchBox = ({ handleSubmit, handleInputChange, handleRadioChange, placeholder,  }) => {
  return (
    <div className="search-box">
      <form onSubmit={handleSubmit}>
        <input
          required
          className="search"
          type="search"
          placeholder={placeholder}
          onChange={handleInputChange}
        />
        <CustomButton textButton="pesquisar"/>
        <fieldset className="input-options" onChange={handleRadioChange}>
          <label>
            <input name="options" value="album" type="radio" />
            <span>ALBUM</span>
          </label>
          <label>
            <input name="options" value="artist" type="radio" />
            <span>ARTISTA</span>
          </label>
          <label>
            <input name="options" value="music-title" type="radio" />
            <span>TÍTULO DA MÚSICA</span>
          </label>
        </fieldset>
      </form>
    </div>
  )
}

export default SearchBox;