import Spinner from 'react-bootstrap/Spinner';

const Loader = () => {
    return (
        <>
            <Spinner animation="grow" variant="primary"
                     style={{ width:"150px", height:"150px", margin:"auto", display:"block"}} />
        </>
    );
};

export default Loader;