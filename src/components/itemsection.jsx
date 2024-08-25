

import Singleitem from "./singleitem";



const Itemsection = ({items}) => {




   const fewItems = items.slice(0,6);

    return (
        <div className="my-12">

            <div className="flex flex-col items-center justify-center mb-6">
            <h1 className="text-5xl font-bold">Popular items trending this week</h1>
            <p className="text-[18px]"> purchase them today </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-6">
            {
                fewItems.map(item => (
                    <Singleitem key={item._id} item={item}></Singleitem>
                )

                )
            }
            </div>
        </div>
    );
};

export default Itemsection;