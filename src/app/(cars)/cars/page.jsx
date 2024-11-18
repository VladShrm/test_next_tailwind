import React from 'react';
import { cars } from "@/constants/cars";
import CarComponent from "@/components/CarComponent";

const CarsPage = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4 text-gray-900">Available cars</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {cars.map((car) => (
                    <CarComponent car={car} key={car.id}/>
                ))}
            </div>
        </div>
    );
};

export default CarsPage;
