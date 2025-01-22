import React, { useState } from "react";
import CertificateContext from "./CertificateContext";

export default function CertificateContextProvider({ children }) {
    const [userDetails, setuserDetails] = useState({});
    return (
        <CertificateContext.Provider value={{ userDetails, setuserDetails }}>
            {children}
        </CertificateContext.Provider>
    )
}

