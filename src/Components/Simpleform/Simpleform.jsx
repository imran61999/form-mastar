
const Simpleform = () => {
    const handleform = e =>{
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.phone.value);
        console.log('hello devloper');
    }
    return (
        <div>
            <form onSubmit={handleform}>

            <input type="text" name="name" />
            <br />
            <input type="email" name="email" />
            <br />
            <input type="text" name="phone" />
            <br />
            <input type="submit" value="Submit" />

            </form>
        </div>
    );
};

export default Simpleform;