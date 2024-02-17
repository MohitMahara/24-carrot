import React from "react";

const VarietyContent = ({which}) => {
  return (
    <>
      <div className="variety-content" style={{color:"black"}}>
        {which==1&& (<>
        <h4 style={{marginBottom:"20px"}}> Exceptional Wedding</h4>
        <p >
        The most important day of your life, is ours too. Your wedding should be the ultimate celebration of your relationship, and our team of experts guide you through the process, offering peace of mind and a remarkable experience.
        </p>
        </>
        )}
      </div>
    </>
  );
};

export default VarietyContent;
