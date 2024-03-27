import { useLoaderData } from "react-router-dom";


const Offers = () => {

    const offer = useLoaderData()


    return (
        <div>
            <h1>Award: {offer.length}</h1>
        </div>
    );
};

export default Offers;