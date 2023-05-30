import React from "react";
import millify from 'millify' ;
import { useGetCryptosQuery } from "../services/cryptoApi";
import { Cryptocurrencies } from "../components";
import { Link } from "react-router-dom";

const CryptoPrice = () => {
    const { data, isFetching } = useGetCryptosQuery(12);
    //console.log(data);
    const globalStats = data?.data?.stats;
    if(isFetching) return 'Loading ...';
    return (
        <div className="flex flex-col w-full justify-center items-center">

            <div className="flex mf:flex-col flex-col items-start justify-between md:p-20 py-12 px-4 font-white">

                <div className="flex justify-center flex-col mt-10 ml-20 mf:mr-10 divide-y">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-3xl font-medium text-white text-gradient">Crypto Currencies Stats</h3>
                        <p className="mt-1 max-w-2xl text-sm text-white">Details</p>
                    </div>
                    <div className="grid grid-cols-2  gap-2">
                            <div className="bg-dark-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-1xl font-light text-white">Total Crypto Currencies</dt>
                                <dd className="mt-1 text-lg text-gray-300 sm:mt-0 sm:col-span-2">{globalStats.total}</dd>
                            </div>
                            <div className="bg-light px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-1xl font-light text-white">Total Exchanges</dt>
                                <dd className="mt-1 text-lg text-gray-300 sm:mt-0 sm:col-span-2">{millify(globalStats.totalExchanges)}</dd>
                            </div>
                            <div className="bg-dark-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-1xl font-light text-white">Total market Cap</dt>
                                <dd className="mt-1 text-lg text-gray-300 sm:mt-0 sm:col-span-2">{millify(globalStats.totalMarketCap)}</dd>
                            </div>
                            <div className="bg-dark px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-1xl font-light text-white">Total 24h volume</dt>
                                <dd className="mt-1 text-lg text-gray-300 sm:mt-0 sm:col-span-2">{millify(globalStats.total24hVolume)}</dd>
                            </div> 
                            <div className="bg-dark px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-1xl font-light text-white">Total Markets</dt>
                                <dd className="mt-1 text-lg text-gray-300 sm:mt-0 sm:col-span-2">{millify(globalStats.totalMarkets)}</dd>
                            </div>                                    
                    </div>
                </div>
                <br /><br />
                <div className="flex flex-col items-center justify-start w-full mf:mt-0 mt-10 text-white">
                    <div>
                        <Cryptocurrencies simplified/>
                        <h2 className="m-20"><Link to="/cryptoPrice">Show More</Link></h2>
                    </div>
                </div>                
            </div>
        </div>
    )
}
export default CryptoPrice;