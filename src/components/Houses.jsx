import React from 'react'
import { Card } from 'react-bootstrap'
import NavBar from './NavBar'

export default function Houses() {
    return (
        <div className='houses'>
            <NavBar />
            <h1 style={headerStyles}>Hogwarts Houses: </h1>

            <div style={{ display: 'flex', margin: '10px', flexWrap: 'wrap' }}>
                <Card style={{...cardStyles, ...gryffindor}}>
                    <h4>Gryffindor</h4>
                    <p>
                        The house of the brave, loyal, courageous, and daring.
                        Those who stand up for others are typically Gryffindors. Brave-hearted is the most
                        well-known Gryffindor characteristic, and Gryffindors are also known for having a
                        lot of nerve. "Do what is right" is the motto Gryffindors go by.
                        </p>
                </Card>
                <Card style={{...cardStyles, ...ravenclaw}}>
                    <h4>Ravenclaw</h4>
                    <p>
                        The house is known for their wisdom, creativity, and cleverness.
                        Those who value brains over brawn can be found here. Ravenclaws often tend to be quite quirky
                        also. "Do what is wise" is the motto they go by. Though Ravenclaws can be
                        know-it-alls at times, they most likely do know what the wisest decision is.
                    </p>
                </Card>
                <Card style={{...cardStyles, ...hufflepuff}}>
                    <h4>Hufflepuff</h4>
                    <p>
                        This house values dedication, fair play, and patience. Hufflepuff's are
                        known for being just and true. "Do what is nice" is their motto. Hufflepuff is known as the “nice
                        house" and believes in sparing people's feelings and being nice. Hufflepuffs just enjoy making others happy and
                        tend to be more patient toward people.
                    </p>
                </Card>
                <Card style={{...cardStyles, ...slytherin}}>
                    <h4>Slytherin</h4>
                    <p>
                        This is the house of the prideful, resourceful, and ambitious.
                        Slytherin's love to be in charge and crave leadership. "Do what is necessary"
                        is the motto of this house. They are loyal to those that are loyal to them.
                        Slytherin house as a whole is not evil, despite how many dark wizards
                        come out of this house.
                    </p>
                </Card>
            </div>

        </div>
    )
}



const cardStyles = {
    margin: '20px auto',
    width: '45%',
    height: '20%',
    padding: '15px',
    borderRadius: '15px'
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

const headerStyles = {
    color: 'black',
    margin: '30px auto',
    backgroundColor: 'white',
    width: '75%',
    borderRadius: '15px'


}