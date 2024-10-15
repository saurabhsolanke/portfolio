export default function Techstacks() {
    return (
        <div>
            <div className="grid grid-cols-1 gap-8 h-fit px-9">
                <h1 className="text-3xl py-5 border-black font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-500 to-gray-700">Techstacks</h1>
            </div>
            <marquee behavior="scroll" direction="left" scrollamount="5">
                <div style={{ display: 'inline-block', marginRight: '10px' }}>
                    <img src="/images/angular.svg" alt="angular" className="h-15 w-60" />
                </div>
                <div style={{ display: 'inline-block', marginRight: '10px' }}>
                    <img src="/images/bootstrap.svg" alt="angular" className="h-15 w-60" />
                </div>
                <div style={{ display: 'inline-block', marginRight: '10px' }}>
                    <img src="/images/css.svg" alt="angular" className="h-15 w-60" />
                </div>
                <div style={{ display: 'inline-block', marginRight: '10px' }}>
                    <img src="/images/database.svg" alt="angular" className="h-15 w-60" />
                </div>
                <div style={{ display: 'inline-block', marginRight: '10px' }}>
                    <img src="/images/django.svg" alt="angular" className="h-15 w-60" />
                </div>
                <div style={{ display: 'inline-block', marginRight: '10px' }}>
                    <img src="/images/git.svg" alt="angular" className="h-15 w-60" />
                </div>
                <div style={{ display: 'inline-block', marginRight: '10px' }}>
                    <img src="/images/html-5.svg" alt="angular" className="h-15 w-60" />
                </div>
                <div style={{ display: 'inline-block', marginRight: '10px' }}>
                    <img src="/images/js-svgrepo-com.svg" alt="angular" className="h-15 w-60" />
                </div>
                <div style={{ display: 'inline-block', marginRight: '10px' }}>
                    <img src="/images/karma-svgrepo-com.svg" alt="angular" className="h-15 w-60" />
                </div>
                <div style={{ display: 'inline-block', marginRight: '10px' }}>
                    <img src="/images/nodejs-svgrepo-com.svg" alt="angular" className="h-15 w-60" />
                </div>
                <div style={{ display: 'inline-block', marginRight: '10px' }}>
                    <img src="/images/react-svgrepo-com.svg" alt="angular" className="h-15 w-60" />
                </div>
                <div style={{ display: 'inline-block', marginRight: '10px' }}>
                    <img src="/images/tailwind-svgrepo-com.svg" alt="angular" className="h-15 w-60" />
                </div>
                <div style={{ display: 'inline-block', marginRight: '10px' }}>
                    <img src="/images/typescript.svg" alt="angular" className="h-15 w-60" />
                </div>
            </marquee>
        </div>
    )
}

