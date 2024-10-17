import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Projects() {
    const workExperience = [
        {
            company: "Rubiscape",
            role: "Software Engineer",
            date: "01 Jul 2024 - Present",
            logo: "/images/rubiscapelogo.png",
        },
        {
            company: "Rubiscape",
            role: "Associate Software Engineer",
            date: "13 Feb 2023 - 30 Jun 2024",
            logo: "/images/rubiscapelogo.png",
        }, {
            company: "Inteliment Technologies",
            role: "Associate Software Engineer",
            date: "1 Aug 2022 - 12 Feb 2023",
            logo: "/images/inteliment-logo.jpeg",
        }, {
            company: "Inteliment Technologies",
            role: "Project Trainee",
            date: "1 Feb 2022 - 31 July 2022",
            logo: "/images/inteliment-logo.jpeg",
        },
    ];

    const articles = [
        {
            name: "CSS Grid vs. Flexbox: Which Layout System Should You Use?",
            intro: "When building web layouts, two powerful CSS tools dominate the scene: CSS Grid and Flexbox. Both offer developers incredible flexibility and control over how elements are displayed, but they serve different purposes. In this post, we’ll explore the differences, strengths, and ideal use cases for both Grid and Flexbox, helping you decide which tool fits your project needs.",
            date: "14 Oct 2024",
            logo: "/images/inteliment-logo.jpeg",
            link: "https://medium.com/@saurabh.solanke_6285/css-grid-vs-flexbox-which-layout-system-should-you-use-78b26cad6782"
        },
        {
            name: "Understanding BEM: Blocks, Elements, and Modifiers for Better CSS",
            intro: "If you’ve spent any time working with CSS, you’ve likely encountered the struggle of maintaining large codebases, especially when stylesheets grow over time and complexity increases. Enter BEM (Block, Element, Modifier) — a popular CSS methodology that helps to keep your code scalable, maintainable, and readable.",
            date: "Sep 17, 2024",
            logo: "/images/rubiscapelogo.png",
            link: "https://medium.com/@saurabh.solanke_6285/understanding-bem-blocks-elements-and-modifiers-for-better-css-43b92d033765"

        },
        {
            name: "Bootstrap: A Beginner’s Guide to Mastering Frontend Development",
            intro: "In the fast-paced world of frontend development, having the right tools at your disposal can make all the difference. Among these tools, Bootstrap stands out as a versatile and powerful CSS framework that streamlines the process of building responsive and visually appealing websites. In this beginner’s guide, we’ll delve into the fundamentals of Bootstrap, exploring its features, advantages, and how you can leverage it to elevate your frontend development skills.",
            date: "Mar 19, 2024",
            logo: "/images/rubiscapelogo.png",
            link: "https://medium.com/@saurabh.solanke_6285/unleashing-creativity-a-beginners-guide-to-building-your-blog-with-medium-and-bootstrap-329406a4a851"

        },
    ];

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <div className="grid grid-cols-1 gap-8 h-fit px-9">
            <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
                <h1 className="text-3xl py-5 my-2 border-black font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-500 to-gray-700"  data-aos="fade-up">Blogs</h1>
                <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-1">
                    <div className="flex flex-col gap-16">
                        {articles.map((entry, index) => (
                            <article key={index} className="group relative flex flex-col items-start" data-aos="fade-up">
                                <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                                    <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"></div>
                                    {/* <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span> */}
                                    <span className="relative z-10">{entry.name}</span>
                                </h2>
                                <time className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5" dateTime="2022-09-05">
                                    <span className="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
                                        <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
                                    </span>{entry.date}
                                </time>
                                <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">{entry.intro}</p>
                                <div className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500">
                                    <a className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                                        href={entry.link} target="_blank" rel="noopener noreferrer">Read article
                                    </a>
                                </div>

                            </article>
                        ))}

                    </div>

                    {/* <div className="space-y-10 lg:pl-16 xl:pl-24"> */}
                        {/* <form  className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40" data-aos="fade-up" action="/thank-you">
                            <h2  className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                                <svg viewBox="0 0 24 24" fill="none"   aria-hidden="true"  className="h-6 w-6 flex-none"><path d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"  className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"></path><path d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"  className="stroke-zinc-400 dark:stroke-zinc-500"></path></svg><span  className="ml-3">Stay up to date</span></h2><p  className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Get notified when I publish something new, and unsubscribe at any time.</p><div  className="mt-6 flex"><input type="email" placeholder="Email address" aria-label="Email address" required=""  className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10" /><button  className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70 ml-4 flex-none" type="submit">Join</button>
                            </div>
                        </form> */}
                        {/* <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40" data-aos="fade-up">
                            <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6 flex-none">
                                    <path d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z" className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"></path>
                                    <path d="M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5" className="stroke-zinc-400 dark:stroke-zinc-500"></path>
                                </svg>
                                <span className="ml-3">Work</span>
                            </h2>
                            <ol className="mt-6 space-y-4">
                                {workExperience.map((entry, index) => (
                                    <li key={index} className="flex gap-4">
                                        <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                                            <img alt={entry.name} loading="lazy" width="32" height="32" decoding="async" data-nimg="1" className="h-7 w-7" style={{ color: 'transparent' }} src={entry.logo} />
                                        </div>
                                        <dl className="flex flex-auto flex-wrap gap-x-2">
                                            <dt className="sr-only">Company</dt>
                                            <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                                {entry.company}
                                            </dd>
                                            <dt className="sr-only">Role</dt>
                                            <dd className="text-xs text-zinc-500 dark:text-zinc-400">{entry.role}</dd>
                                            <dt className="sr-only">Date</dt>
                                            <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500" aria-label="2019 until Present">
                                                {entry.date}
                                            </dd>
                                        </dl>
                                    </li>
                                ))}
                            </ol>
                            <a className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 group mt-6 w-full"
                                href="https://drive.google.com/uc?export=download&id=1m57gRwzLtK4zcCKR2Yx3qjCo6BFdkyaX" download> Download CV   ↓
                            </a>
                        </div> */}
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}