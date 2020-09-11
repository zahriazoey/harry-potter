import React, { Component } from 'react'
import HOUSE from './house'


export default class SortingHat extends Component {
    constructor(props) {
        super(props)
        this.state = {
            houses: '',
            houseInfo: HOUSE
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
        const { houses } = this.state
        return (
            <div className='sortingHat'>
                <h1>You are a {houses}!</h1>
                {HOUSE.map((house, index) => {
                    if (houses === house.name)
                        return (
                            <div key= {index} style={cardStyles}>
                                <p>{house.info}</p>
                                {/* <p>Colors: {house.colors}</p> */}

                            </div>
                        )
                })}
            </div>
        )

    }
}


const cardStyles = {
    margin: '20px auto',
    width: '45%',
    height: '20%',
    padding: '15px',
    borderRadius: '15px',
    border: '1px solid black'
}

const gryffindor = {
    backgroundColor: 'red',
    color: 'gold'

}

const ravenclaw = {
    backgroundColor: 'navy',
    color: '#cd7f32'
}

const hufflepuff = {
    backgroundColor: 'yellow',
    color: 'black'

}

const slytherin = {
    backgroundColor: 'green',
    color: 'silver'

}

