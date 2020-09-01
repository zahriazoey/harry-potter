import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'

export default class HomePage extends Component {
    render() {
        return (
            <div className='homePage'>
                <header className="App-header">
                    <h1>
                        Welcome to Hogwarts!
                        <p>Click Below to Get Sorted Into A House! </p>
                    </h1>
                    <Link to={'/sortinghat'}>
                        <Button variant="light">Sorting Hat Says...</Button>
                    </Link>
                    
                </header>
            </div>
        )
    }
}
