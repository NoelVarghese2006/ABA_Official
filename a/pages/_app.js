import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import '@/styles/global.css'

const App = ({Component, pageProps}) => {
    const router = useRouter();
    const verses = [
        "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life. (John 3:16)",
        "But God demonstrates his own love for us in this: While we were still sinners, Christ died for us. (Romans 5:8)",
        "For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord. (Romans 6:23)",
        "Therefore, there is now no condemnation for those who are in Christ Jesus. (Romans 8:1)",
        "For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God— not by works, so that no one can boast. (Ephesians 2:8-9)",
        "For what I received I passed on to you as of first importance: that Christ died for our sins according to the Scriptures, that he was buried, that he was raised on the third day according to the Scriptures. (1 Corinthians 15:3-4)"
    ];

    const [index, setIndex] = useState(Math.floor(Math.random() * verses.length));

    useEffect(() => {
        // Set a new index only when the transition to a new component starts
        const handleRouteChange = () => {
            setIndex(Math.floor(Math.random() * verses.length));
        };

        router.events.on('routeChangeStart', handleRouteChange);

        return () => {
            router.events.off('routeChangeStart', handleRouteChange);
        };
    }, [router.events, verses.length]);

    return (
        <AnimatePresence mode="wait">
            <motion.div key={router.pathname}>
                <Component {...pageProps} />
                <motion.div
                    className="slide-in"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 0 }}
                    exit={{ scaleY: 1 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                ><h1>{verses[index]}</h1></motion.div>
                <motion.div
                    className="slide-out"
                    initial={{ scaleY: 1 }}
                    animate={{ scaleY: 0 }}
                    exit={{ scaleY: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 1}}
                ><h1>{verses[index]}</h1></motion.div>
            </motion.div>
        </AnimatePresence>
    )
};

export default App;