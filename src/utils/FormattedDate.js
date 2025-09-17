// import React from "react";

// const FormattedDate = ({ dateString, format = "DD-MM-YYYY" }) => {
//   if (!dateString) return "-";

//   const date = new Date(dateString);
//   if (isNaN(date.getTime())) return "-";

//   const day = String(date.getDate()).padStart(2, "0");
//   const month = String(date.getMonth() + 1).padStart(2, "0");
//   const year = date.getFullYear();

//   switch (format) {
//     case "YYYY-MM-DD":
//       return `${year}-${month}-${day}`;
//     case "DD-MM-YYYY":
//     default:
//       return `${day}-${month}-${year}`;
//   }
// };

// export default FormattedDate;


import React from "react";

const FormattedDate = ({ dateString, format = "DD-MM-YYYY" }) => {
  if (!dateString) return "-";

  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "-";

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  switch (format) {
    case "YYYY-MM-DD":
      return `${year}-${month}-${day}`;
    case "DD-MM-YYYY":
    default:
      return `${day}-${month}-${year}`;
  }
};

export default FormattedDate;
