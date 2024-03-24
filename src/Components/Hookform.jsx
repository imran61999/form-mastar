import useinputstate from "../Hooks/useinputstate";

const Hookform = () => {
    const [name , handelNameChange] = useinputstate('imran');

    const handelsubmit = e => {
        console.log(name);
        e.priventDefault();
    }
    return (
        <div>
            <form onSubmit={handelsubmit}>
                <input value={name} onChange={handelNameChange} type="text" name="name"/>
                <br />
                <input type="email" name="email" />
                <br />
                <input type="password" name="password" />
                <br />
                <input type="submit" value='Submit' />
            </form>
        </div>
    );
};

export default Hookform;