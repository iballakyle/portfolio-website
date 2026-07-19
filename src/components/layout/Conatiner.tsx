import type { ReactNode } from "react";

interface ContainerProps {
    children: ReactNode;
}

function Container({ children }: ContainerProps){
    return(
        <div className="mx-auto max-w-7xl px-6 lg:px-8 border border-red-500">
            {children}
        </div>
    );
}

export default Container;