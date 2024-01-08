import React from "react";
import { Carousel } from "react-bootstrap";

const Carouuusel = () => {
	return (
		<div>
			<Carousel data-bs-theme='dark carousel'>
				<Carousel.Item>
					<img
						className='d-block w-100 carous'
						src='https://images.unsplash.com/photo-1662970420077-44a227067d7a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
						alt='First slide'
					/>
					<Carousel.Caption>
						<h5>First slide label</h5>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className='d-block w-100 carous'
						src='https://images.unsplash.com/photo-1664737371049-6738d22f1c74?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
						alt='Second slide'
					/>
					<Carousel.Caption>
						<h5>Second slide label</h5>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className='d-block w-100 carous'
						src='https://images.unsplash.com/photo-1663953009099-a83b8c8d065b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8'
						alt='Third slide'
					/>
					<Carousel.Caption>
						<h5>Third slide label</h5>
						<p>
							Praesent commodo cursus magna, vel scelerisque nisl consectetur.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};

export default Carouuusel;
