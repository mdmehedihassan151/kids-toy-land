import React, { Suspense } from 'react';
import Toy from '../Toy/Toy';

const Toys = ({data}) => {
    return (
        <Suspense fallback={<span>Loading.......</span>}>
           <div className='grid grid-cols-3 p-4 space-y-4'>
             {
                data.map((singleToy) =><Toy key={singleToy.toyId} singleToy={singleToy}></Toy>)
            }
           </div>
        </Suspense>
    );
};

export default Toys;