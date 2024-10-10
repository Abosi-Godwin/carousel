export const UserCard = ({ userDetails }) => {
    return (
        <div
            className="flex flex-col items-center justify-center gap-8 p-4
            w-9/10 bg-gray-800 rounded-xl bg-clip-padding backdrop-filter
            backdrop-blur-2xl
                bg-opacity-60 border-2 border-amber-100 py-10"
        >
            <div className="flex items-center justify-center">
                <div className="w-40 h-40 border border-amber-100 rounded-full p-1">
                    <img
                        src={userDetails.img}
                        alt="user's image"
                        className="w-full h-auto rounded-full border-2
                                border-amber-100 p-1"
                    />
                </div>
            </div>
            <div className="flex items-center justify-center flex-col text-white">
                <h1 className="font-bold text-2xl uppercase">
                    {userDetails.name}
                </h1>
                <h4
                    className="font-bold text-xl lowercase font-extralight
                font-montserrat"
                >
                    {userDetails.proff}
                </h4>
            </div>
            <div className="flex items-center justify-center">
                <button
                    className="bg-amber-100 p-2 uppercase text-black
                        font-bold rounded-md"
                >
                    Message
                </button>
            </div>
        </div>
    );
};
