import React from 'react';

function Form() {
    return (
    <form className="form">
        <label htmlFor="search" className={"form__input__label"}>Write artist or song</label>
        <input id="search" type="text" placeholder={"search"} className={"search__input inputStyle"}/>
        <label htmlFor="search" className={"form__input__label"}>Choose type</label>
        <select className={"form__select inputStyle"}>
            <option value="chords">chords</option>
            <option value="bass">bass</option>
            <option value="quitar">quitar</option>
            <option value="player">player</option>
        </select>
        <input type="submit" className="form__submit inputStyle" value={"SEARCH"}/>
    </form>
    )
}
export default Form;