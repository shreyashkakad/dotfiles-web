import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { fireStore } from "../firebase";
import { motion, AnimatePresence } from "framer-motion";
import LeftArrow from "../assets/left-arrow.png";
import RightArrow from "../assets/right-arrow.png";


function Explore() {
    const [users, setUsers] = useState([]);
    const [copiedIndex, setCopiedIndex] = useState(null);
    const [imageIndexes, setImageIndexes] = useState({});
    const [direction, setDirection] = useState(0);


    useEffect(() => {
        const unsubscribe = onSnapshot(collection(fireStore, "users"), (snapshot) => {
            const userList = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setUsers(userList);

            const initialIndexes = {};
            userList.forEach(user => {
                initialIndexes[user.id] = 0;
            });
            setImageIndexes(initialIndexes);
        });

        return () => unsubscribe();
    }, []);


    const handleNextImage = (userId, total) => {
        setDirection(1);
        setImageIndexes((prev) => ({
            ...prev,
            [userId]: (prev[userId] + 1) % total,
        }));
    };

    const handlePrevImage = (userId, total) => {
        setDirection(-1);
        setImageIndexes((prev) => ({
            ...prev,
            [userId]: (prev[userId] - 1 + total) % total,
        }));
    };



    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center justify-center mt-[3%] max-md:ml-[1%]">
                {users.map((user, index) => {
                    const imageList = user.imageURLs || [];
                    const currentImageIndex = imageIndexes[user.id] || 0;

                    return (
                        <div key={user.id} className="bg-[#2A2A2E33] w-[750px] max-md:w-[350px] p-5 flex flex-col rounded-md text-[#D1D5DB] mb-[4%] ">

                            <div className="image-div relative w-full h-[450px] max-md:h-[225px] overflow-hidden rounded-md">
                                <AnimatePresence mode="wait" initial={false}>
                                    <motion.img
                                        key={imageList[currentImageIndex]}
                                        src={imageList[currentImageIndex]}
                                        alt={`user-${currentImageIndex}`}
                                        custom={direction}
                                        initial={(dir) => ({ x: dir > 0 ? 100 : -100, opacity: 0 })}
                                        animate={{ x: 0, opacity: 1 }}
                                        exit={(dir) => ({ x: dir > 0 ? -100 : 100, opacity: 0 })}
                                        transition={{
                                            x: { type: "tween", duration: 0.2, ease: "easeOut" },
                                            opacity: { duration: 0.15 }
                                        }}
                                        className="absolute top-0 left-0 w-full h-full object-contain rounded-md"
                                    />
                                </AnimatePresence>


                                <button
                                    onClick={() => handlePrevImage(user.id, imageList.length)}
                                    className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/30 text-white px-2 py-2 rounded-full hover:bg-black/70 z-10 hover:cursor-pointer"
                                >
                                    <img src={LeftArrow} alt="Left-arrow-png" className="h-[20x] w-[15px]" />
                                </button>

                                <button
                                    onClick={() => handleNextImage(user.id, imageList.length)}
                                    className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/30 text-white px-2 py-2 rounded-full hover:bg-black/70 z-10 hover:cursor-pointer"
                                >
                                    <img src={RightArrow} alt="Left-arrow-png" className="h-[20x] w-[15px]" />
                                </button>
                            </div>


                            <div className="tags-div flex gap-4 justify-start mt-[1.3%] ml-[2px]">
                                <p className="pl-2 pr-2 bg-[#FFFFFFCC] inter-bold text-[14px] text-black rounded-sm">{user.os}</p>
                                <p className="pl-2 pr-2 bg-[#FFFFFFCC] inter-bold text-[14px] text-black rounded-sm">{user.wm}</p>
                            </div>

                            <div className="description-div flex flex-col mt-[2%] inter-bold text-[14px] ml-[2px]">
                                <p className="mb-[2px]">Description: </p>
                                <p className="mt-[2px] bg-[#1F1F23CC] p-3 pl-4 rounded-sm inter-light whitespace-pre-wrap">{user.description}</p>
                            </div>

                            <div className="github-div flex flex-col mt-[2%] inter-bold text-[14px] ml-[2px]">
                                <p className="mb-[2px]">Github Repo Link: </p>

                                <div className="link-div flex mt-2 justify-between max-md:flex-col">
                                    <p className="mt-[2px] bg-[#1F1F23CC] pl-4 pr-4 p-1 rounded-sm inter-light max-md:overflow-hidden">{user.github}</p>

                                    <div className="buttons-div flex gap-4 max-md:mt-2">
                                        <button
                                            onClick={() => {
                                                navigator.clipboard.writeText(user.github)
                                                    .then(() => {
                                                        setCopiedIndex(index);
                                                        setTimeout(() => setCopiedIndex(null), 2000);
                                                    });
                                            }}
                                            disabled={copiedIndex === index}
                                            className={`pl-2 pr-2 rounded-sm active:scale-95 disabled:cursor-not-allowed ${copiedIndex === index
                                                ? 'bg-gray-500 text-gray-300 cursor-not-allowed'
                                                : 'bg-[#3B82F6] hover:cursor-pointer'
                                                }`}
                                        >
                                            {copiedIndex === index ? 'Copied' : 'Copy'}
                                        </button>

                                        <button
                                            onClick={() => window.open(user.github, '_blank')}
                                            className="bg-[#3B82F6] pl-2 pr-2 rounded-sm hover:cursor-pointer active:scale-95"
                                        >
                                            Open
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default Explore;
