import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HyprRice from "../assets/hypr-rice2.png";
import github from "../assets/github-icon.png";
import twitter from "../assets/twitter-icon.png";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";


function Home() {
    const words = ["Pick It", "Clone It", "Use It", "Tweak It", "Own It"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>

            <div className="min-h-screen flex flex-col">
                <Navbar />

                <main className="flex-1">
                    <div className="flex items-center mt-[7%] max-md:mt-[40%] justify-between max-md:flex-col">
                        <div className="hero ml-[16%] max-md:ml-[0%]">

                            <AnimatePresence mode="wait">
                                <motion.p
                                    key={index}
                                    className="inter-extra-bold-italic text-[45px] max-md:text-[30px]"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {words[index]}
                                </motion.p>
                            </AnimatePresence>

                            <p className="inter-bold text-20px max-md:text-[15px] leading-5 mt-[10px]">Access dotfiles easily. <br />
                                Pick what you like. <br />
                                Make it yours.</p>
                        </div>

                        <div class="flex flex-col mt-[20%] gap-2 md:hidden">

                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                className="hover:mix-blend-luminosity mix-blend-luminosity"
                            >
                                <a href="https://github.com/shreyash0x3/dotfiles-web" target="_blank" className="flex items-center bg-[#4B454533] rounded-[6px] px-4 hover:bg-[#4B4545] transition-all duration-300 ease-in-out">
                                    <img src={github} alt="github-icon" className="h-[40px] w-[40px] p-1" />
                                    <p className="inter-bold ml-1 pr-3 text-[16px]">Github</p>
                                </a>
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                className="hover:mix-blend-luminosity mix-blend-luminosity"
                            >
                                <a href="https://x.com/shreyash0x3" target="_blank" className="flex items-center bg-[#4B454533] rounded-[6px] px-4 hover:bg-[#4B4545] transition-all duration-300 ease-in-out">
                                    <img src={twitter} alt="github-icon" className="h-[40px] w-[40px]" />
                                    <p className="inter-bold ml-1 pr-3 text-[16px]">Twitter</p>
                                </a>
                            </motion.button>
                        </div>

                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="mr-[16%] mix-blend-luminosity hover:mix-blend-normal max-md:hidden"
                        >
                            { /* Image by https://github.com/1amSimp1e/dots*/}
                            <img src={HyprRice} alt="riced-os-image" className="w-[600px] h-[350px] rounded-xl" />
                        </motion.div>


                    </div>
                </main>

                <Footer />
            </div>

        </>
    );
}

export default Home;