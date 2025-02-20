import { ReactNode } from "react";

const Container = ({children}: {children: ReactNode}) => {
    return (
        <div className="w-[90%] mx-auto lg:px-10 py-20 md:py-32 overflow-hidden">
            {children}
        </div>
    );
};

export default Container;