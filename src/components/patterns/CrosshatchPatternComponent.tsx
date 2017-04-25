import * as React from "react";
import { IPatternComponentProps } from "./IPatternComponentProps";


/** Pattern that renders a crosshatch pattern. */
export const CrosshatchPatternComponent
= (props: IPatternComponentProps) : JSX.Element => {
    return(
        <pattern id={props.patternId}
            width={props.width} height={props.height}
            patternUnits="userSpaceOnUse">
            <rect width={props.width} height={props.height} fill={props.backgroundColor}
                stroke={props.lineColor} strokeWidth="1"/>
        </pattern>
    );
};