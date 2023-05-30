import React from "react";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";

const demoImage = 'http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg';

const News =() => {
    const { data: cryptoNews } = useGetCryptoNewsQuery({newsCategory: 'Cryptocurrency'})

    if(!cryptoNews?.value) return 'Loading ...';

    return(
        <div className="flex-col m-20 sm:mx-1 md:mx-1">
            <div className="flex justify-center text-white text-5xl font-bold">
                Headlines
            </div>
            <div className="flex flex-wrap p-10 gap-6 justify-center items-center">
                
                {cryptoNews.value.map((news, i) => (
                    <div key={i} >
                        <a href={news.url} target="_blank" rel="noreferrer" className="flex flex-col items-center bg-white 
                        rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div className="flex-col ">
                                <div className=" justify-between p-4 leading-normal">
                                    <h3 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{news.name}</h3>
                                </div>
                                <div className="flex flex-row grow">
                                    <div className="ml-3 mt-5">
                                        <img className="object-cover w-10 h-10 rounded-t-lg md:h-auto md:w-48 md:rounded-none 
                                        md:rounded-l-lg" src={news?.image?.thumbnail?.contentUrl || demoImage} alt="News"/>
                                    </div>
                                    <div className="ml-6 mr-6">
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                        {news.description > 30
                                        ? `${news.description.substring(0,30)}...`
                                        : news.description
                                        }
                                        </p>
                                        <div>
                                            <div className="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400">
                                                <img className="h-5 w-5" src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="image"/>
                                                {news.provider[0]?.name}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>                            
                        </a>
                    </div> 
                ))}
            </div><br /><br /><br /><br />
        </div>
    )
}
export default News;