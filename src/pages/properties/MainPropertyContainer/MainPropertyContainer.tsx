import { useEffect, useState } from "react";
import PropertyCard from "../../../components/ui/PropertyCard";
import { TPropertyInformation } from "../../../types";



const MainPropertyContainer = ({setId}: { setId: React.Dispatch<React.SetStateAction<string>> }) => {

  const [properties, setPropeties] = useState<TPropertyInformation[] | null>(null);
  useEffect(() => {
    fetch("data.json")
    .then((res) => res.json())
    .then((data) => setPropeties(data))
  }, [])

  return (
    <div className="w-[60%] bg-white rounded-2xl p-2 min-h-screen">
      <div className="grid grid-cols-3 gap-5">
        {properties?.map((property) => (
          <PropertyCard
            key={property.id}
            id={property.id}
            imageURL={property.propertyImage}
            title={property.propertyTitle}
            location={property.location}
            price={property.price}
            ratings={property.ratings}
            type={property.listingType}
            setId={setId}
          />
        ))}
      </div>
    </div>
  );
};

export default MainPropertyContainer;
