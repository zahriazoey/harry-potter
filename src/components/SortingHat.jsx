import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class SortingHat extends Component {
    constructor(props) {
        super(props)
        this.state = {
            houses: ''
        }
    }

    sortingHat = () => {
        fetch('https://www.potterapi.com/v1/sortinghat')
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                this.setState({
                    houses: data
                })
            })
    }

    componentDidMount() {
        this.sortingHat()
    }
    render() {
        return (
            <div>
                <header>
                    <h1>Which House Do You Belong To? </h1>
                </header>

                <h1>You are a {this.state.houses}!</h1>
                <Link to={'/spells'}>
                    <Button variant="light" style={{ margin: '10px'}}>Learn Spells</Button>
                </Link>

                <Link to={'/houses'}>
                <Button variant="light" style={{ margin: '10px'}}>Houses</Button>
                </Link>

                <Link to={'/characters'}>
                    <Button variant="light" style={{ margin: '10px'}}>See Classmates and Staff</Button> 
                </Link>
            </div>
        )
    }
}
