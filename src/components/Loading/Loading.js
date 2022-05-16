import React from 'react';

const Loading = () => {
    return (
        <div className="d-flex align-items-center justify-content-center" style={{height: "99.99vh"}}>
          <div>
            <img src="https://i.imgur.com/kv2oHwT.gif" alt=""/>
            <p className="text-center">Loading...</p>
          </div>
        </div>
    );
};

export default Loading;