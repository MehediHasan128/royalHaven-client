import { FaRegUser } from "react-icons/fa6";
import { MdOutlinePendingActions } from "react-icons/md";

const PendingSeller = () => {
    return (
        <div className="relative">
            <FaRegUser />
            <MdOutlinePendingActions className="text-xl absolute top-4 left-3 bg-white" />
        </div>
    );
};

export default PendingSeller;