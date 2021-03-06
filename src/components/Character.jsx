import React, { Component } from 'react'

export default class Character extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            characters: [], 
            characterData: {
                name: '',
                house: '',
                ancestry: '',
            }
        }
    }

    hpCharacters = () => {
        fetch('http://hp-api.herokuapp.com/api/characters')
            .then((res) => res.json())
            .then((data) => {
                
                console.log(data)
                this.setState({
                    characters: data,
                    characterData: {
                        name: data,
                        house: data,
                        ancestry: data
                    }
                    })
                })
            }
    

    componentDidMount() {
        this.hpCharacters()
    }
    
    render() {
        return (
            <div style= {{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', backgroundColor: '#282c34'}}>
                    {this.state.characters.map((character, index) => {
                        if (character.hogwartsStudent) {
                            return (
                                    <div key={index} style= {{border: '1px solid black', 
                                    borderRadius: '15px',
                                    width: '30%', 
                                    margin: '25px auto', 
                                    fontSize: '12px', 
                                    padding: '10px',
                                    backgroundColor: 'pink'
                                }}>
                                    <h1>Student: </h1>
                                    <h1>Name: {character.name}</h1>
                                    <h1>House: {character.house}</h1>
                                    </div>
                            )
                    }  else if (character.hogwartsStaff) {
                        return (
                            <div key={index} style= {{border: '1px solid black', 
                            borderRadius: '15px',
                            width: '30%', 
                            margin: '25px auto', 
                            fontSize: '12px', 
                            padding: '10px',
                            backgroundColor: 'blue'
                        }}>
                            <h1>Staff: </h1>
                            <h1>Name: {character.name}</h1>
                            <h1>House: {character.house}</h1>
                            
                            
                            </div>
                        )
                    } else {
                        return (
                            <div key={index} style= {{border: '1px solid black', 
                            borderRadius: '15px',
                            width: '30%', 
                            margin: '25px auto', 
                            fontSize: '12px', 
                            padding: '10px',
                            backgroundColor: 'yellow'
                        }}>
                            <h1>Parent: </h1>
                            <h1>Name: {character.name}</h1>
                            <h1>House: {character.house}</h1>
                            
                            
                            </div>
                        )
                    }
                })}
            </div>
        )
    }
    
}
