
import AddCar from "./AddCar.jsx"

import { Card, Container } from 'react-bootstrap'

export default function CarsOwned({ fetchUserData, cars }) {

    return (
        <>
            <Container className="mt-4">
                <h5>Cars Owned</h5>
                {cars.map((car) => (
                    <Card key={car.make} className="mb-1" style={{ position: 'relative' }}>
                        <Card.Img variant="top" src={car.image} style={{ height: '200px', objectFit: 'cover', filter: 'brightness(0.5)', }} />
                        <Card.ImgOverlay>
                            <Card.Title>{car.make} {car.model}</Card.Title>
                            <Card.Text> Year: {car.year} | Mileage: {car.mileage}</Card.Text>
                        </Card.ImgOverlay>
                    </Card>))}
                <AddCar fetchUserData={fetchUserData} />
            </Container>
        </>
    )
}

