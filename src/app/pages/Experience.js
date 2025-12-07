import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const experiences = [
    {
        company: "KIOT Innovations",
        role: "Software Engineer",
        period: "May 2025 – Present",
        location: "Hyderabad",
        description: [
            "Taking full ownership of the frontend development for a major client-facing project using Nuxt.js, contributing to architecture decisions and UI strategy.",
            "Designing and implementing responsive dashboards with ShadCN components, ensuring accessibility, performance, and modern UX standards.",
            "Actively involved in unit testing, code reviews, and merging staging code to main, maintaining build stability and production quality.",
            "Leading client interactions to plan and prioritize new modules, converting business needs into scalable technical features."
        ]
    },
    {
        company: "Rubiscape",
        role: "Software Engineer",
        period: "Jul 2024 - Nov 2024",
        location: "Pune",
        description: [
            "Continuing to drive development of our core product, leveraging Agile methodologies to ensure high-quality, timely deliverables.",
            "Focusing on enhancing scalability and performance of the web application.",
            "Leading efforts to optimise frontend-backend integration and improve overall user experience.",
            "Spearheading initiatives to create more robust, reusable code libraries and enforcing coding standards to boost team productivity and maintain product consistency.",
            "Gained 6 months of hands-on experience working with the Ionic framework, building cross-platform mobile applications, implementing native features with Capacitor, and delivering responsive, user-friendly interfaces."
        ]
    },
    {
        company: "Rubiscape",
        role: "Associate Software Engineer",
        period: "Feb 2023 - Jun 2024",
        location: "Pune",
        description: [
            "Successfully led multiple projects applying Agile methodologies, promoted to Product development ensuring high-quality deliverables and timely completion.",
            "Transformed design concepts into fully functional web applications, focusing on usability and scalability.",
            "Collaborated with cross-functional teams to integrate frontend code with backend web services, optimising performance and user experience.",
            "Identified and resolved JavaScript and CSS defects promptly, maintaining high code quality standards.",
            "Developed reusable code snippets and standards to streamline development processes and promote consistency across projects."
        ]
    },
    {
        company: "Inteliment Technologies",
        role: "Associate Software Engineer",
        period: "Aug 2022 - Feb 2023",
        location: "Pune",
        description: [
            "Project : Data as a Service | Client : Bajaj Auto",
            "Played a key role in the development of frontend components for web applications, ensuring compatibility across various browsers and devices.",
            "Implemented responsive design principles to deliver seamless user experiences across desktop and mobile platforms.",
            "Conducted JavaScript unit testing using Jasmine, ensuring robust and reliable code.",
            "Contributed to the optimisation of existing JavaScript code, improving performance and maintainability."
        ]
    },
    {
        company: "Inteliment Technologies",
        role: "Project Trainee",
        period: "Feb 2022 - July 2022",
        location: "Pune",
        description: [
            "Assisted in the development of frontend components for web applications under the guidance of senior developers.",
            "Collaborated with the design team to implement user interface designs and enhance user experience."
        ]
    },
    {
        company: "Phaico",
        role: "Intern Web Developer",
        period: "July 2021 - August 2021",
        location: "Remote",
        description: [
            "Designed and implemented a responsive landing page using CSS and JavaScript.",
            "Focused on enhancing visual aesthetics and improving user experience.",
            "Collaborated with the team to ensure seamless design consistency."
        ]
    }
];

const ExperienceCard = ({ experience, index }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center"]
    });

    const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
    const y = useTransform(scrollYProgress, [0, 1], [50, 0]);

    return (
        <motion.div
            ref={ref}
            style={{ opacity, y }}
            className="relative pl-8 sm:pl-12 py-6 group"
        >
            {/* Timeline Dot */}
            <div className="absolute left-0 top-8 w-4 h-4 rounded-full bg-gray-200 dark:bg-gray-800 border-2 border-blue-500 z-10 group-hover:scale-125 transition-transform duration-300" />

            {/* Content Card */}
            <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 dark:border-gray-800 hover:bg-white/80 dark:hover:bg-gray-900/80 transition-colors duration-300 shadow-sm hover:shadow-md">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {experience.role}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">
                            {experience.company}
                        </p>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-mono bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full w-fit">
                        {experience.period}
                    </div>
                </div>

                <div className="mb-4 text-sm text-gray-500 dark:text-gray-500 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {experience.location}
                </div>

                <ul className="space-y-2">
                    {experience.description.map((item, i) => (
                        <li key={i} className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex items-start gap-2">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400/60 flex-shrink-0" />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
};

export default function Experience() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <div className="max-w-4xl mx-auto py-20" ref={containerRef}>
            <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-bold mb-4 text-black dark:text-white">
                    Experience
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                    My professional journey and career milestones
                </p>
            </div>

            <div className="relative">
                {/* Vertical Line Background */}
                <div className="absolute left-[7px] sm:left-[7px] top-8 bottom-8 w-0.5 bg-gray-200 dark:bg-gray-800" />

                {/* Progress Bar */}
                <motion.div
                    style={{ scaleY, originY: 0 }}
                    className="absolute left-[7px] sm:left-[7px] top-8 bottom-8 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"
                />

                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <ExperienceCard key={index} experience={exp} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}