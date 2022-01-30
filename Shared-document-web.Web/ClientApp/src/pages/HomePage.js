import React from 'react'
import Banner from '../components/BannerComponent/Banner'
import RecentDocument from '../components/RecentDocumentComponent/RecentDocument'
import TopDocument from '../components/TopDocumentComponent/TopDocument'

function HomePage() {
    return (
        <React.Fragment>
            <Banner />
            <TopDocument />
            <RecentDocument />
        </React.Fragment>
    )
}

export default HomePage