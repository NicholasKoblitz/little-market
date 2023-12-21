import {React, useState, useEffect} from "react";
import useParams from 'react-router-dom';


const UserPage = () => {


    const [user, setUser] = useState();
    const {userId} = useParams();

    useEffect(() => {
        async function fetchUser(useId) {
            const res = await fetch(`https://fakestoreapi.com/users/${userId}`);

            if(res.ok) {
                const data = await res.json();
                setUser(data);
            }
            else {
                throw new Error(`Error: Status Code ${res.status}`)
            }
        }
        fetchUser(userId);
    }, [])

    return (
        <div className="UserPage">
            <div className="UserPage-Body">
                <div className="UserPage-Username">
                    <span>Username</span>
                    <span>{user.username}</span>
                </div>
                <div className="UserPage-FirstName">
                    <span>First Name</span>
                    <span>{user.name.firstname}</span>
                </div>
                <div className="UserPage-LastName">
                    <span>Last Name</span>
                    <span>{user.name.lastname}</span>
                </div>
                <div className="UserPage-Email">
                    <span>Email</span>
                    <span>{user.email}</span>
                </div>
                <div className="UserPage-Address">
                    <span>Street Address</span>
                    <span>{user.address.street}</span>
                </div>
                <div className="UserPage-City">
                    <span>City</span>
                    <span>{user.address.city}</span>
                </div>
                <div className="UserPage-Zip">
                    <span>Zipcode</span>
                    <span>{user.address.zipcode}</span>
                </div>
            </div>
        </div>
    )
}

export default UserPage;