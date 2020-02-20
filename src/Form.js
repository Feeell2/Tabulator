import React from 'react';

function Form(props) {
    return (
    <form className="form">
        <label htmlFor="search" className={"form__input__label"}>find a tab for your song
        </label>
        <input name={"search"} onChange={props.change} id="search" type="text" placeholder={"Write  artist or song"} className={"search__input inputStyle"}/>
        <label htmlFor="tab" className={"form__input__label"}>Choose type</label>
        <select name={"tab"} onChange={props.change} className={"form__select inputStyle"}>
            <option value="CHORDS">chords</option>
            <option value="TEXT_BASS_TAB">bass</option>
            <option value="TEXT_GUITAR_TAB">quitar</option>
            <option value="PLAYER">player</option>
        </select>
        <input type="submit" onClick={props.click} className="form__submit inputStyle" value={"SEARCH"}/>
    </form>
    )
}
export default Form;