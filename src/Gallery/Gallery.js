import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Gallery.css';
import GalleryItem from './GalleryItem';
import ImageModal from './ImageModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Gallery = () => {
    const URL = "https://api.imgur.com/3/account/mmataja/album/0LXIVFB";
    const [data, setData] = useState({
        imgData: null, 
        isLoading: false, 
        limit: 0
    });
    const [loadMoreBtn, setLoadMoreBtn] = useState({
        btnText: "Učitaj još",
        isDisabled: false
    });
    const [isModal, setIsModal] = useState({
        showModal: false,
        modalData: null
    });

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

    const loadMore = () => {
        let alreadyLoadedImages = data.imgData.data.images.length - data.limit;
        if(alreadyLoadedImages > 6) {
            setData( prevState => {
                return { ...prevState, limit: data.limit + 6};
            });
        } else {
            setData( prevState => {
                return { ...prevState, limit: data.limit + alreadyLoadedImages};
            });
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

    const setModalData = data => {
        setIsModal({showModal: true, modalData: data});
    }

    return (
        <div>
            <div className="mb-2 w-100 d-flex justify-content-center mt-5">
                <h1 className="display-1 p-3 fs-85">Galerija</h1>
            </div>
            <div className="d-flex w-100 justify-content-center">
                <div className="d-flex flex-wrap justify-content-center gallery-container overflow-hidden">
                { data.isLoading ? data.imgData.data.images.slice(0, data.limit).map((item, index) => {
                   return( 
                       <GalleryItem  key={index} item={item} limit={data.limit} modalBtn={setModalData}/>
                    )
                }) : "nekakav spinner" }
                </div>
            </div>
            <div className="w-100 d-flex justify-content-center padding-5 mb-5">
                <button className="btn btn-secondary" onClick={loadMore} disabled={loadMoreBtn.isDisabled}>{loadMoreBtn.btnText}</button>
                {data.limit > 12 ? <div className="d-flex align-items-center ml-5" onClick={collapseGallery}>
                                        <FontAwesomeIcon icon="caret-up" size="2x" />
                                    </div> : null}
            </div>
            {isModal.showModal ? <ImageModal imgSrc={isModal.modalData.link} 
                                            closeModal={() => setIsModal(prevState => {
                                                return { ...prevState, showModal: false};
                                            })}
                                             imgDesc={isModal.modalData.description ? isModal.modalData.description : "Nema opisa"}/> : null}
        </div>
    );
};

export default Gallery;