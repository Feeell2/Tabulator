import React from 'react';


class Tab extends React.Component{
constructor(props) {
    super(props);
    this.state={
        title:props.title,
        tabTypes:props.TabTypes,
        tabType:'',
        artist:props.nameArtist,
    };

}

displayNameTab=(tabType)=>{
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
    handleChangeTypes=(event)=>{
        const target=event.target;
        const name=target.name;

        this.setState({
            [name]:event.target.value
        })
    };
HandleTabTypes=()=> {

    let number = 0;
    return (
        this.state.tabTypes.map(tabType =>

            <option key={number++} value={tabType}>{this.displayNameTab(tabType)}</option>

        ))
}
getLink=(song,nameArtist,tabType)=>{
    song=song.split(' ').join('+');
    nameArtist=nameArtist.split(' ').join('+');
    if(tabType===""){
        return <a href={`http://www.songsterr.com/a/wa/bestMatchForQueryString?s=${song}&a=${nameArtist}`} target={"_blank"} rel="noopener noreferrer">TRY</a>

    }
    else{
        return <a href={`http://www.songsterr.com/a/wa/bestMatchForQueryString?s=${song}&a=${nameArtist}&track=${this.displayNameTab(tabType).toLowerCase()}`} target={"_blank"} rel="noopener noreferrer">TRY</a>

    }
}

render(){

    return(
        <div className={"tab inputStyle"}>
            <h3 className={"tab_titleSongs"}>{this.props.title}</h3>
            <h4 className={"tab_artist"}>{this.props.nameArtist}</h4>
            <form>
                <label htmlFor="tabTypes" className={"tabs__select-label"}>Choose your tab types</label>
                <select defaultValue={'empty'} name={"tabType"} id={"tabTypes"} onChange={this.handleChangeTypes} className={"form__select inputStyle"}>
                    <option disabled value={'empty'}  hidden/>
                    {this.HandleTabTypes(this.state.tabTypes)}
                </select>
            </form>
            {this.getLink(this.state.title,this.state.artist,this.state.tabType)}
        </div>
    )
}



}

export default Tab