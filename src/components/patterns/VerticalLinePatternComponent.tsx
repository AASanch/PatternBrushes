import * as React from "react";
import { IPatternComponentProps } from "./IPatternComponentProps";


/** Pattern that renders evenly spaced vertical lines. */
export const VerticalLinePatternComponent
= (props: IPatternComponentProps) : JSX.Element => {
    return(
        <pattern id={props.patternId}
            width={props.width} height={props.height}
            patternUnits="userSpaceOnUse">
            <rect width={props.width} height={props.height} fill={props.backgroundColor} />
            <line x1={props.width} y1="0" x2={props.width} y2={props.height} stroke={props.lineColor}/>
        </pattern>
    );
};