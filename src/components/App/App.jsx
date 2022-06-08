import React from 'react';
import Header from '../Header/Header';
import Searchbox from '../Searchbox/Searchbox';
import Resultcontainer from '../Resultcontainer/Resultcontainer';
import './App.css';

const name = require('@rstacruz/startup-name-generator');


class App extends React.Component {

    state = {
        headertitle: 'Name it!',
        isexpanded: 'true',
        suggestednames: []
    }

    Inputchange = (inputText) => {
        //alert('its changed');
        this.setState({
            isexpanded: !inputText,
            suggestednames: inputText ? name(inputText) : []
        })
        console.log('input text is', inputText);
    }
    render() {
        console.log(name('clown'))

        
        return (
            <div>
                <Header headername={this.state.headertitle} check={this.state.isexpanded}></Header>
                <Searchbox oninputchange={this.Inputchange}></Searchbox>
                <Resultcontainer suggestednames={this.state.suggestednames}></Resultcontainer>

            </div>
        )


    }


}

export default App;