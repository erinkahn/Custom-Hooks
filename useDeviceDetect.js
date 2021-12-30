// ----- hook:

import {useEffect, useState} from 'react';

export default function useDeviceDetect() {
    const [isMobile, setMobile] = useState(false);

    useEffect(() => {
        const userAgent = typeof navigator === "undefined" ? "" : navigator.userAgent;

        console.log(`user's device is: ${window.navigator.userAgent}`);

        const mobile = Boolean(
            userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i)
        );

        setMobile(mobile);
    }, []);

    return { isMobile };
}



// ----- consumer component:

// import React from "react";
// import useDeviceDetect from "../hooks/useDeviceDetect";

// function ComponentName() {
//   const { isMobile } = useDeviceDetect();

//   return (
//     <>
//       {!isMobile && <StickyHeader {...courseData} />}
//     </>
//   );
// }
