import { cars } from "@/constants/cars";
import Link from "next/link";

const CarPage = ({ params }) => {
    const car = cars.find((car) => car.id.toString() === params.id);

    if (!car) {
        return <div className="bg-white min-h-screen flex items-center justify-center">
            <div className="text-center text-2xl font-bold text-gray-900">
                Can not found
            </div>
        </div>
    }

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="max-w-4xl mx-auto p-6 flex">
                <Link href={"/cars"}>
                    <button
                        className="absolute top-12 left-6 p-2 bg-black rounded-lg shadow-md hover:bg-blue-700"
                    >
                        ←
                    </button>
                </Link>


                <div
                    className="flex flex-col md:flex-row items-center md:items-start justify-between space-y-6 md:space-y-0">
                    <div
                        className="flex flex-col items-center md:items-start space-y-4 md:w-2/5 bg-white p-6 rounded-lg shadow-md">
                        <h1 className="text-3xl font-semibold text-center md:text-left text-gray-800">
                            {car.brand} {car.model}
                        </h1>
                        <p className="text-2xl font-bold text-blue-600">${car.price}</p>
                        <div className="mt-4 space-y-2 text-gray-700">
                            <p><strong>Year:</strong> {car.year}</p>
                            <p><strong>Color:</strong> {car.color}</p>
                            <p><strong>Engine:</strong> {car.engine}</p>
                            <p><strong>Fuel Type:</strong> {car.fuel_type}</p>
                            <p><strong>Transmission:</strong> {car.transmission}</p>
                            <p><strong>Mileage:</strong> {car.mileage} miles</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-center  md:w-3/5 h-full ml-2">
                        <img
                            src={car.image}
                            alt={`${car.brand} ${car.model}`}
                            className="w-full max-w-[500px] h-auto object-cover rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarPage;
