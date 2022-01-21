import React from "react";

import Tile from "./tile";

const GridFrame = (props) => {
    const populateTiles = () => {
        const tileArray = [];
        for (let i = 0; i < props.gridSize[0]; i++) {
            for (let j = 0; j < props.gridSize[1]; j++) {
                tileArray.push(<Tile key={`${i}-${j}`} x={i} y={j} gridSize={props.gridSize} />);
            }
        }
        return tileArray;
    };

    return (
        <div
            id="grid-frame-wrapper"
            style={{
                display: "grid",
                gridTemplateColumns: `repeat(${props.gridSize[0]}, 1fr)`,
            }}
        >
            {populateTiles()}
        </div>
    );
};

export default GridFrame;
