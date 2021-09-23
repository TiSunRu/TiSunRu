import React, { FC } from "react";
import { BsChevronCompactRight, BsChevronCompactLeft } from 'react-icons/all'

export const SampleNextArrow: FC = ({ className, style, onClick }: any) => (
    <BsChevronCompactRight
        color="red"
        className={className}
        style={{ ...style, display: "block", top: "200px" }}
        onClick={onClick}
    />
)

export const SamplePrevArrow: FC = ({ className, style, onClick }: any) => (
    <BsChevronCompactLeft
        color="red"
        className={className}
        style={{ ...style, display: "block", top: "200px" }}
        onClick={onClick}
    />
);
