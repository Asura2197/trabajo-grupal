import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const Pantalla5 = () => {


    const [fisrtName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [adress, setAdress] = useState("")
    const [city, setCity] = useState("")
    const [aparsuetc, setAparsuetc] = useState("")
    const [postalZip, setPostalZip] = useState("")
    const [countryRegion, setCountryRegion] = useState("")
    const [phone, setPhone] = useState("")



    // Hook navegacion
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
                    <div class="col col-3">
                        <div class="d-grid gap-2 col-6 mx-auto">
                            <button class="btn btn-light" type="button">Orden History</button>
                            <button class="btn btn-light" type="button">Profile Info</button>
                            <button class="btn btn-light" type="button">Log Out</button>
                        </div>
                    </div>
                    <div className="col col-9">
                        <div className="container">
                            <div className="row ">
                                <div className="col col-3">
                                    <div class="card" >
                                        <div class="card-body">
                                            <p class="card-title mb-2 text-muted">Default</p>
                                            <p class="card-subtitle mb-2 text-muted">Ed Va</p>
                                            <p class="card-subtitle mb-2 text-muted">United State</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-9">
                                    <div class="row g-2">
                                        <div class="col-md">
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <label className="form-label">
                                                        Fisrt Name
                                                    </label>
                                                    <input className="form-control"
                                                        value={fisrtName}
                                                        onChange={(evt) => setFirstName(evt.target.value)} />
                                                </div>
                                                <div class="col-sm-6">
                                                    <label className="form-label">
                                                        Last Name
                                                    </label>
                                                    <input className="form-control"
                                                        value={lastName}
                                                        onChange={(evt) => setLastName(evt.target.value)} />
                                                </div>
                                            </div>
                                            <div class="col">
                                                <label className="form-label">
                                                    Email
                                                </label>
                                                <input className="form-control"
                                                    value={email}
                                                    onChange={(evt) => setEmail(evt.target.value)} />
                                            </div>
                                            <div class="col">
                                                <label className="form-label">
                                                    Adress
                                                </label>
                                                <input className="form-control"
                                                    value={adress}
                                                    onChange={(evt) => setAdress(evt.target.value)} />
                                            </div>
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <label className="form-label">
                                                        Aparmaent, suit, etc
                                                    </label>
                                                    <input className="form-control"
                                                        value={aparsuetc}
                                                        onChange={(evt) => setAparsuetc(evt.target.value)} />
                                                </div>
                                                <div class="col-sm-6">
                                                    <label className="form-label">
                                                        City
                                                    </label>
                                                    <input className="form-control"
                                                        value={city}
                                                        onChange={(evt) => setCity(evt.target.value)} />
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <label className="form-label">
                                                        Country/Region
                                                    </label>
                                                    <select className="form-select"
                                                        value={countryRegion}
                                                        onChange={(evt) => setCountryRegion(evt.target.value)}>
                                                        <option value={-1}>--- Selecct the country or region ---</option>
                                                        <option value={1}>United States</option>
                                                        <option value={2}>Peru</option>
                                                        <option value={3}>Uruguay</option>
                                                        <option value={4}>France</option>
                                                    </select>
                                                </div>
                                                <div class="col-sm-6">
                                                    <label className="form-label">
                                                        Postal/zip code
                                                    </label>
                                                    <input className="form-control"
                                                        value={postalZip}
                                                        onChange={(evt) => setPostalZip(evt.target.value)} />
                                                </div>
                                            </div>
                                            <div class="col">
                                                <label className="form-label">
                                                    Phone
                                                </label>
                                                <input className="form-control"
                                                    value={phone}
                                                    onChange={(evt) => setPhone(evt.target.value)} />
                                            </div>

                                            <div class="btn-group">
                                                <a href="#" class="btn btn-primary active" aria-current="page">Update Info</a>
                                                <a href="#" class="btn btn-primary active" aria-current="page">Cancel</a>

                                            </div>
                                        </div>
                                        <div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Pantalla5

