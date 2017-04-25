import * as React from "react";
import { IPatternComponentProps } from "./IPatternComponentProps";


/** Pattern that renders a diagonal crosshatch pattern. */
export const DiagonalCrosshatchPatternComponent
= (props: IPatternComponentProps) : JSX.Element => {
    //TOA:  tan angle = opposite / adjacent.
    const angle = Math.atan(props.height / props.width) * (180 / Math.PI);
    return(
        <pattern id={props.patternId}
            width={props.width} height={props.height}
            patternUnits="userSpaceOnUse" patternTransform={`rotate(-${angle} 0 0)`}>
            <rect width={props.width} height={props.height} fill={props.backgroundColor}
                stroke={props.lineColor} strokeWidth="1"/>
        </pattern>
    );
};