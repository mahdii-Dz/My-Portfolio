import RotatingText from "../components/RotatingText";
import SplitText from "../components/SplitText";

function Home() {
    return (
        <section id="home" className="home w-full h-dvh text-white flex items-center pl-56 font-black">
            <div className="flex flex-col items-start">
                <SplitText
                    text="Hello,"
                    className="text-[40px] text-center"
                    delay={100}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                />
                <div>
                    <SplitText
                        text={`I'm`}
                        className="text-[48px] text-center"
                        delay={100}
                        duration={0.6}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="center"
                    />
                    <SplitText
                        text={`mahdi`}
                        className="text-[48px] ml-4 text-primary-500 text-center"
                        delay={100}
                        duration={0.6}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="center"
                    />
                </div>
                <div className="flex items-center gap-4 ">
                    <SplitText
                        text="I Work as a"
                        className="text-[48px] text-center"
                        delay={100}
                        duration={0.6}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="center"
                    />
                    <RotatingText
                        texts={['Front-end developer', 'UI/UX Designer']}
                        mainClassName="px-2 sm:px-2 md:px-3 text-[44px] bg-primary-500 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg z-10"
                        staggerFrom={"last"}
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-120%" }}
                        staggerDuration={0.025}
                        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                        transition={{ type: "spring", damping: 30, stiffness: 400 }}
                        rotationInterval={2500}
                    />
                </div>
            </div>
        </section >
    )
}

export default Home