import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'

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
                <button> See Classmates and Staff </button>
                <button> Learn Spells </button>
                <button>Houses</button>



            </div>
        )
    }
}
