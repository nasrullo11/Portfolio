import {  Container } from "react-bootstrap"
import "./portfolio.scss"
import React from "react"
import axios from "axios"

class Portfolio extends React.Component{

    state = {
        user: '',
        username: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(resp => {
            console.log(resp)
            this.setState({username: resp.data})
        })
    }

    handleChange = e => {
        this.setState({name: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault()

        const user = {
            name: this.state.name
        }

        axios.post('https://jsonplaceholder.typicode.com/users', {user})
        .then(res => {
            console.log(res)
        })
    }



    

    render() {
        return (
            <div className="portfolio" id="portfolio">
                <h1>Portfolio</h1>
                <ul>
                    <li className="active">Featured</li>
                    <li>Web App</li>
                    <li>Mobile App</li>
                    <li>Desing</li>
                    <li>Branding</li>
                </ul>
                <div className="container">
                    <div className="item">
                        <img src="" alt="" />
                        <h3>Banking App</h3>
                        <Container>
                            <form onSubmit={this.handleSubmit}>
                                <label>
                                    Person Name: 
                                    <input type="text" name="name" onChange={this.handleChange}/>
                                </label>
                                <button type='submit'>Add</button>
                            </form>
                            <ul>
                                {this.state.username.map(usernames => {
                                    <li>{usernames.name}</li>
                                })}
                                
                            </ul>
                        </Container>
                    </div>
                </div>
            </div>
        )
    }
 
}

export default Portfolio
