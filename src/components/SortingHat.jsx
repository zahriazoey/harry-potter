import React, { Component, Fragment } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'

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
            <Fragment>
                <NavBar />
                <div className='sortingHat'>

                    <header>
                        <h1 style={{ color: 'white' }}>Which House Do You Belong To? </h1>
                    </header>

                    <h1 style={{ color: 'white' }}>You are a {this.state.houses}!</h1>

                    <Link to={'/spells'}>
                        <Button variant="light" style={{ margin: '10px' }}>Learn Spells</Button>
                    </Link>

                    <Link to={'/houses'}>
                        <Button variant="light" style={{ margin: '10px' }}>Learn about Other Houses</Button>
                    </Link>

                </div>

            </Fragment>
        )
    }
}
