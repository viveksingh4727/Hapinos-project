import { CDN_URL } from "../utils/constants"

const ItemList = ({items}) => {
    console.log(items)
    return (
        <div>
            {items.map(item =>(
                <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                    <div className="w-9/12">
                    <div className="py-2 ">
                        <span>{item.card.info.name}</span>
                        <span> - ₹ {item.card.info.price / 100 || item.card.info.defaultPrice / 100}</span>
                    </div>
                    <p className="text-xs">{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12 p-4">
                        <div className="absolute">
                            <button className="p-2 rounded-lg bg-stone-200 text-black-400 mx-12 my-20 items-center">Add +</button>
                        </div>
                    <img src={CDN_URL + item.card.info.imageId} className="w-40 h-28 rounded-lg "/>
                    </div>
                </div>
            ) )}
        </div>
            
        
    )
}

export default ItemList