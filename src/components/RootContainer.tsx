import * as React from "react";
import { RectangleComponent } from "./RectangleComponent";
import { HorizontalLinePatternComponent } from "./patterns/HorizontalLinePatternComponent";
import { VerticalLinePatternComponent } from "./patterns/VerticalLinePatternComponent";
import { DownwardDiagonalLinePatternComponent } from "./patterns/DownwardDiagonalLinePatternComponent";
import { UpwardDiagonalLinePatternComponent} from "./patterns/UpwardDiagonalLinePatternComponent";
import { CrosshatchPatternComponent } from "./patterns/CrosshatchPatternComponent";
import { DiagonalCrosshatchPatternComponent } from "./patterns/DiagonalCrosshatchPatternComponent";

export class RootContainer extends React.PureComponent<any, any> {
    private buildDefs() {
        return (
            <defs>
                <HorizontalLinePatternComponent patternId="horizontal"
                  width={10} height={10} backgroundColor="yellow" lineColor="black" />

                <VerticalLinePatternComponent patternId="vertical"
                  width={10} height={10} backgroundColor="red" lineColor="white" />

                <DownwardDiagonalLinePatternComponent patternId="downwardDiagonal"
                  width={5} height={10} backgroundColor="white" lineColor="blue" />

                <UpwardDiagonalLinePatternComponent patternId="upwardDiagonal"
                  width={10} height={5} backgroundColor="white" lineColor="blue" />

                <CrosshatchPatternComponent patternId="crosshatch"
                  width={20} height={20} backgroundColor="pink" lineColor="green" />

                <DiagonalCrosshatchPatternComponent patternId="diagonalCrosshatch"
                  width={20} height={20} backgroundColor="lightblue" lineColor="purple" />
            </defs>
        );
    }

    render() {
        return(
            <div>
                <h1>Pattern Brushes</h1>

                <RectangleComponent defs={this.buildDefs()} fill="url(#horizontal)"/>
                <RectangleComponent defs={this.buildDefs()} fill="url(#vertical)"/>
                <RectangleComponent defs={this.buildDefs()} fill="url(#downwardDiagonal)"/>
                <RectangleComponent defs={this.buildDefs()} fill="url(#upwardDiagonal)"/>
                <RectangleComponent defs={this.buildDefs()} fill="url(#crosshatch)"/>
                <RectangleComponent defs={this.buildDefs()} fill="url(#diagonalCrosshatch)"/>

            </div>
        );
    }
}