<div>
                                        <div className="relative flex items-center bg-[#E7E7E7DB] text-sm font-normal border border-grey-500 rounded-lg">
                                            <div
                                                onClick={props.toggleDropdown}
                                                className="flex items-center p-4 cursor-pointer w-[90px] hover:bg-[#489BF6] group hover:rounded-lg"
                                            >
                                                <p className="font-[600] text-gray-700 group-hover:text-white">
                                                    {props.country}
                                                </p>
                                                <p className="font-[600] text-gray-700 group-hover:text-white pl-1">
                                                    {props.phoneCode}
                                                </p>

                                                <i className="fa fa-angle-down pl-1 group-hover:text-white"></i>
                                            </div>
                                            {props.isOpen && (
                                                <div className=" absolute z-[9999]  mt-56  rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1 h-[150px]  w-[200px] overflow-y-auto">
                                                    <input
                                                        id="search-input"
                                                        className="block w-full px-4 py-2 text-gray-800 border rounded-md  border-gray-300 focus:outline-none"
                                                        type="text"
                                                        placeholder="Search items"
                                                        onChange={
                                                            props.handleSearchInput
                                                        }
                                                    ></input>
                                                    {data
                                                        .filter((item) =>
                                                            item.name
                                                                .toLowerCase()
                                                                .includes(
                                                                    props.searchterm.toLowerCase()
                                                                )
                                                        )
                                                        .map((item, i) => (
                                                            <li
                                                                key={i}
                                                                className="block px-6 py-2 text-[14px] text-gray-700 text-center   hover:bg-[#489BF6] hover:text-white font-[600]  cursor-pointer rounded-md"
                                                                value={
                                                                    item.dial_code
                                                                }
                                                                onClick={(
                                                                    e
                                                                ) => {
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
                                                                {item.dial_code}
                                                                )
                                                            </li>
                                                        ))}
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
