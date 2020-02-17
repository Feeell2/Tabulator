import React from 'react';
const HandleTabTypes=(items)=>{
    return(
    items.map(tabType=>

            <option value={tabType}>{tabType}</option>
        ))

};
function Tab(props) {

    return(
        <div className={"tab inputStyle"}>
            <h3 className={"tab_titleSongs"}>{props.title}</h3>
            <h4 className={"tab_artist"}>{props.nameArtist}</h4>
            <form>
                <label htmlFor="tabTypes" className={"tabs__select-label"}>Choose your tab types</label>
                <select id={"tabTypes"} className={"form__select inputStyle"}>
                {HandleTabTypes(props.TabTypes)}
                </select>
            </form>
            <p className={"tab_link"}>link</p>
        </div>
    )

}
export default Tab