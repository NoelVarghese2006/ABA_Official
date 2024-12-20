import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

import '@/styles/global.css'

const App = ({Component, pageProps}) => {
    const router = useRouter();

    return (
        <AnimatePresence mode="wait">
            <motion.div key={router.pathname}>
                <Component {...pageProps} />
                <motion.div
                    className="slide-in"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 0 }}
                    exit={{ scaleY: 1 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                ></motion.div>

                <motion.div
                    className="horizontal-right"
                    initial={{ scaleX: 0 }}  
                    animate={{ scaleX: 0}}    
                    exit={{ scaleX: 1 }}     
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
                ></motion.div>

                <motion.div
                    className="horizontal-left"
                    initial={{ scaleX: 1 }}  
                    animate={{ scaleX: 0}}    
                    exit={{ scaleX: 0 }}     
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
                ></motion.div>

                <motion.div
                    className="slide-out"
                    initial={{ scaleY: 1 }}
                    animate={{ scaleY: 0 }}
                    exit={{ scaleY: 0 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1]}}
                ></motion.div>
            </motion.div>
        </AnimatePresence>
    )
}

export default App;