import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'
import image from '../plat.jpg'

const styles = {
    backgroundImage: `url(${image})`,
    backgroundRepeat  : 'no-repeat',
    backgroundPosition: 'top center',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    overflow: 'hidden',
}


export default function HomePage() {
    return (
        <div style={styles}>
            <header className="App-header">
                <h1>
                    Welcome to Hogwarts 2.0!
                        <p>Click Below to Get Sorted Into A House! </p>
                </h1>
                <Link to={'/sortinghat'}>
                    <Button variant="light">Sorting Hat Says...</Button>
                </Link>

            </header>
        </div>
    )
}


