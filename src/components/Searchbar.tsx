import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function Searchbar() {
    return (
        <div className="bg-white flex rounded-lg mx-4 mt-4 h-10">
            <div className='mx-4 top-0 bottom-0 m-auto'>
            <FontAwesomeIcon icon={faMagnifyingGlass} size="lg"/>
            </div>
            <input type="text" name="" id="" placeholder="Search"  className="w-full rounded-r-lg"/>
        </div>
    )
}

export default Searchbar