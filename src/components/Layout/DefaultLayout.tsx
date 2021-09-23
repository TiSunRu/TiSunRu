import React, { FC } from "react";
import { LayoutWrapper } from "./styled";


const DefaultLayout: FC = ({ children }) => {
    return (
        <LayoutWrapper>{children}</LayoutWrapper>
    );
};

export default DefaultLayout;
