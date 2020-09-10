import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export default function NavBar() {
    return (
        <div>
            <Navbar bg="white" variant="light">
                <Navbar.Brand href="/">HOGWARTS</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link href="/spells" style={{color: 'black'}}>Spells</Nav.Link>
                    <Nav.Link href="/houses" style={{color: 'black'}}>Houses</Nav.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}
