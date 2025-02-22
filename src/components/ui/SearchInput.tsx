import { ChangeEvent, Dispatch, ReactNode, SetStateAction } from "react";
import { MdOutlineCancel } from "react-icons/md";

const SearchInput = ({name, placeholder, searchText, icon}: {name: string; placeholder: string; searchText: Dispatch<SetStateAction<string | null>>; icon: ReactNode}) => {

  const handelSearchText = (event: ChangeEvent<HTMLInputElement>) => {
    searchText(event.target.value)
  }

  return (
    <div className="relative">
      <input
        className="bg-gray-200 py-2 px-10 rounded-full border-none focus:outline focus:outline-blue-700 w-full text-sm"
        type="text"
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handelSearchText}
      />
      <div className="absolute top-0 left-0 rounded-l-full h-full pl-3 flex justify-center items-center text-xl">
        {icon}
      </div>
      <button className="absolute top-0 right-0 rounded-l-full h-full pr-3 flex justify-center items-center text-xl hover:scale-105 duration-700 cursor-pointer">
        <MdOutlineCancel className="hidden" />
      </button>
    </div>
  );
};

export default SearchInput;
