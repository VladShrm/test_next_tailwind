import React from 'react';

export const metadata = {
    title: "Cars"
};

const CarLayout = ({children}) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default CarLayout;