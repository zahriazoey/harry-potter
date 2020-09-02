import React, { Component, Fragment } from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
import NavBar from './NavBar'

export default class Spells extends Component {
    constructor(props) {
        super(props)

        this.state = {
            spells: []
        }
    }

    hpSpells = () => {
        let url = '$2a$10$773ihvQf0zecXMnJ0iQeDO4MuNCdHS..HhA6wzhpnxBV61f8SpENW'
        fetch(`https://www.potterapi.com/v1/spells?key=${url}`)
            .then((res) => res.json())
            .then((data) => {

                console.log(data)
                this.setState({
                    spells: data,
                })
            })
    }

    componentDidMount() {
        this.hpSpells()
    }


    render() {
        return (
            <Fragment>
                <NavBar />
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', backgroundColor: '#282c34' }}>
                    {this.state.spells.map((spell, index) => {
                        return (
                            <div
                                key={index}
                                style={{
                                    backgroundColor: (spell.type === 'Curse' || spell.type === 'Hex' || spell.type === 'Jinx') ? 'red' : 'white',
                                    border: '1px solid black',
                                    borderRadius: '15px',
                                    width: '30%',
                                    margin: '25px auto',
                                    fontSize: '12px',
                                    padding: '10px'
                                }}>
                                <h1><b>Spell:</b> {spell.spell}</h1> <hr />
                                <h1><b>Effect:</b> {spell.effect}</h1> <hr />
                                <h1><b>Type:</b> {spell.type}</h1>
                            </div>
                        )
                    })}
                </div>
            </Fragment>
        )
    }
}

