import React  from "react";

import Pagination from "@mui/material/Pagination";

export default function PaginationComponent({ page, handlePageChange }) {
  return (
    <div className="flex justify-center items-center m-12">
      <Pagination
        sx={{
          "& .MuiPaginationItem-text": {
            color: "#fff !important",
            border: "2px solid #888",
          },
          "& .MuiPaginationItem-text:hover": {
            backgroundColor: "transparent !important",
          },
          "& .Mui-selected  ": {
            backgroundColor: "#3a80e9",
            borderColor: "#3a80e9",
          },
          "& .MuiPaginationItem-ellipsis": {
            border: "none",
          },
        }}
        count={10}
        page={page}
        onChange={handlePageChange}
      />
    </div>
  );
}