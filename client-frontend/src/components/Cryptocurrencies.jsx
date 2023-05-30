import React from "react";
import millify from "millify";
import { useState , useEffect} from "react";

import { useGetCryptosQuery } from "../services/cryptoApi";

const CryptoCard = ({ color, price, icon, name,rank, marketCap, dailyChange,id,coinUrl }) => (
      <a
            href={coinUrl}
            target="_blank"
            rel="noreferrer"
          >
        <div className="flex flex-row w-80 justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:drop-shadow-2xl" >
        <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
          {icon}
        </div>
        <div className="ml-5 flex flex-col flex-1 ">
          <div className="divide-y divide-dotted divide-yellow-700">
            <h3 className="mt-2 text-white text-lg ">{rank}.{name}</h3>
            <h3></h3>
          </div>
          <p className="mt-1 text-white text-sm md:w-9/12">Price: $ {price}</p>
          <p className="mt-1 text-white text-sm md:w-9/12">Market Cap: $ {marketCap} </p>
          <p className="mt-1 text-white text-sm md:w-9/12">Daily Change: {dailyChange}%</p>
        </div>
      </div>
    </a>
  );

const Cryptocurrencies = ({simplified}) => {

    const count = simplified ? 12 : 100;
    const {data: cryptosList, isFetching} = useGetCryptosQuery(count);
    const[cryptos, setCryptos] = useState(cryptosList?.data?.coins);

  
    // console.log(cryptos);

    if(isFetching) return 'Loading...'; 

    return (
      
        <div className="flex flex-col justify-center m-20">
            <div>
              <h1 className="text-3xl text-white text-gradient ">Top Cryptocurrencies in the world</h1>
              <br />
              <hr />
              <br />
            </div>
            <div className="flex-1 flex flex-wrap justify-center items-center">
                {cryptos?.map((currency, i) => (
                    <CryptoCard
                        id={currency.id}
                        key={i}
                        // mapKey={index}
                        color="bg-[#2952E3]"
                        icon={<img src={currency.iconUrl}/>}
                        rank={currency.rank}
                        name={currency.name}
                        price = {millify(currency.price)}
                        marketCap={millify(currency.marketCap)}             
                        dailyChange={millify(currency.change)}
                        coinUrl = {currency.coinrankingUrl}
                    />
                ))}
                
            </div>
        </div>
    )
};

export default Cryptocurrencies;