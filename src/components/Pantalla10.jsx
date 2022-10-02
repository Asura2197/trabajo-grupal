import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const Pantalla10 = () => {

    const navigate = useNavigate();
    return <div className="p-3 mb-2 bg-dark text-white bg-opacity-80">
        <div className="container" >
            <div className="container text-center">
                <div className="row ">
                    <div className="col">
                        <img src="https://www.iconpacks.net/icons/1/free-game-controller-icon-1436-thumb.png"
                            className="img float-start" width="45" height="45" alt="..."></img>
                    </div>
                    <div className="col">
                        Home
                    </div>
                    <div className="col">
                        About
                    </div>
                    <div className="col">
                        Support
                    </div>
                    <div className="col">
                        Reviews
                    </div>
                    <div className="col">
                        Ranking
                    </div>
                    <div className="col">
                        <img src="https://www.seekpng.com/png/full/15-157749_white-magnifying-glass-clip-art-at-clker-magnifying.png"
                            className="img float-end" width="25" height="25" alt="..."></img>
                    </div>
                    <div className="col">
                        <img src="https://cdn.icon-icons.com/icons2/2483/PNG/512/user_icon_149851.png"
                            className="img" width="35" height="30" alt="..."></img>
                    </div>
                    <div className="col">
                        <img src="https://cdn-icons-png.flaticon.com/512/1782/1782696.png"
                            className="img float-start" width="35" height="30" alt="..."></img>
                    </div>
                </div>

                <div className="row ">
                    <div class="col col-7">
                        <div>
                            <h1>What do you need?</h1>
                        </div>
                    </div>
                    <div className="col col-5">
                        <div className="row">
                            <div className="col">

                            </div>
                            <div className="col">
                                <button class="btn btn-light" type="submit">Back</button>
                            </div>
                            <div className="col">
                                <button class="btn btn-light" type="submit">Next</button>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="container text-center">
                    <div className="row">
                        <div class="col">
                        <button type="button" class="btn btn-outline-secondary text-white bg-light bg-opacity-25">
                            <div> <img src="https://cdn-icons-png.flaticon.com/512/2165/2165117.png" width="200" height="200" class="rounded mx-auto d-block" alt="..."/> </div>
                            <div>Gaming</div>
                            </button>
                        </div>
                        <div class="col">
                        <button type="button" class="btn btn-outline-secondary text-white bg-light bg-opacity-25">
                            <div> <img src="https://cdn-icons-png.flaticon.com/512/2857/2857433.png" width="200" height="200" class="rounded mx-auto d-block" alt="..."/> </div>
                            <div>Design</div>
                            </button>
                        </div>
                        <div class="col">
                        <button type="button" class="btn btn-outline-secondary text-white bg-light bg-opacity-25">
                            <div> <img src="https://cdn-icons-png.flaticon.com/512/80/80429.png" width="200" height="200" class="rounded mx-auto d-block" alt="..."/> </div>
                            <div>Coding</div>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="container text-center">
                    <div className="row">
                        <div class="col">
                        <button type="button" class="btn btn-outline-secondary text-white bg-light bg-opacity-25">
                            <div> <img src="https://cdn-icons-png.flaticon.com/512/2818/2818206.png" width="200" height="200" class="rounded mx-auto d-block" alt="..."/> </div>
                            <div>Rendering</div>
                            </button>
                        </div>
                        <div class="col">
                        <button type="button" class="btn btn-outline-secondary text-white bg-light bg-opacity-25">
                            <div> <img src="https://cdn4.iconfinder.com/data/icons/company-structure-6/64/capacity-company-organization-corporate-management-512.png" width="200" height="200" class="rounded mx-auto d-block" alt="..."/> </div>
                            <div>Office</div>
                            </button>
                        </div>
                        <div class="col">
                        <button type="button" class="btn btn-outline-secondary text-white bg-light bg-opacity-25">
                            <div> <img src="https://cdn-icons-png.flaticon.com/512/101/101187.png" width="200" height="200" class="rounded mx-auto d-block" alt="..."/> </div>
                            <div>Other</div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>



}

export default Pantalla10