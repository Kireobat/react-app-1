import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket } from '@fortawesome/free-solid-svg-icons'

function SpendingLimit() {
    return (
        <div className="bg-white w-1/2 h-16 rounded-2xl mx-4">
            <div className='ml-4'>
                <div className='flex mt-2'>
                    <div className='flex flex-col justify-center'>
                        <FontAwesomeIcon icon={faRocket} size='lg' color='#64d25e'/>
                    </div>
                    <h1 className='ml-4 text-xs text-gray-500 break-words'>How much can I spend?</h1>
                </div>
                
            </div>
        </div>
    )
}

export default SpendingLimit