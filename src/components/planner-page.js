import React, { useState } from "react";

import GridFrame from "./planning-grid/grid-frame";
import Sidebar from "./sidebar/sidebar";

const PlannerPage = (props) => {
    const [gridSize, setGridSize] = useState([50, 50]);

    return (
        <div id="page-wrapper">
            <GridFrame gridSize={gridSize} />
            <Sidebar gridSize={gridSize} setGridSize={setGridSize} />
        </div>
    );
};

export default PlannerPage;
