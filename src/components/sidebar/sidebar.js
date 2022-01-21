import React, { useState } from "react";

const Sidebar = (props) => {
    const [gridXInput, setGridXInput] = useState(props.gridSize[0]);
    const [gridYInput, setGridYInput] = useState(props.gridSize[1]);

    const handleChange = (event) => {
        if (event.target.name === "grid-x-input") {
            setGridXInput(event.target.value);
        } else if (event.target.name === "grid-y-input") {
            setGridYInput(event.target.value);
        }
    };

    const handleClick = (event) => {
        if (event.target.name === "set-grid-btn") {
            props.setGridSize([gridXInput, gridYInput]);
        }
    };

    return (
        <div id="sidebar-wrapper">
            <div className="inputs-wrapper">
                <span>Grid size</span>{" "}
                <input
                    type="number"
                    name="grid-x-input"
                    value={gridXInput}
                    onChange={handleChange}
                />{" "}
                x{" "}
                <input
                    type="number"
                    name="grid-y-input"
                    value={gridYInput}
                    onChange={handleChange}
                />
            </div>
            <button name="set-grid-btn" onClick={handleClick}>
                Set grid
            </button>
            {/* a list of all buildings (collapsed into categories) */}
        </div>
    );
};

export default Sidebar;
