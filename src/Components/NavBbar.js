import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

const NavBbar = () => {
	return (
		<div>
			<Navbar bg='primary' data-bs-theme='dark'>
				<Container>
					<Navbar.Brand href='#home'>Navbar</Navbar.Brand>
					<Nav className='ml-auto'>
						<Nav.Link href='#home'>Home</Nav.Link>
						<Nav.Link href='#features'>Features</Nav.Link>
						<Nav.Link href='#pricing'>Pricing</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</div>
	);
};

export default NavBbar;
