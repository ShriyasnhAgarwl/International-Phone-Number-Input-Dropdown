<div
                                        onClick={props.toggleDropdown}
                                        className="cursor-pointer"
                                    >
                                        <div className="relative flex items-center bg-[#E7E7E7DB] text-sm font-normal border border-grey-500 rounded-lg">
                                            <div className="flex items-center p-4 cursor-pointer w-[90px] hover:bg-[#489BF6] group hover:rounded-lg">
                                                <p className="font-[600] text-gray-700 group-hover:text-white">
                                                    {props.country}
                                                </p>
                                                <p className="font-[600] text-gray-700 group-hover:text-white pl-1">
                                                    {props.phoneCode}
                                                </p>

                                                <i className="fa fa-angle-down pl-1 group-hover:text-white"></i>
                                            </div>
                                            {props.isOpen && (
                                                <div className=" absolute z-[9999]  mt-56  rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1 h-[150px] overflow-y-auto">
                                                    {/* <li
                                                        className="block px-6 py-2 text-gray-700 text-center  hover:bg-[#489BF6] hover:text-white font-[600]  cursor-pointer rounded-md"
                                                        value={"+91"}
                                                        onClick={(e) =>
                                                            props.togglePhone(
                                                                "+" +
                                                                    e.currentTarget.value.toString()
                                                            )
                                                        }
                                                    >
                                                        India (+91)
                                                    </li> */}

                                                    {data.map((item, i) => (
                                                        <li
                                                            className="block px-6 py-2 text-gray-700 text-center   hover:bg-[#489BF6] hover:text-white font-[600]  cursor-pointer rounded-md"
                                                            value={
                                                                item.dial_code
                                                            }
                                                            onClick={(e) => {
                                                                props.togglePhone(
                                                                    "+" +
                                                                        e.currentTarget.value.toString()
                                                                );
                                                                props.toggleCountry(
                                                                    item.code
                                                                );
                                                            }}
                                                        >
                                                            {item.name}(
                                                            {item.dial_code})
                                                        </li>
                                                    ))}

                                                    {/*<li
                                                        className="block px-2 py-2 text-gray-700 text-center   hover:bg-[#489BF6] hover:text-white font-[600]  cursor-pointer rounded-md"
                                                        value={"+1"}
                                                        onClick={(e) =>
                                                            props.togglePhone(
                                                                "+" +
                                                                    e.currentTarget.value.toString()
                                                            )
                                                        }
                                                    >
                                                        USA (+1)
                                                    </li>
                                                    <li
                                                        className="block px-6 py-2 text-gray-700 text-center   hover:bg-[#489BF6] hover:text-white font-[600]  cursor-pointer rounded-md"
                                                        value={"+971"}
                                                        onClick={(e) =>
                                                            props.togglePhone(
                                                                "+" +
                                                                    e.currentTarget.value.toString()
                                                            )
                                                        }
                                                    >
                                                        U.A.E (+971)
                                                    </li> */}
                                                </div>
                                            )}
                                            <input
                                                className="w-full text-grey  py-3 px-4 max-md:px-2 bg-[#E7E7E7DB]  focus:outline-none"
                                                type="text"
                                                placeholder="Enter phone no."
                                                required
                                                value={props.phoneNumber}
                                                onChange={props.handleEntry}
                                            />
                                        </div>
                                    </div>
