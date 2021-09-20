import "./BackDrop.css";

export const BackDrop = ({show, click}) => {
    return (
     show && <div className='backdrop' onClick={click}>
            
        </div>
    )
}
export default BackDrop;
