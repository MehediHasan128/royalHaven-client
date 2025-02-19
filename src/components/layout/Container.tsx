import { ReactNode } from "react";

const Container = ({children}: {children: ReactNode}) => {
    return (
        <div className="lg:w-[90%] mx-auto px-10 py-20 md:py-32">
            {children}
        </div>
    );
};

export default Container;