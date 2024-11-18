import React from 'react';

export const metadata = {
    title: "Cars"
};

const CarsLayout = ({children}) => {
    return (
        <div className="bg-gray-100">
            {children}
        </div>
    );
};

export default CarsLayout;