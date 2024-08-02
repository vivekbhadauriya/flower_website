import React from 'react'
import "./AppCss.css"

const FilterOptions = () => {
    return (
        <div className="filter-options">
            <div className="filter-buttons">
                <button className="filter-button active">All</button>
                <button className="filter-button">Rose</button>
                <button className="filter-button">Lily</button>
                <button className="filter-button">Tulip</button>
                <button className="filter-button">Daisy</button>
            </div>
            <div className="view-options">
                <button className="view-button">
                    <img src="/images/grid-view.png" alt="Grid View" />
                </button>
                <button className="view-button">
                    <img src="/images/filter-icon.png" alt="Filter" />
                </button>
            </div>
        </div>
    )
}

export default FilterOptions
