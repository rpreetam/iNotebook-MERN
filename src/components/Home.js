import Notes from './Notes'
import React from 'react'
import { useHistory } from 'react-router-dom';

export const Home = (props) => {
    const history = useHistory();
    const authtoken = localStorage.getItem('token');

    return (

        <>
            {
                authtoken ?
                    <div>
                        <Notes showAlert={props.showAlert} />
                    </div> : history.push("/login")
            }
        </>
    )
}