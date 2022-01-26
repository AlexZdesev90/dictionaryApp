import React from 'react';

const Edit = ({closeEdit, array, }) => {


    return (
        <div>
            {array.map((i, idx) => { 
                return <div key={idx}>{i[0]}  -  {i[1]}{' '}<button onClick={console.log("!")}>delete</button></div>
            } )}
            <button onClick={closeEdit}>Close</button>
        </div>
    )
}

export default Edit;