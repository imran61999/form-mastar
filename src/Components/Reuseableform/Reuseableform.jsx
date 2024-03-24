import React from 'react';

const Reuseableform = ({formtitle}) => {

    const handlesubmit = e => {
        e.preventDefault();
    }

    return (
        <div>
            <h2>{formtitle}</h2>
            <form onSubmit={handlesubmit}>
                <input type="text" name='name' />
                <br />
                <input type="password" name='password' />
                <br />
                <input type="mail" name='mail' />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Reuseableform;