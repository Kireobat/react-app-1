import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoxOpen, faBox, faSquareCheck, faTruckFast, faPlus} from '@fortawesome/free-solid-svg-icons'

const orderActionItems = [
    {
        icon: faBox,
        text: 'All orders',
        color: '#70d3f8'
    },
    {
        icon: faTruckFast,
        text: 'On its way',
        color: '#e6ba41'
    },
    {
        icon: faSquareCheck,
        text: 'Delivered',
        color: '#efc56c'
    },
    {
        icon: faBoxOpen,
        text: 'Returns',
        color: '#efc56c'
    },
]

function OrderActionItem(props: {icon: any, text: string, color: string}) {

    const {icon, text, color} = props
    return (
        <div>
                <div>
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

function OrdersAndTracking() {
    return (
        <div className='bg-white rounded-2xl mx-4 mt-4'>
            <div className='flex pt-4 space-x-4 justify-evenly'>
                {orderActionItems.map((item) => (
                    <OrderActionItem icon={item.icon} text={item.text} color={item.color}/>
                ))}
            </div>
            <hr className='mx-4 mt-2'/>
            <div className="flex h-10 mt-2 pb-2">
                <div className='bg-gray-200 px-1 rounded-full aspect-square mx-4 top-0 bottom-0 m-auto'>
                    <FontAwesomeIcon icon={faPlus} size="lg"/>
                </div>
                <h1 className='text-sm text-gray-500 top-0 bottom-0 m-auto ml-1'>Track all your orders</h1>
            </div>
        </div>
    )
}

export default OrdersAndTracking