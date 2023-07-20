import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard, faAddressCard, faImages, faBinoculars, faBagShopping, faPencil } from '@fortawesome/free-solid-svg-icons'

const items = [
    {
        icon: faCreditCard,
        text: 'Klarna Card',
        color: '#f1adc0'
    },
    {
        icon: faAddressCard,
        text: 'Loyalty cards',
        color: 'lightgreen'
    },
    {
        icon: faImages,
        text: '1x Cards',
        color: '#c9c9c9'
    },
    {
        icon: faBinoculars,
        text: 'Watch and shop',
        color: '#864df7'
    },
    {
        icon: faBagShopping,
        text: 'Luxury',
        color: '#eabe45'
    },
    {
        icon: faPencil,
        text: 'Edit favorites',
        color: '#000000'
    },

]

function FavoriteItem(props: {icon: any, text: string, color: string}) {

    const {icon, text, color} = props
    return (
        <div>
                <div className='bg-white p-2 rounded-2xl flex justify-center aspect-square h-12'>
                    <div className='flex flex-col justify-center'>
                    <FontAwesomeIcon icon={icon} size="lg" color={color}/>
                    </div>
                </div>
                <div className='flex justify-center w-[49px]'>
                    <h2 className='text-gray-700 text-xs break-words text-center'>{text}</h2>
                </div>
            </div>
    )
}

function Favorites() {
    return (
        <div className="flex mx-4 justify-evenly mt-6">
            {items.map((favorite) => (
                <FavoriteItem icon={favorite.icon} text={favorite.text} color={favorite.color}/>
            ))}
        </div>
    )
}

export default Favorites