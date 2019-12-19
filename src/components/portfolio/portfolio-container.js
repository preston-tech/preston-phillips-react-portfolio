import React, { Component } from "react";

import PortfolioItem from "./portfolio-items";

export default class PortfolioContainer extends Component {
    constructor() {
        super();
        
        // State - class based component, manage its own state.

        this.state = {
            pageTitle: "Welcome to my Portfolio",
            data: [
            {title: "Quip"},
            {title: "Eventbrite"},
            {title: "Ministry Safe"},
            {title: "Swing Away"},
            ]
        }
    }
    
    // Lifecycle hooks - managing data components

    portfolioItems() {
        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} url={"google.com"} />;
        })
    }

    render() {
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>

                {this.portfolioItems()}
            </div>
        )
    }
}
