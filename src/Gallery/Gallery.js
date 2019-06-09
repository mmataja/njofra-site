import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Gallery.css';
import GalleryItem from './GalleryItem';

const gallery = () => {
    const URL = "https://api.imgur.com/3/account/mmataja/album/0LXIVFB";
    const [data, setData] = useState({
        imgData: null, 
        isLoading: false, 
        limit: 0
    });
    const [loadMoreBtn, setLoadMoreBtn] = useState({
        btnText: "Učitaj još",
        isDisabled: false
    })

    useEffect(() => {
            const fetchData = async () => {
                const response = await axios.get(URL, {
                    headers: {
                        Authorization: 'Client-ID 2788e23f35a4225'
                    }
                });
                const responseData = response.data;
                setData({imgData: responseData, isLoading: true, limit: 6});
        };
        fetchData();
    }, []);

    console.log(data);

    const loadMore = () => {
        let alreadyLoadedImages = data.imgData.data.images.length - data.limit;
        if(alreadyLoadedImages > 6) {
            setData({imgData: data.imgData, isLoading:true, limit: data.limit + 6});
        } else {
            setData({imgData: data.imgData, isLoading:true, limit: data.limit + alreadyLoadedImages})
            setLoadMoreBtn({btnText: "Nema više cobra", isDisabled: true});
        }
    }

    const collapseGallery = () => {
        let leftOverImages = data.imgData.data.images.length - data.limit;
        if(leftOverImages <= 0) {
            setData({imgData: data.imgData, isLoading: true, limit: 6})
            setLoadMoreBtn({btnText: "Učitaj još", isDisabled: false});
        }
    }

    return (
        <div>
            <div className="mb-2 w-100 d-flex justify-content-center mt-5">
                <h1 className="display-1 p-3">Galerija</h1>
            </div>
            <div className="d-flex w-100 justify-content-center">
                <div className="d-flex flex-wrap justify-content-center w-90 overflow-hidden">
                { data.isLoading ? data.imgData.data.images.slice(0, data.limit).map((item, index) => {
                   return( 
                       <GalleryItem  key={index} item={item} limit={data.limit}/>
                    )
                }) : "nekakav spinner" }
                </div>
            </div>
            <div className="w-100 d-flex justify-content-center p-5 mb-5">
                <button className="btn btn-secondary" onClick={loadMore} disabled={loadMoreBtn.isDisabled}>{loadMoreBtn.btnText}</button>
                {data.limit > 12 ? <div className="d-flex align-items-center ml-5 mb-2"> 
                                        <div className="caret-up-div" onClick={collapseGallery}></div> 
                                    </div> : null}
            </div>
        </div>
    );
};

export default gallery;