import React, { Component } from "react";

import PortfolioItem from "./portfolio-items";

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        console.log("Portfolio container has rendered");
    }
    // State - class based component
    // Lifecycle hooks - managing data components

    portfolioItems() {
        const data = ["Quip", "Eventbrite", "Ministry Safe", "Swing Away"];

        return data.map(item => {
            return <PortfolioItem />;
        })
    }

    render() {
        return (
            <div>
                <h2>Portfolio items go here...</h2>

                {this.portfolioItems()}
            </div>
        )
    }
}
