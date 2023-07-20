import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

function Popup() {
    return (
        <div className="bg-gray-100 bg-opacity-50 flex rounded-2xl mx-4 mt-8 h-20">
            <div className='mx-4 flex flex-col justify-center'><div className=' scale-150'>🔍</div></div>
            <div className='mt-0.5'>
                <h1 className='font-bold'>Compare prices. Save money</h1>
                <h2>Find deals with Klarna's price comparison.</h2>
            </div>
            <div className='mr-4 mt-1'>
            <FontAwesomeIcon icon={faXmark} size='lg'/>
            </div>
        </div>
    )
}

export default Popup