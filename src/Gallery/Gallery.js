import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Gallery.css';
import GalleryItem from './GalleryItem';

const gallery = () => {
    // const URL = "https://api.imgur.com/oauth2/authorize?client_id=2788e23f35a4225_type=REQUESTED_RESPONSE_TYPE&state=APPLICATION_STATE"
    const URL = "https://api.imgur.com/3/account/mmataja/album/0LXIVFB";
    const [data, setData] = useState({imgData: null, isLoading: false});

    useEffect(() => {
            const fetchData = async () => {
                // const response = await axios("http://jsonplaceholder.typicode.com/users/1");
                const response = await axios.get(URL, {
                    headers: {
                        Authorization: 'Client-ID 2788e23f35a4225'
                    }
                });
                const responseData = response.data;
                console.log(responseData.data);
                setData({imgData: responseData, isLoading: true});
        };
        fetchData();
    }, []);

    console.log(data);

    return (
        <div>
            <div className="mb-2 w-100 d-flex justify-content-center mt-5">
                <h1 className="display-1 p-3">Galerija</h1>
            </div>
            <div className="d-flex w-100 justify-content-center mb-5">
                <div className="d-flex flex-wrap justify-content-center w-90 overflow-hidden">
                { data.isLoading ? data.imgData.data.images.map((item, index) => {
                   return( <GalleryItem  key={index} item={item}/> )
                }) : "nekakav spinner" }
                </div>
            </div>
        </div>
    );
};

export default gallery;