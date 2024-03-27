
import { useLoaderData } from "react-router-dom";
import OfferCard from "./OfferCard";


const Offers = () => {

    const offers = useLoaderData()


    return (
        <div>
            <div className=" flex lg:flex-row flex-col gap-5 justify-center mx-10 mt-20">
                {
                    offers.map((offer) => (
                    <OfferCard key={offer.id} offer={offer}></OfferCard>
                ))}
            </div>
        </div>
    );
};

export default Offers;