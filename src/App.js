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
           this.setState({
               items:afterFilterData,
               loading:false
           })
        })
        .catch(error=>alert(error))

};
displayScores=({items})=>{
    if (items.length===0 && this.state.loading === false){
        return <p className={"title_list"}>nothing found </p>
    }else {
        return (
            items.map(item => <Tab key={item.id} TabTypes={item.tabTypes} title={item.title}
                                   nameArtist={item.artist.name}/>)

        )
    }

};
handleLoader=()=>{
    if(this.state.loading===true){
        return <h3 className={"title_list"}>LOADING...</h3>
    }
    else{
        return(<ul
            className={"list"}>
            <this.displayScores items={this.state.items}/>
        </ul>)
    }
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
                        {this.handleLoader()}
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
