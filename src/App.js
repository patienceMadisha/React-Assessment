import './App.css';
import React from "react";
import Carousel from "react-elastic-carousel";
import Slider from "./Components/Slider/Slider";
import crossBox from "./Components/Slider/Icons/box.png";
import "./App.css";


const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1920, itemsToShow: 5},
];

function App() {
    return (
        <>
        <div className="Container1">
            <div className="Container2">
                <div className="Text">
                    what are you
                    <br/> <strong> here to do? </strong>
                </div>
                <div className="App">
                    <Carousel breakPoints={breakPoints}>
                        <Slider>
                                <img
                                    className="Icon"
                                    src={crossBox}
                                />
                                Mobile internet
                        </Slider>
                        <Slider>
                            <img
                                className="Icon"
                                src={crossBox}
                            />
                            Home internet
                        </Slider>
                        <Slider>
                            <img
                                className="Icon"
                                src={crossBox}
                            />
                            Get a device
                        </Slider>
                        <Slider>
                            <img
                                className="Icon"
                                src={crossBox}
                            />
                            Add a phone-line
                        </Slider>
                        <Slider>
                            <img
                                className="Icon"
                                src={crossBox}
                            />
                            Upgrade
                        </Slider>
                    </Carousel>
                </div>
            </div>
        </div>
        </>

    );
}

export default App;
