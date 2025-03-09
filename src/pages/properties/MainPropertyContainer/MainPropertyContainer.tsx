import { useEffect, useState } from "react";
import PropertyCard from "../../../components/ui/PropertyCard";
import { TPropertyInformation } from "../../../types";
import { Pagination } from "@mui/material";



const MainPropertyContainer = ({id, setId}: { id: string | null; setId: React.Dispatch<React.SetStateAction<string | null>> }) => {

  const [properties, setPropeties] = useState<TPropertyInformation[] | null>(null);
  useEffect(() => {
    fetch("data.json")
    .then((res) => res.json())
    .then((data) => setPropeties(data))
  }, [])
  console.log(id);

  return (
    <div>
      <div className={`grid ${(id === null)? "grid-cols-4" : "grid-cols-3"} gap-5`}>
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
      
      <div className="mt-10 flex justify-center">
      <Pagination count={100} shape="rounded" />
      </div>
    </div>
  );
};

export default MainPropertyContainer;
