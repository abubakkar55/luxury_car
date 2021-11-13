import React, { useState } from 'react'
import axios from 'axios';

const MakeAdmin = () => {

    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = { email };
        axios.put("https://fierce-everglades-12105.herokuapp.com//set_admin_role", { user })
            .then(res => {
                console.log(res);
            });
    }


    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="enter email address" />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
}

export default MakeAdmin
