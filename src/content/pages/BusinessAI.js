import Head from 'next/head';
import React from 'react';

const EmbedPage = () => {
    return (
        <div>
            <Head>
                <title>Business AI</title>
            </Head>
            <iframe 
                src="https://ai-chat-app.businessesai.net/" 
                style={{ width: '100%', height: '90vh', border: 'none' }}
                allowFullScreen>
            </iframe>
        </div>
    );
};

export default EmbedPage;
