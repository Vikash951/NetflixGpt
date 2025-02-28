const VideoTitle = ({title , description}) => {
    
    return (
        <div className="pt-80  absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
            <div className="font-bold ml-10 text-4xl">{title}</div>
            <p className="w-1/4 ml-10 mt-4">{description}</p>
            <div className=" ml-10  mt-4 flex">
                
                <button className="flex border rounded-md bg-white p-2 mr-4 px-4 border-gray-400 bg-gradient-to-r from-black hover:opacity-50">
                <img className ="w-5 mr-2" src="https://cdn-icons-png.flaticon.com/128/254/254434.png" alt="arrow_icon" />
                Play</button>
                 
                <button className="flex border rounded-md bg-white p-2 px-4 text-black  border-gray-400 bg-gradient-to-r from-black hover:opacity-50">
                <img className="w-5 mr-2" src="https://cdn-icons-png.flaticon.com/128/471/471662.png" alt="" />
                More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle;