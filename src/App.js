import React from 'react';
import './css/App.css';
import Logo from "./photo/logo.png";
import Form from "./Form";
import { css } from "@emotion/core";
import Tab from "./Tab";
import BeatLoader from "react-spinners/BeatLoader";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: #2BA4C6;
`;
class App extends React.Component{
constructor(props) {
    super(props);
    this.state={
        search:"",
        tab:"CHORDS",
        items:[],
        loading: false
    };
}
handleChange=(event)=>{
    const target=event.target;
    const name=target.name;

    this.setState({
        [name]:event.target.value
    })
};
handleDateSearch=(e)=>{
    if(this.state.search==="") return alert("Write artist or song") ;
    this.setState({
        loading:true
    });
    e.preventDefault();
    const url=`https://www.songsterr.com/a/ra/songs.json?pattern=${this.state.search}`;
    fetch(url)
        .then(response=>{
            console.log(response);
            if (response.ok){
                return response.json();
            }
            throw Error(response.statusText);
        })
        .then(data=>{
            const afterFilterData=[];
            for (let i =0;i<data.length;i++){
                if(data[i].tabTypes.includes(this.state.tab)){
                    afterFilterData.push(data[i])
                }
            }
        // const sortData=data.filter(data=>{data.tabTypes.include("TEXT_BASS_TAB")});
           this.setState({
               items:afterFilterData,
               loading:false
           })
        })
        .catch(error=>console.log(error))

};
DisplayScores=({items})=>{
        return(
        items.map(item=><Tab key={item.id}  TabTypes={item.tabTypes} title={item.title} nameArtist={item.artist.name} />)
)

};
    render() {
        return (
            <div className="App">
                <header id={"Top"} className={"header"}>
                    <img className={"header__logo"} src={Logo} alt="logo"/>
                </header>
                <main className={"main"}>
                    <div className={"wrapper"}>
                        <Form change={this.handleChange}  click={this.handleDateSearch}/>
                        <h3 className={"title_list"}>{`Results (${this.state.items.length}):`}</h3>
                        <BeatLoader
                            css={override}
                            size={25}
                            //size={"150px"} this also works
                            color={"#2BA4C6"}
                            loading={this.state.loading}
                        />
                        <ul
                            className={"list"}>
                            <this.DisplayScores items={this.state.items}/>
                        </ul>
                    </div>
                </main>
                <footer className={"footer"}>
                    <p>created by Tomasz Filiński</p>
                </footer>
            </div>
        );
    }


}

export default App;
