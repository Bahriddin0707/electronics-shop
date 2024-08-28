import {Alert} from 'react-bootstrap';



const Message = ({variant,children}) => {
    return (
        <>
            <Alert variant={variant} className="my-5">
                {children}
            </Alert>
        </>
    );
};

Message.defaltProps={
    variant:"info",
}

export default Message;