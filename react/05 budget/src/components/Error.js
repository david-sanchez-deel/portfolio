import React from 'react';

const Error = ({ mensaje }) => {
    return (<p className="alert alert-danger error">{ mensaje || 'Hubo un error'}</p>);
}
 
export default Error;