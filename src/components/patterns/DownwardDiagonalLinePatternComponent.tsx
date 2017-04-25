import * as React from "react";
import { IPatternComponentProps } from "./IPatternComponentProps";


/** Pattern that renders evenly spaced downward diagonal lines. */
export const DownwardDiagonalLinePatternComponent
= (props: IPatternComponentProps) : JSX.Element => {
    const hypotenuse = Math.sqrt(Math.pow(props.width, 2) + Math.pow(props.height, 2));
    //TOA:  tan angle = opposite / adjacent.
    const angle = Math.atan(props.height / props.width) * (180 / Math.PI);
    return(
        <pattern id={props.patternId}
            width={props.width} height={props.height}
            patternUnits="userSpaceOnUse" patternTransform={`rotate(${angle} 0 0)`}>
            <rect width={props.width} height={props.height} fill={props.backgroundColor} />
            <line x1="0" y1="0" x2={hypotenuse} y2="0"
                stroke={props.lineColor}/>
        </pattern>
    );
};