import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Footer() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);
    return (
        <footer className="mt-32 flex-none" data-aos="fade-down">
            <div className="sm:px-8">
                <div className="mx-auto w-full max-w-7xl lg:px-8">
                    <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
                        <div className="relative px-4 sm:px-8 lg:px-12">
                            <div className="mx-auto max-w-2xl lg:max-w-5xl">
                                <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                                        {/* <a className="transition hover:text-teal-500 dark:hover:text-teal-400" href="/about" > About  </a>
                                        <a className="transition hover:text-teal-500 dark:hover:text-teal-400" href="/projects" >Projects </a>
                                        <a className="transition hover:text-teal-500 dark:hover:text-teal-400" href="/speaking">Speaking</a>
                                        <a className="transition hover:text-teal-500 dark:hover:text-teal-400" href="/uses">Uses</a> */}
                                        <a href="https://www.linkedin.com/in/saurabh-solanke/" target="_blank">
                                            <img src="/images/linkedin.svg" />
                                        </a>
                                        <a href="https://github.com/saurabhsolanke" target="_blank">
                                            <img src="/images/github.svg" />
                                        </a>
                                        <a href="https://stackoverflow.com/users/11864453/saurabh-solanke" target="_blank">
                                            <img src="/images/stack-overflow.svg" />
                                        </a>
                                        <a href="https://medium.com/@saurabh.solanke_6285" target="_blank">
                                            <img src="/images/medium.svg" />
                                        </a>
                                        <a href="https://dev.to/saurabhsolanke" target="_blank">
                                            <img src="/images/dev.svg" />
                                        </a>
                                    </div>
                                    <p className="text-sm text-zinc-400 dark:text-zinc-500">
                                        © 2024 Saurabh Solanke. All rights reserved.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

