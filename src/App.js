import React, { Component } from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Home extends React.Component {
    state = {
        author: '',
        text: '',
    }

    authorChanger = (event) => {
        this.setState({ author: event.currentTarget.value })
    }

    textChanger = (event) => {
        this.setState({ text: event.currentTarget.value })
    }



    validate = () => {
        if (this.state.author.trim() === '' || this.state.text.trim() === '' ) {
            return false
        } else {
            return true
        }
    }


    /*constructor(props) {
        super(props)
        this.input = React.createRef()
    }
    componentDidMount() {
        // ставим фокус в input
        this.input.current.focus()
    }*/


    handlerAlert = (event) => {
        event.preventDefault()
        let { author, text, bigText } = this.state

        this.props.onAddNews({author, text, bigText})

    }
    render() {
        // let {author, text, bigText, agreement} = this.state

        return (
            <form>
                <input
                    className="formName"
                    type="text"
                    value={this.state.value}
                    placeholder="Login"
                    ref={this.input}
                    required
                    onChange={this.authorChanger}/>
                <textarea
                    className="formArea"
                    value={this.state.value}
                    placeholder="Password"
                    required
                    onChange={this.textChanger}></textarea>
                <input type="submit" value="Sign in" className="formButton"/>
                <button
                    className="formButton"
                    disabled={!this.validate()}
                    onClick={this.handlerAlert}>alert</button>
            </form>
        )
    }
}



class About extends React.Component {
  state = {
    show: false
  }
  render() {
    return (
        <h2>About</h2>
    )
  }

}


const Users = () => <h2>Users</h2>;

const App = () => (
    <Router>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li className="showOff">
                        <Link to="/about/">About</Link>
                    </li>
                    <li>
                        <Link to="/users/">Users</Link>
                    </li>
                </ul>
            </nav>

            <Route path="/home" component={Home} />
            <Route path="/about/" component={About}  />
            <Route path="/users/" component={Users} />
        </div>
    </Router>
);


export default App;
