import { twMerge } from "tailwind-merge";

function App() {
    return (
        <main className="bg-dark-main  flex justify-center items-center h-screen w-screen">
            <article className="bg-dark-card card-shadow p-6 pb-8  flex flex-col rounded-2xl gap-6">
                <a
                    href="/"
                    className="w-full max-w-80 relative aspect-square overflow-hidden rounded-xl group"
                >
                    <img
                        src="/images/image-equilibrium.jpg"
                        alt=""
                        className={twMerge("object-cover")}
                    />
                    <span className="absolute top-0 left-0 size-full grid place-items-center bg-cyan/0 group-hover:bg-cyan/50 smooth">
                        <img
                            src="/images/icon-view.svg"
                            className="opacity-0 group-hover:opacity-100 smooth"
                            alt=""
                        />
                    </span>
                </a>
                <a
                    href="/"
                    className="text-white hover:text-cyan text-2xl font-medium"
                >
                    Equilibrium #3429
                </a>
                <p className="font-light text-[19px] max-w-80">
                    Our Equilibrium collection promotes balance and calm.
                </p>

                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-[6px]">
                        <img src="/images/icon-ethereum.svg" alt="" />
                        <span className="text-cyan font-normal text-base">
                            0.041 ETH
                        </span>
                    </div>
                    <div className="flex items-center gap-[6px]">
                        <img src="/images/icon-clock.svg" alt="" />
                        <span className="font-light text-base text-blue-soft">
                            3 days left
                        </span>
                    </div>
                </div>
                <div className=" w-full border-t border-dark-line pt-4 flex gap-4 items-center">
                    <img
                        src="/images/image-avatar.png"
                        alt="avatar"
                        className="w-8 aspect-square border border-white rounded-full"
                    />
                    <h1 className="text-blue-soft text-base font-light">
                        Creation of{" "}
                        <a href="/" className="hover:text-cyan text-white">
                            Jules Wyvern
                        </a>
                    </h1>
                </div>
            </article>
        </main>
    );
}

export default App;
