import React from "react";
import AdSense from 'react-adsense';

const GoogleAdSense = () => {
    return (

        <AdSense.Google
            client='ca-pub-5229826223631747'
            slot='7806394673'
            style={{ display: 'block' }}
            layout='in-article'
            format='fluid'
        />

    )
}

export default GoogleAdSense;