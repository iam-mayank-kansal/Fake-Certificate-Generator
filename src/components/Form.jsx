import React, { useState, useContext } from 'react';
import CertificateContext from '../CertificateContext';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

function Form() {

    const [Username, setUserame] = useState("");
    const [Usercourse, setUsercourse] = useState("");
    const [Courseduration, setCourseduration] = useState("");
    const [CEOname, setCEOname] = useState("");
    const [Supervisorname, setSupervisorname] = useState("");

    const navigate = useNavigate();  // Initialize useNavigate

    const [CEOSignature, setCEOSignature] = useState(null);
    const [SupervisorSignature, setSupervisorSignature] = useState(null);
    const [CompanyImage, setCompanyImage] = useState(null);

    const { setuserDetails } = useContext(CertificateContext);

    const handleCEOUpload = (file) => {
        if (file) {
            setCEOSignature(file);
        }
    };
    const handlesupervisorUpload = (file) => {
        if (file) {
            setSupervisorSignature(file);
        }
    };
    const handlecompanyUpload = (file) => {
        if (file) {
            setCompanyImage(file);
        }
    };

    const handleSubmitButton = (e) => {
        e.preventDefault();
        if (!Username || !Usercourse || !Courseduration || !CEOname || !Supervisorname || !CEOSignature || !SupervisorSignature || !CompanyImage) {
            alert("Please fill out all fields");
            return;
        }

        setuserDetails({
            Username,
            Usercourse,
            Courseduration,
            CEOname,
            Supervisorname,
            CEOSignature,
            SupervisorSignature,
            CompanyImage
        });

        alert("Details submitted successfully!");
        navigate("/certtifcate");
        
    };

    return (
        <div className={`bg-white w-[50%] mx-auto p-10 shadow-xl flex flex-col gap-5 items-center`}>
            <h1 className="text-3xl font-bold">Create Your Fake Certificate</h1>
            <form className="flex flex-col w-full gap-3 items-center">

                {/* name  */}
                <input
                    type="text"
                    placeholder="Enter Your Name"
                    className="border-2 px-2 py-2 text-[17px] w-full rounded-md"
                    value={Username}
                    onChange={(e) => setUserame(e.target.value)}
                />
                {/* course  */}
                <input
                    type="text"
                    placeholder="Enter Your Course"
                    className="border-2 px-2 py-2 text-[17px] w-full rounded-md"
                    value={Usercourse}
                    onChange={(e) => setUsercourse(e.target.value)}
                />
                {/* duration  */}
                <input
                    type="number"
                    placeholder="Enter Course Duration in Year"
                    className="border-2 px-2 py-2 text-[17px] w-full rounded-md"
                    value={Courseduration}
                    onChange={(e) => setCourseduration(e.target.value)}
                />
                {/* CEO/Director's name */}
                <input
                    type="text"
                    placeholder="Enter CEO/Director's name"
                    className="border-2 px-2 py-2 text-[17px] w-full rounded-md"
                    value={CEOname}
                    onChange={(e) => setCEOname(e.target.value)}
                />
                {/* instructor/supervisor's name  */}
                <input
                    type="text"
                    placeholder="Enter instructor/supervisor's name"
                    className="border-2 px-2 py-2 text-[17px] w-full rounded-md"
                    value={Supervisorname}
                    onChange={(e) => setSupervisorname(e.target.value)}
                />


                {/* Upload CEO/Director's signature */}
                <div className="border-dashed border-2 border-gray-300 rounded-lg p-8 w-full mb-4">
                    <p className="text-center text-xl text-black font-bold mb-4">
                        Upload CEO/Director's signature

                    </p>
                    <p className="text-center text-[17px] -translate-y-2 text-[#878c96] mb-4">
                        Make sure Signature is clearly visible
                    </p>
                    <div className="flex justify-center mt-4 gap-4">
                        <label className="cursor-pointer bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded">
                            <input
                                type="file"
                                className="hidden"
                                onChange={(e) =>
                                    handleCEOUpload(e.target.files[0])
                                }
                                accept=".pdf,.jpg,.png,.jpeg"
                            />
                            {CEOSignature ? "Reupload Image" : "Upload Image"}
                        </label>
                    </div>
                </div>

                {/* instructor/supervisor's signature */}
                <div className="border-dashed border-2 border-gray-300 rounded-lg p-8 w-full mb-4">
                    <p className="text-center text-xl text-black font-bold mb-4">
                        instructor/supervisor's signature
                    </p>
                    <p className="text-center text-[17px] -translate-y-2 text-[#878c96] mb-4">
                        Make sure Signature is clearly visible
                    </p>
                    <div className="flex justify-center mt-4 gap-4">
                        <label className="cursor-pointer bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded">
                            <input
                                type="file"
                                className="hidden"
                                onChange={(e) =>
                                    handlesupervisorUpload(e.target.files[0])
                                }
                                accept=".pdf,.jpg,.png,.jpeg"
                            />
                            {SupervisorSignature ? "Reupload Image" : "Upload Image"}
                        </label>
                    </div>
                </div>

                {/* Company Image  */}
                <div className="border-dashed border-2 border-gray-300 rounded-lg p-8 w-full mb-4">
                    <p className="text-center text-xl text-black font-bold mb-4">
                        Company Image
                    </p>
                    <p className="text-center text-[17px] -translate-y-2 text-[#878c96] mb-4">
                        Make sure image is clearly visible
                    </p>
                    <div className="flex justify-center mt-4 gap-4">
                        <label className="cursor-pointer bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded">
                            <input
                                type="file"
                                className="hidden"
                                onChange={(e) =>
                                    handlecompanyUpload(e.target.files[0])
                                }
                                accept=".pdf,.jpg,.png,.jpeg"
                            />
                            {CompanyImage ? "Reupload Image" : "Upload Image"}
                        </label>
                    </div>
                </div>

                <button
                    className="border-2 w-fit px-10 py-2 text-[17px] rounded-md bg-green-500 text-white font-semibold"
                    onClick={handleSubmitButton}
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Form;
