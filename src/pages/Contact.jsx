import Navbar from "../components/Navbar";
import github from "../assets/github-icon.png"
import twitter from "../assets/twitter-icon.png"
import email from "../assets/email-icon.png"
import Footer from "../components/Footer"
import { motion } from "framer-motion";

function Contact() {
    return (
        <>
            <div className="min-h-screen flex flex-col">
                <Navbar />

                <main className="flex-1">
                    <div class="flex items-center justify-center mt-[10%] ">
                        <div class="flex flex-col gap-6">

                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                className="hover:mix-blend-luminosity mix-blend-luminosity"
                            >
                                <a href="https://github.com/shreyashkakad/dotfiles-web" target="_blank" className="flex items-center bg-[#4B454533] rounded-[6px] px-4 hover:bg-[#4B4545] transition-all duration-300 ease-in-out">
                                    <img src={github} alt="github-icon" className="h-[43px] w-[43px] p-1" />
                                    <p className="inter-bold ml-1 pr-3 text-[20px]">Github</p>
                                </a>
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                className="hover:mix-blend-luminosity mix-blend-luminosity"
                            >
                                <a href="https://x.com/shreyash_039" target="_blank" className="flex items-center bg-[#4B454533] rounded-[6px] px-4 hover:bg-[#4B4545] transition-all duration-300 ease-in-out">
                                    <img src={twitter} alt="github-icon" className="h-[45px] w-[45px]" />
                                    <p className="inter-bold ml-1 pr-3 text-[20px]">Twitter</p>
                                </a>
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                className="hover:mix-blend-luminosity mix-blend-luminosity"
                            >
                                <a href="mailto:shreyashvkakad@gmail.com" className="flex items-center bg-[#4B454533] rounded-[6px] px-4 hover:bg-[#4B4545] transition-all duration-300 ease-in-out">
                                    <img src={email} alt="github-icon" className="h-[45px] w-[45px]" />
                                    <p className="inter-bold ml-1 pr-3 text-[20px]">Email</p>
                                </a>
                            </motion.button>

                        </div>
                    </div>
                </main>

                <Footer />
            </div>

        </>
    );
}

export default Contact;