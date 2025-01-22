import { useContext } from "react";
import html2canvas from "html2canvas"; // Import html2canvas
import jsPDF from "jspdf"; // Import jsPDF
import CertificateContext from "../CertificateContext";

function Certificate() {
    const { userDetails } = useContext(CertificateContext);

    // Generate a URL for the CEO signature image (if any)
    const uploadedCEOSignatureUrl = userDetails.CEOSignature
        ? URL.createObjectURL(userDetails.CEOSignature)
        : null;

    // Generate a URL for the Supervisor signature image (if any)
    const uploadedSupervisorSignatureUrl = userDetails.SupervisorSignature
        ? URL.createObjectURL(userDetails.SupervisorSignature)
        : null;

    // Generate a URL for the company image image (if any)
    const uploadedCompanyImageUrl = userDetails.CompanyImage
        ? URL.createObjectURL(userDetails.CompanyImage)
        : null;

    // Function to handle the download as PDF
    const handleDownload = async () => {
        const certificateElement = document.getElementById("certificate"); // Get the certificate container
        const canvas = await html2canvas(certificateElement, { scale: 2 }); // Capture the element with high resolution
        const imgData = canvas.toDataURL("image/png"); // Convert canvas to image

        // Create a new PDF instance
        const pdf = new jsPDF("portrait", "mm", "a4");
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

        // Add the image to the PDF
        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

        // Save the PDF
        pdf.save("Certificate.pdf");
    };

    return (
        <>
            <div id="certificate" className="shadow-xl p-8 w-[70%] mx-auto  to-green-50">
                <div className="border-4 border-green-600 p-4 rounded-lg">
                    <div className="p-8 flex flex-col gap-5 items-center border-2 border-green-500 text-center bg-white rounded-lg">
                        <h1 className="text-4xl font-extrabold text-green-700 uppercase">Completion Certificate</h1>
                        <img src={uploadedCompanyImageUrl || "path/to/default-signature.png"} className="h-20 mt-2" alt="Company Logo" />
                        <p className="text-xl mt-1">This certificate is proudly awarded to</p>
                        <h2 className="text-5xl font-serif italic font-bold text-green-700">
                            {userDetails.Username || "(Your Name)"}
                        </h2>
                        <p className="text-xl mt-4">
                            For successfully completing the{" "}
                            <span className="font-semibold">
                                {userDetails.Usercourse || "(Course Name)"}
                            </span>{" "}
                            course of{" "}
                            <span className="font-semibold">
                                {userDetails.Courseduration || "(Course Duration)"} year(s)
                            </span>
                            . Skills and knowledge acquired: Knowledge of organisational and legal forms of legal entities.
                        </p>
                        <div className="flex justify-between w-[80%] mt-16">
                            <div className="text-center">
                                <p className="text-xl flex flex-col items-center">
                                    <img src={uploadedCEOSignatureUrl || "path/to/default-signature.png"} alt="CEO's signature" className="w-[150px] h-[80px]" />
                                    <span className="font-semibold">CEO/Director's signature</span>
                                    <span>{userDetails.CEOname || "CEO Name"}</span>
                                </p>
                            </div>
                            <div className="text-center">
                                <p className="text-xl flex flex-col items-center">
                                    <img
                                        src={uploadedSupervisorSignatureUrl || "path/to/default-signature.png"} // Fallback to default signature
                                        alt="Instructor's signature"
                                        className="w-[150px] h-[80px]"
                                    />
                                    <span className="font-semibold">Instructor/Supervisor's signature</span>
                                    <span>{userDetails.Supervisorname || "Supervisor Name"}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center mt-6">
                <button
                    onClick={handleDownload} // Attach the download handler
                    className="border-2 w-fit px-14 py-4 text-[18px] rounded-md bg-green-700 text-white font-semibold hover:bg-green-800 transition"
                >
                    Download as PDF
                </button>
            </div>
        </>
    );
}

export default Certificate;
