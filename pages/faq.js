import React from 'react'
import Head from "next/head"
import Layout from '../components/layout'

function Faq() {
    return (
        <div>
            <Head>
                <title>FAQ</title>
            </Head>
            <Layout>
                <div className="container-faq"></div>
            </Layout>

    <style jsx>{`
    .container-faq{
padding-top:100px;
    }
    `}</style>
        </div>
    )
}

export default Faq
