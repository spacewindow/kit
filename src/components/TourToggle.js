import React, { useState, createContext, useContext } from 'react';
import IconFlag from './IconFlag';

export const TourContext = createContext();

export const TourStateProvider = (props) => {

    const [showTour, setShowTour] = useState(true);

    return (
        <TourContext.Provider value={[showTour, setShowTour]}>
            {props.children}
        </TourContext.Provider>
    )

}

export const TourToggle = (props) => {

    const [showTour, setShowTour] = useContext(TourContext);

    const tourToggleHandler = () => {
        const newValue = !showTour;
        setShowTour(newValue);
    }

    const tourToggleStyles = {
        background: "deeppink",
        // opacity: 0.8,
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "170px",
        height: "40px",
        borderRadius: "10px",
        padding: "10px",
        position: "fixed",
        color: "#fff",
        fontWeight: "bold",
        top: "5px",
        left: "5px",
        zIndex: 9999,
        cursor: 'pointer',
        boxShadow: "3px 3px 8px rgba(0,0,0,0.3)"
    };

    return (
        <div className="tourToggle" style={tourToggleStyles} onClick={tourToggleHandler}>
            <IconFlag />
            <span style={{ marginLeft: "10px" }}>{showTour ? "Hide " : "Show "} Tour Points</span>

        </div>
    )
};