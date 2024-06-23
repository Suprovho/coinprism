import React, { useState } from "react";

const CoinInfo = ({ heading, desc }) => {
  const ShortDesc =
    desc.slice(0, 350) + "<p style='color:var(--grey)'> Read More...</p>";
  const longDesc =
    desc + "<p style='color:var(--grey)'> Read Less...</p>";
  const [flag, setFlag] = useState(false);
  return (
    <div className="grey-wrapper">
      <h2 className="pb-4 text-2xl font-bold">{heading}</h2>
      {desc.length > 200 ? (
        <p
          className="pt-4 cursor-pointer coin-info-desc"
          dangerouslySetInnerHTML={{ __html: !flag ? ShortDesc : longDesc }}
          onClick={() => setFlag(!flag)}
        />
      ) : (
        <p className="pt-4 cursor-pointer coin-info-desc" dangerouslySetInnerHTML={{ __html: desc }} />
      )}
    </div>
  );
};

export default CoinInfo;
