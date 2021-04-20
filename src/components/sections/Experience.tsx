

const Experience = () => {
    return (
        <section id="about" className="pb-10 bg-gray-200">
            <div className="max-w-5xl container mx-auto px-6 lg:px-0">
                <div className="mb-16">
                    <h2 className="text-4xl mb-5"><span className="text-teal-300">_</span>Experience</h2>
                </div>
            </div>
            <div className="max-w-5xl container mx-auto flex flex-wrap mt-2">
                <div className="w-full mb-12 xl:mb-0">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                        <div className="items-center px-6 py-3">
                            <h3 className="font-semibold text-base text-blueGray-700">
                                Here are a few technologies I've been working with recently:
                            </h3>
                        </div>
                        <div className="block w-full overflow-x-auto shadow-md rounded-md">
                            {/* Projects table */}
                            <table className="items-center w-full bg-transparent border-collapse">
                                <thead className="thead-light">
                                    <tr>
                                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Front-End
                                        </th>
                                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Back-End
                                        </th>
                                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Other
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2 text-left">
                                            Javascript
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2">
                                            Nodejs
                                        </td><td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2">
                                            AWS(S3, EC2, RDS)
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2 text-left">
                                            Vuejs
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2">
                                            PHP
                                        </td><td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2">
                                            SQL
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2 text-left">
                                            Wordpress
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2">
                                            Python (Flask)
                                        </td><td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2">
                                            MongoDB
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Experience;