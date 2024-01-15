import React from 'react';

const IframeComponent = () => {
    const iframeStyle = {
        width: '100%',
        height: '7000px',
        border: 'none',
        overflow: 'hidden',
        marginTop: '0px'
    };

    return (
        <div style={{ overflow: 'hidden' }}>
            <iframe 
                style={iframeStyle} 
                src="https://www.riverspringliving.org/lifestyle/gallery/centennial-photo-gallery/" 
                title="External Content"
                scrolling="no" // This disables scrolling
            >
                Your browser does not support iframes.
            </iframe>
        </div>
    );
};

export default IframeComponent;
