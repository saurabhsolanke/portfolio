export default function Projects() {
    return (
        <div>
            <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
                <h3 className="text-lg font-semibold border-black bg-clip-text text-transparent bg-gradient-to-r from-slate-500 to-gray-700 mb-2">Work experience</h3>
                <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
                        <p className="font-semibold border-black bg-clip-text text-transparent bg-gradient-to-r from-slate-500 to-gray-700">Associate Software Engineer Inteliment, Aug 2022 - Present</p>
                        <p className="text-gray-500 md:w-2/3 h-fit">Designing end-to-end experience for financial products on mobile & web platforms. Working closely with managers, marketing specialists and developers.</p>
                        <ul className="text-gray-500 md:w-2/3 h-fit list-disc mt-2">
                            <li>Designed and developed large-scale data driven web applications</li>
                            <li>Accomplished seamless integrations with backend services using Angular, ensuring efficient communication between the frontend and backend components</li>
                            <li>Leveraged HTTP APIs to retrieve and send data, implementing robust data exchange mechanisms</li>
                            <li>Collaborated closely with backend developers to define API endpoints and data structures, ensuring accurate data flow and consistency</li>
                            <li>Proficiently managed code repositories on GitHub to ensure version control, collaboration, and codebase integrity</li>
                            <li>Regularly committed code changes, updates, and enhancements to maintain a well-documented history of the project's evolution.</li>
                        </ul>
                    </div>
                    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
                        <p className="font-semibold border-black bg-clip-text text-transparent bg-gradient-to-r from-slate-500 to-gray-700">Trainee</p>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}