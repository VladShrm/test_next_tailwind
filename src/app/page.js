export default function Home() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Project Overview</h1>
            <p className="mb-4">
                This is a web application built with <strong>Next.js</strong> and <strong>Tailwind CSS</strong>, designed to allow users to browse and view details of available cars for sale. The app provides an easy-to-use interface where users can see essential car information like brand, model, year, price, and more.
            </p>

            <h2 className="text-xl font-semibold mb-2">Key Features:</h2>
            <ul className="list-disc pl-6">
                <li><strong>Car Listing:</strong> View a list of available cars with basic details.</li>
                <li><strong>Car Details:</strong> Click on a car to see more detailed specifications, including engine type, mileage, transmission, etc.</li>
                <li><strong>Responsive Design:</strong> The app is fully responsive, providing a seamless experience across all devices.</li>
                <li><strong>Simple Navigation:</strong> Easily navigate between the homepage and individual car pages.</li>
            </ul>

            <p className="mt-4">
                This project offers a user-friendly way to explore and learn about cars in a modern and responsive web application.
            </p>
        </div>
    );
}
