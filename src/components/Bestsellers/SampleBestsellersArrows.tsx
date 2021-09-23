import React, { FC } from "react";
import { BsChevronCompactRight, BsChevronCompactLeft } from 'react-icons/all'

export const SampleNextArrow: FC = ({ className, style, onClick }: any) => (
    <BsChevronCompactRight
        color="grey"
        className={className}
        style={{ ...style, display: "block", top: "50%", zIndex: 20, right: "-2%" }}
        onClick={onClick}
    />
)

export const SamplePrevArrow: FC = ({ className, style, onClick }: any) => (
    <BsChevronCompactLeft
        color="grey"
        className={className}
        style={{ ...style, display: "block", top: "50%", zIndex: 20, left: "-2%" }}
        onClick={onClick}
    />
);
