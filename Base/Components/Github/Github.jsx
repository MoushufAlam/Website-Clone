import React from 'react'
// import { useState,useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();
    // const [data,setData] = useState([]);
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/MoushufAlam')
    //     .then((response) => response.json())
    //     .then((data) => {
    //         setData(data)
    //     })
    // },[])
    return (
        <>
        <div className='text-center bg-gray-600 m-4 p-4 text-3xl text-white'>Github followers: {data.followers}
        <img className='' src={data.avatar_url} alt="Profile Pic" width={300} /></div>
        </>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/MoushufAlam')
    return response.json();
}
