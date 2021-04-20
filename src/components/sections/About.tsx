import Experience from './Experience'

const About = () => {
    return (
        <section className="bg-gray-200">
            <main className="profile-page">
                <section className="relative py-20">
                    <div className="max-w-5xl container mx-auto ">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-md rounded-lg -mt-64">
                            <div className="px-6">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                        <div className="relative">
                                            <img
                                                alt="Tafadzwa Makuyana"
                                                className="shadow-xl rounded-full h-autuo align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                                                style={{ maxWidth: "150px" }}
                                                src="https://firebasestorage.googleapis.com/v0/b/portfolio-154db.appspot.com/o/hero.jpg?alt=media&token=a1513872-b5e5-4b3b-8f0d-2ce44425509d"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                                        <div className="py-6 px-3 mt-32 sm:mt-0">
                                            {/* <button
                                                className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                                                type="button"
                                                style={{ transition: "all .15s ease" }}
                                            >
                                                Connect
                                            </button> */}
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-4/12 px-4 lg:order-1">
                                        <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                            {/* <div className="mr-4 p-3 text-center">
                                                <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                                                    63
                                                </span>
                                                <span className="text-sm text-gray-500">Repositories</span>
                                            </div> */}
                                            {/* <div className="mr-4 p-3 text-center">
                                                <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">10</span>
                                                <span className="text-sm text-gray-500">Photos</span>
                                            </div>
                                            <div className="lg:mr-4 p-3 text-center">
                                                <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">89</span>
                                                <span className="text-sm text-gray-500">Comments</span>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center mt-12">
                                    <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">Tafadzwa Makuyana</h3>
                                    <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                                        <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i> Bangkok, Thailand
                                    </div>
                                    <div className="mb-2 text-gray-700 mt-2">
                                        <i className="fas fa-briefcase mr-2 text-lg text-gray-500"></i>Software Engineer
                                    </div>
                                </div>
                                <div className="mt-10 py-10 border-t border-gray-300 text-center">
                                    <div className="flex flex-wrap justify-center">
                                        <div className="w-full lg:w-9/12 px-4">
                                            <p className="mb-4 text-lg leading-relaxed text-gray-800">
                                                Hello! My name is Tafadzwa(Taf) and I enjoy creating things that live on the internet.
                                                My interest in IT started at a young age which grew to be more focused into software developmen
                                                — turns out hacking i enjoyed coding more than building a custom PCs.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Experience />
        </section>
    )
}

export default About;