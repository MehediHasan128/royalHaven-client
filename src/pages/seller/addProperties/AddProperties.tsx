import { Divider, Typography } from "@mui/material";
import RForm from "../../../components/form/RForm";
import RInput from "../../../components/form/RInput";
import RSelect from "../../../components/form/RSelect";
import { FieldValues } from "react-hook-form";
import property from "../../../assets/images/pro.jpg";
import {
  amenities,
  condition,
  furnishingStatus,
  listingType,
  nearbyFacilities,
  negotiable,
  paymentOption,
  propertyType,
} from "./data";
import { useEffect, useState } from "react";

const AddProperties = () => {
  const [countryValue, setCountryValue] = useState<string | null>(null);
  const [country, setCountry] = useState([]);
  useEffect(() => {
    fetch("/public/addressData/country.json")
      .then((res) => res.json())
      .then((data) => setCountry(data));
  }, []);

  const [stateValue, setStateValue] = useState<string | null>(null);
  const [state, setState] = useState([]);
  useEffect(() => {
    fetch("/public/addressData/state.json")
      .then((res) => res.json())
      .then((data) =>
        setState(
          data.filter(
            (item: { countryCode: string }) => item.countryCode === countryValue
          )
        )
      );
  }, [countryValue]);


  const [city, setCity] = useState([]);
  useEffect(() => {
    fetch("/public/addressData/city.json")
      .then((res) => res.json())
      .then((data) =>
        setCity(
          data.filter(
            (item: { stateCode: string }) => item.stateCode === stateValue
          )
        )
      );
  }, [stateValue]);

  

  const addProperty = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div className="bg-white py-10 rounded-2xl shadow">
      <div className="flex gap-2 items-center px-10">
        <Typography variant="subtitle1">
          <span className="font-bold">Add new property</span>
        </Typography>
        <div className="border size-5 flex justify-center items-center rounded-full">
          <Typography variant="subtitle2">
            <span className="font-bold">!</span>
          </Typography>
        </div>
      </div>

      <div className="my-5">
        <Divider />
      </div>

      <div className="px-10">
        <RForm onSubmit={addProperty}>
          <div className="flex gap-5">
            <div className="border rounded-xl p-5 w-[55%]">
              {/* All inputs */}
              <div className="space-y-5">
                {/* Basic information */}
                <div>
                  <Typography variant="subtitle1">
                    <span className="font-semibold">Basic Information</span>
                  </Typography>
                  <div className="my-5">
                    <Divider />
                  </div>

                  {/* Basic information input */}
                  <div className="space-y-5">
                    <div className="flex gap-5 items-center">
                      {/* input 1 */}
                      <div className="w-full">
                        <RInput
                          type="text"
                          name="basicPropertyDetails.title"
                          placeholder="Enter property title"
                          variant="outlined"
                          label="Title"
                          size="small"
                          required
                        />
                      </div>
                      {/* input 2 */}
                      <div className="w-full">
                        <RSelect
                          type="text"
                          name="basicPropertyDetails.listingType"
                          variant="outlined"
                          label="Listing type"
                          size="small"
                          data={listingType}
                          required
                        />
                      </div>
                    </div>
                    {/* input 3 */}
                    <div>
                      <RInput
                        type="text"
                        name="basicPropertyDetails.description"
                        placeholder="Enter property description"
                        variant="outlined"
                        label="Property description"
                        size="small"
                        required
                        multiline
                        row={3}
                        maxRows={6}
                      />
                    </div>
                    {/* input 4 */}
                    <div>
                      <RSelect
                        type="text"
                        name="basicPropertyDetails.propertyType"
                        variant="outlined"
                        label="Property type"
                        size="small"
                        data={propertyType}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Property features information */}
                <div>
                  <Typography variant="subtitle1">
                    <span className="font-semibold">Property Features</span>
                  </Typography>
                  <div className="my-5">
                    <Divider />
                  </div>

                  {/* Property features input */}
                  <div className="space-y-5">
                    <div className="flex gap-5 items-center">
                      {/* Input 1 */}
                      <div className="w-full">
                        <RInput
                          type="number"
                          name="propertyFeatures.propertySize"
                          placeholder="Enter property size"
                          variant="outlined"
                          label="Property Size"
                          size="small"
                          required
                        />
                      </div>
                      {/* Input 2 */}
                      <div className="w-full">
                        <RInput
                          type="text"
                          name="propertyFeatures.builtYear"
                          placeholder="Enter property built year"
                          variant="outlined"
                          label="Built year"
                          size="small"
                          required
                        />
                      </div>
                    </div>
                    <div className="flex gap-5 items-center">
                      {/* Input 3 */}
                      <div className="w-full">
                        <RInput
                          type="number"
                          name="propertyFeatures.bedRooms"
                          placeholder="Enter total bad rooms"
                          variant="outlined"
                          label="Total Badroom"
                          size="small"
                        />
                      </div>
                      {/* Input 4 */}
                      <div className="w-full">
                        <RInput
                          type="number"
                          name="propertyFeatures.bathRooms"
                          placeholder="Enter total bath rooms"
                          variant="outlined"
                          label="Total Bathroom"
                          size="small"
                        />
                      </div>
                      {/* Input 5 */}
                      <div className="w-full">
                        <RInput
                          type="number"
                          name="propertyFeatures.numberOfParkingSpace"
                          placeholder="Enter total parking space"
                          variant="outlined"
                          label="Total Parking Space"
                          size="small"
                        />
                      </div>
                    </div>
                    {/* Input 6 */}
                    <div>
                      <RSelect
                        type="text"
                        name="propertyFeatures.furnishingStatus"
                        variant="outlined"
                        label="Furnishing Status"
                        size="small"
                        data={furnishingStatus}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Property features information */}
                <div>
                  <Typography variant="subtitle1">
                    <span className="font-semibold">Address</span>
                  </Typography>
                  <div className="my-5">
                    <Divider />
                  </div>

                  {/* Property features input */}
                  <div className="space-y-5">
                    {/* Input 6 */}
                    <div>
                      <RSelect
                        type="text"
                        name="location.country"
                        variant="outlined"
                        label="Country"
                        size="small"
                        data={country}
                        setLocalValue={setCountryValue}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-5">
                      {/* Input 1 */}
                      <div className="w-full">
                        <RSelect
                          type="text"
                          name="location.state"
                          variant="outlined"
                          label="State"
                          size="small"
                          data={state}
                          setLocalValue={setStateValue}
                          required
                        />
                      </div>
                      {/* Input 1 */}
                      <div className="w-full">
                        <RSelect
                          type="text"
                          name="location.city"
                          variant="outlined"
                          label="City"
                          size="small"
                          data={city}
                          required
                        />
                      </div>
                      {/* Input 1 */}
                      <div className="w-full">
                      <RInput
                          type="text"
                          name="location.postalCode"
                          placeholder="Enter zip code"
                          variant="outlined"
                          label="Zip code"
                          size="small"
                          required
                        />
                      </div>
                      {/* Input 1 */}
                      <div className="w-full">
                        <RInput
                          type="text"
                          name="location.street"
                          placeholder="Enter street address"
                          variant="outlined"
                          label="Street address"
                          size="small"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Property additional features information */}
                <div>
                  <Typography variant="subtitle1">
                    <span className="font-semibold">Additonal Features</span>
                  </Typography>
                  <div className="my-5">
                    <Divider />
                  </div>

                  {/* Property features input */}
                  <div className="space-y-5">
                    <div className="grid grid-cols-3 gap-5">
                      {/* Input 1 */}
                      <div className="w-full">
                        <RSelect
                          type="text"
                          name="additionalFeatures.amenities"
                          variant="outlined"
                          label="Amenities"
                          size="small"
                          data={amenities}
                        />
                      </div>
                      {/* Input 2 */}
                      <div className="w-full">
                        <RSelect
                          type="text"
                          name="additionalFeatures.nearbyFacilities"
                          variant="outlined"
                          label="Nearby facilities"
                          size="small"
                          data={nearbyFacilities}
                        />
                      </div>
                      {/* Input 3 */}
                      <div className="w-full">
                        <RSelect
                          type="text"
                          name="additionalFeatures.propertyCondition"
                          variant="outlined"
                          label="Condition"
                          size="small"
                          data={condition}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Property pricing information */}
                <div>
                  <Typography variant="subtitle1">
                    <span className="font-semibold">Price Details</span>
                  </Typography>
                  <div className="my-5">
                    <Divider />
                  </div>

                  {/* Property pricing input */}
                  <div className="space-y-5">
                    <div className="flex gap-5 items-center">
                      {/* Input 1 */}
                      <div className="w-full">
                        <RInput
                          type="number"
                          name="priceInfo.propertySize"
                          placeholder="Enter property size"
                          variant="outlined"
                          label="Price"
                          size="small"
                          required
                        />
                      </div>
                      {/* Input 2 */}
                      <div className="w-full">
                        <RSelect
                          type="text"
                          name="priceInfo.negotiable"
                          variant="outlined"
                          label="Negotiable"
                          size="small"
                          data={negotiable}
                          required
                        />
                      </div>
                      {/* Input 3 */}
                      <div className="w-full">
                        <RSelect
                          type="text"
                          name="priceInfo.paymentOption"
                          variant="outlined"
                          label="Payment option"
                          size="small"
                          data={paymentOption}
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* button */}
              <button
                type="submit"
                className="border mt-10 px-5 py-2 rounded-lg cursor-pointer hover:translate-x-2 hover:border-blue-600 hover:text-blue-600 duration-500"
              >
                <Typography variant="button">
                  <span className="font-semibold">Add Property</span>
                </Typography>
              </button>
            </div>

            <div className="w-[45%] rounded-2xl overflow-hidden border border-dashed p-1 h-fit">
              <img className="rounded-2xl" src={property} alt="" />
            </div>
          </div>
        </RForm>
      </div>
    </div>
  );
};

export default AddProperties;
