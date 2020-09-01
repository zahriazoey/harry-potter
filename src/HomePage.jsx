import React, { Component } from 'react'
import SortingHat from './components/SortingHat';
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <header className="App-header">
                    <h1>
                        Welcome to Hogwarts Portal!
                        <p>Click Below to Get Sorted Into A House! </p>
                    </h1>
                    <Link to={'/sortinghat'}>
                        <button>Sorting Hat Says...</button>
                    </Link>
                    
                </header>
            </div>
        )
    }
}
