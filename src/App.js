import React from 'react';
import './css/App.css';
import Logo from "./photo/logo.png";
import Form from "./Form";

import Tab from "./Tab";

class App extends React.Component{
constructor(props) {
    super(props);
    this.state={
        search:"",
        tab:"CHORDS",
        items:[],
    };
}
handleChange=(event)=>{
    const target=event.target;
    const name=target.name;

    this.setState({
        [name]:event.target.value,
    })
};
handleDateSearch=(e)=>{
    e.preventDefault();
    const url=`http://www.songsterr.com/a/ra/songs.json?pattern=${this.state.search}`;
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
               items:afterFilterData
           })
        })
        .catch(error=>console.log(error))

};
DisplayScores=({items})=>{ return(

        items.map(item=><Tab key={item.id} TabTypes={item.tabTypes} title={item.title} nameArtist={item.artist.name} tabTypes={item.tabTypes} />)


)

};
// HandleTabTypes=(item)=>{
//
//         item.map(tabType=>
//             <select className={"form__select inputStyle"}>
//                 <option value={tabType}>{tabType}</option>
//             </select>)
//
//     }
    render() {
        return (
            <div className="App">
                <header className={"header"}>
                    <img className={"header__logo"} src={Logo} alt="logo"/>
                </header>
                <main className={"main"}>
                    <div className={"wrapper"}>
                        <Form change={this.handleChange} click={this.handleDateSearch}/>


                        <ul
                            className={"list"}>
                            <this.DisplayScores items={this.state.items}/>
                        </ul>
                    </div>

                </main>

                <footer className={"footer"}>
                    <p>created by tomus</p>
                </footer>
            </div>
        );
    }


}

export default App;
