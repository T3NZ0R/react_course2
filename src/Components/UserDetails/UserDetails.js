import React from 'react';

import "./UserDetails.css"

const UserDetails = ({user, getUserId}) => {

    const {id, name, username, email, phone, website, address, company } = user;

    return (
        <div className={"wrap"}>
            <h2>User Details</h2>
            <div className={"user"}>
                <div className={"info"}>
                    <h3>Private information</h3>
                    <div>
                        ID: {id}
                    </div>

                    <div>
                        Name: {name}
                    </div>

                    <div>
                        Username: {username}
                    </div>

                    <div>
                        Email: {email}
                    </div>

                    <div>
                        Phone: {phone}
                    </div>

                    <div>
                        Website: {website}
                    </div>
                </div>
                    <div className={"address"}>
                        <h3>Address</h3>
                        <div>
                            Street: {address.street}
                        </div>

                        <div>
                            Suite: {address.suite}
                        </div>

                        <div>
                            City:{address.city}
                        </div>

                        <div>
                            Zipcode:{address.zipcode}
                        </div>

                        <div className={"geo"}>
                            <h4>Geolocation</h4>
                            <div>
                                Latitude: {address.geo.lat}
                            </div>
                            <div>
                                Longitude:{address.geo.lng}
                            </div>
                        </div>


                    </div>

                    <div className={"company"}>
                        <h3>Company</h3>
                        <div>
                            Name:{company.name}
                        </div>
                        <div>
                            CatchPhrase:{company.catchPhrase}
                        </div>
                        <div>
                            BS:{company.bs}
                        </div>
                    </div>

            </div>
            <button onClick={()=>{getUserId(id)}}>Get posts</button>
        </div>
    );
};

export default UserDetails;