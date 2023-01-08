import React from 'react'

const ThankYou = () => {
    return (
        <div className="my-24">
            <section className="p-16">
                <div className="flex items-center justify-center p-6 rounded-full bg-primary max-w-fit mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-16 h-16">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>

                <h1 className="text-center font-extrabold text-5xl my-5">Thank you!</h1>

                <p className="text-center max-w-xl text-[#999]">
                    Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at <a className="italic underline" href="mailto:support@loremgaming.com">support@loremgaming.com</a>.
                </p>
            </section>
        </div >
    )
}

export default ThankYou