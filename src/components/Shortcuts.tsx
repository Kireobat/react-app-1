import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStore, faHeart, faK, faTags, faBookmark } from '@fortawesome/free-solid-svg-icons'

const items = [
    {
        icon: faK,
        text: 'Shop',
        color: '#f3b7c5'
    },
    {
        icon: faStore,
        text: 'In-store',
        color: 'lightgreen'
    },
    {
        icon: faHeart,
        text: 'Rewards',
        color: '#f2c76e'
    },
    {
        icon: faTags,
        text: 'Deals',
        color: '#80e2f8'
    },
    {
        icon: faBookmark,
        text: 'Saved',
        color: '#864cf4'
    },

]

function ShortcutItem(props: {icon: any, text: string, color: string}) {

    const {icon, text, color} = props
    return (
        <div>
                <div className='bg-white p-2 rounded-2xl flex justify-center aspect-square h-12'>
                    <div className='flex flex-col justify-center'>
                    <FontAwesomeIcon icon={icon} size="lg" color={color}/>
                    </div>
                </div>
                <div className='flex justify-center'>
                <h2 className='text-gray-700 text-sm text-center'>{text}</h2>
                </div>
            </div>
    )
}

function Shortcuts() {
    return (
        <div className="flex mx-4 justify-evenly mt-6">
            {items.map((shortcut) => (
                <ShortcutItem icon={shortcut.icon} text={shortcut.text} color={shortcut.color}/>
            ))}
        </div>
    )
}

export default Shortcuts