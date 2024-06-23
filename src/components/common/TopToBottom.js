import React from "react";
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';

const TopBottom = () => {
  const btn = document.getElementById("top-btn");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 500 ||
      document.documentElement.scrollTop > 500
    ) {
      btn.style.display = "flex";
    } else {
      btn.style.display = "none";
    }
  }

  return (
    <div className="fixed flex justify-center items-center w-12 h-12 rounded-[50%]  border-2 border-solid border-[#3a80e9] bottom-6 right-6 cursor-pointer" id="top-btn" onClick={() => {
        document.body.scrollTop=0;
        document.documentElement.scrollTop = 0;
    }}>
      <ArrowUpwardRoundedIcon style={{color:"#3a80e9"}}/>
    </div>
  );
};

export default TopBottom;
