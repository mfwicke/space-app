import React from "react";
import "./companyStory.css";
import { companyInfos } from "../../assets/JSON/companyInfos.js";

const CompanyStory = () => {
    return(
        <>
            <div className="company-story-wrapper-box">
                <div className={`company-story-wrapper id ${companyInfos.id}`}>
                    {companyInfos.map((companyInfo, k) => (
                        <div className="company-story-box">
                            <div className="company-story-info">
                                <img src={companyInfo.image} alt="Company Logo" className="company-story-art" />
                                <h1 className="company-story-name">{companyInfo.name}</h1>
                            </div>
                            <div className="company-story-origin-box">
                                <p className="company-story-origin">{companyInfo.info}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </>
    );
}

export default CompanyStory;