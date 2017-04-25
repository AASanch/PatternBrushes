import * as React from "react";

export interface IRectangleComponentProps {
    defs?: JSX.Element;
    fill?: string;
}

export const RectangleComponent = (props: IRectangleComponentProps) => {
    const size = "100px";
    return (
        <svg style={{ width: size, height: size, overflow: "visible", margin: "10px"}}
            shapeRendering="geometricPrecision">
            {props.defs}
            <rect width={size} height={size} stroke="black" fill={props.fill}/>
        </svg>
    );
};