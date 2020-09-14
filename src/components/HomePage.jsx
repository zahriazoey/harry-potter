import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'
import image from '../plat.jpg'
import SortingHat from './SortingHat';

// const styles = {
//     backgroundImage: `url(${image})`,
//     backgroundRepeat: 'no-repeat',
//     backgroundPosition: 'top center',
//     backgroundAttachment: 'fixed',
//     backgroundSize: 'cover',
//     overflow: 'hidden',
// }


export default class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            houseVisible: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        console.log('clicked')
        this.setState({
            houseVisible: !this.state.houseVisible
        })
    }

    
    render() {
        return (
            <div>
                <header className="App-header">
                    <h1>
                        Welcome to Hogwarts 2.0!
                    <p> What House Do You Belong To? </p>
                    </h1>

                    <Button variant="light" onClick={this.handleClick}>
                        Sorting Hat Says...
                </Button>
                {this.state.houseVisible && <SortingHat />}

                </header>

            </div>
        )
    }

}


