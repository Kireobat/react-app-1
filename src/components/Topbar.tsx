import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical, faGear, faBell } from '@fortawesome/free-solid-svg-icons'

function Topbar() {
    return (
        <div className="flex mx-4 justify-between pt-8">
            <h1 className="text-3xl font-bold">Klarna.</h1>
            <div className="flex space-x-4">
                <div className="bg-[#efe1eb] rounded-full px-4 py-2 aspect-square">
                    <div className='flex translate-y-2'>
                    <FontAwesomeIcon icon={faEllipsisVertical} size="lg" className='mr-0.5'/>
                    <FontAwesomeIcon icon={faEllipsisVertical} size="lg" className='mr-0.5'/>
                    <FontAwesomeIcon icon={faEllipsisVertical} size="lg"/>
                    </div>
                </div>
                <div className="bg-[#efe1eb] rounded-full px-4 py-2 aspect-square">
                    <FontAwesomeIcon icon={faBell} size="lg" className='translate-y-1'/>
                </div>
                <div className="bg-[#efe1eb] rounded-full px-4 py-2 aspect-square">
                    <FontAwesomeIcon icon={faGear} size="lg" className='translate-y-1'/>
                </div>
            </div>
        </div>
    )
}

export default Topbar