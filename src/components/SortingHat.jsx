import React, { Component } from 'react'
import HOUSE from './house'
import HouseData from './Houses'
import { Button } from 'react-bootstrap'


export default class SortingHat extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sortingHatHouse: '',
            houseInfo: HOUSE,
            houseVisible: false
        }
        this.handleClose = this.handleClose.bind(this)
    }

    sortingHat = () => {
        fetch('https://www.potterapi.com/v1/sortinghat')
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                this.setState({
                    sortingHatHouse: data
                })
            })
    }

    handleClose() {
        console.log('close clicked')
        this.setState({
            houseVisible: !this.state.houseVisible
        })
    }



    componentDidMount() {
        this.sortingHat()
    }

    render() {
        const { sortingHatHouse } = this.state
        return (
            <div className='sortingHat'>
                <h1>You are a {sortingHatHouse}!</h1>

                {HOUSE.map((house, index) => {
                    if (sortingHatHouse === house.name && house.name === 'Ravenclaw') {
                            return (
                                <div key={index} style={{...cardStyles,...ravenclaw}}>
                                        <p>{house.info}</p>
                
                                </div>
                            )
                        }
     
                        else if (sortingHatHouse === house.name  && house.name === 'Hufflepuff') {
                                return (
                                    <div key= {index} style={{...cardStyles,...hufflepuff}}>

                                            <p>{house.info}</p>
                                    
                                    </div>
                                )
                            }
                        else if (sortingHatHouse === house.name  && house.name === 'Slytherin') {
                            return (
                                <div key= {index} style={{...cardStyles,...slytherin}}>

                                        <p>{house.info}</p>
                                
                                </div>
                            )
                        }
                        else if (sortingHatHouse === house.name  && house.name === 'Gryffindor') {
                            return (
                                <div key= {index} style={{...cardStyles,...gryffindor}}>

                                        <p>{house.info}</p>
                                
                                </div>
                            )
                        }
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

