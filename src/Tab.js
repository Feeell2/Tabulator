import React from 'react';


function Tab(props){


const displayNameTab=(tabType)=>{
    switch (tabType) {
        case "PLAYER":
            return "PLAYER";
            break;
        case "TEXT_GUITAR_TAB":
            return "GUITAR";
            break;
        case "CHORDS":
            return "CHORDS";
            break;
        case "TEXT_BASS_TAB":
            return "BASS";
            break;
        default:
            return "empty value"

    }

};

const DisplayTabTypes=(TabTypes)=> {
    let number = 0;
    return (
        TabTypes.map(tabType =>
            <li className={"tab_availableTab"} key={number++}>{displayNameTab(tabType)}</li>
        ))
};
const getLink=(song,nameArtist)=>{
    song=props.title.split(' ').join('+');
    nameArtist=props.nameArtist.split(' ').join('+');
    return <a className={"tab_link"} href={`http://www.songsterr.com/a/wa/bestMatchForQueryString?s=${song}&a=${nameArtist}`} target={"_blank"} rel="noopener noreferrer">go to tab</a>
};
return(
        <div className={"tab inputStyle"}>
            <h3 className={"tab_titleSongs"}>{props.title}</h3>
            <h4 className={"tab_artist"}>{props.nameArtist}</h4>
            <h4 className={"tab_titleAvaible"}>Available Tablature Types:</h4>
            <ul className={"tab_list"}>
                {DisplayTabTypes(props.TabTypes)}
            </ul>



            {getLink(props.title,props.nameArtist)}
        </div>
    )




}

export default Tab