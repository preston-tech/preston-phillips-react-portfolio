import React, { Component } from "react";

import PortfolioItem from "./portfolio-items";

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        console.log("Portfolio container has rendered");
    }
    // State - class based component
    // Lifecycle hooks - managing data components
    render() {
        return (
            <div>
                <h2>Portfolio items go here...</h2>

                <PortfolioItem />
            </div>
        )
    }
}
