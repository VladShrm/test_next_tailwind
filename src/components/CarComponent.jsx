import React from 'react';
import Link from "next/link";

const CarComponent = ({ car }) => {
    return (
        <Link href={`/cars/${car.id}`}>
            <div className="border border-gray-600 p-4 rounded-lg shadow-md hover:shadow-lg hover:border-blue-500 hover:bg-blue-100 transition-all duration-300 text-gray-900">
                <h2 className="text-xl font-semibold mb-2">{car.brand} {car.model}</h2>
                <p className="mb-2"><strong>Year:</strong> {car.year}</p>
                <p className="mb-2"><strong>Price:</strong> ${car.price}</p>
                <p className="mb-2"><strong>Color:</strong> {car.color}</p>
            </div>
        </Link>
    );
};

export default CarComponent;
