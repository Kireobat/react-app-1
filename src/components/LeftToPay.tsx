import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWallet } from '@fortawesome/free-solid-svg-icons'

function LeftToPay() {
    return (
        <div className="bg-white w-1/2 h-16 rounded-2xl mx-4">
            <div className='ml-4'>
                <div className='flex mt-2'>
                    <div className='flex flex-col justify-center'>
                        <FontAwesomeIcon icon={faWallet} size='lg' color='#70d3f8'/>
                    </div>
                    <h1 className='ml-2 font-bold text-xl'>$0</h1>
                </div>
                <h1 className='text-xs text-gray-500'>Nothing to pay</h1>
            </div>
        </div>
    )
}

export default LeftToPay