import React, { useState, useEffect } from "react";
import "./Prova.css";

function SearchFilter() {
  const data = [
    {
      name: "Currey Slee",
      position: "Food Chemist",
      gender: "Male",
      office: "Damietta",
      email: "cslee0@netlog.com",
      phone: "532 179 1377",
      salary: "$49491.60",
      id: 1,
    },
    {
      name: "Currey Slee",
      position: "Food Chemist",
      gender: "Male",
      office: "Damietta",
      email: "cslee0@netlog.com",
      phone: "532 179 1377",
      salary: "$49491.60",
      id: 1,
    },
    {
      name: "Currey Slee",
      position: "Food Chemist",
      gender: "Male",
      office: "Damietta",
      email: "cslee0@netlog.com",
      phone: "532 179 1377",
      salary: "$49491.60",
      id: 1,
    },
    {
      name: "Currey Slee",
      position: "Food Chemist",
      gender: "Male",
      office: "Damietta",
      email: "cslee0@netlog.com",
      phone: "532 179 1377",
      salary: "$49491.60",
      id: 1,
    },
    {
      name: "Currey Slee",
      position: "Food Chemist",
      gender: "Male",
      office: "Damietta",
      email: "cslee0@netlog.com",
      phone: "532 179 1377",
      salary: "$49491.60",
      id: 1,
    },
    {
      name: "Currey Slee",
      position: "Food Chemist",
      gender: "Male",
      office: "Damietta",
      email: "cslee0@netlog.com",
      phone: "532 179 1377",
      salary: "$49491.60",
      id: 1,
    },
    {
      name: "Currey Slee",
      position: "Food Chemist",
      gender: "Male",
      office: "Damietta",
      email: "cslee0@netlog.com",
      phone: "532 179 1377",
      salary: "$49491.60",
      id: 1,
    },
    {
      name: "Currey Slee",
      position: "Food Chemist",
      gender: "Male",
      office: "Damietta",
      email: "cslee0@netlog.com",
      phone: "532 179 1377",
      salary: "$49491.60",
      id: 1,
    },
    {
      name: "Currey Slee",
      position: "Food Chemist",
      gender: "Male",
      office: "Damietta",
      email: "cslee0@netlog.com",
      phone: "532 179 1377",
      salary: "$49491.60",
      id: 1,
    },
    {
      name: "Currey Slee",
      position: "Food Chemist",
      gender: "Male",
      office: "Damietta",
      email: "cslee0@netlog.com",
      phone: "532 179 1377",
      salary: "$49491.60",
      id: 1,
    },
    {
      name: "Currey Slee",
      position: "Food Chemist",
      gender: "Male",
      office: "Damietta",
      email: "cslee0@netlog.com",
      phone: "532 179 1377",
      salary: "$49491.60",
      id: 1,
    },
    {
      name: "Currey Slee",
      position: "Food Chemist",
      gender: "Male",
      office: "Damietta",
      email: "cslee0@netlog.com",
      phone: "532 179 1377",
      salary: "$49491.60",
      id: 1,
    },
    // Rest of your data...
  ];

  const [posts, SetPosts] = useState(data);
  const [postPerPage, SetPostPerPage] = useState(10);
  const [currentPage, SetCurrentPage] = useState(1);
  const [pageItem, SetPageItem] = useState({
    start: 0,
    end: postPerPage,
  });

  useEffect(() => {
    const numOfPages = Math.ceil(posts.length / postPerPage);
    const value = currentPage * postPerPage;
    onPageChangeEvent(value - postPerPage, value);
  }, [currentPage, postPerPage, posts]);

  const onPageChangeEvent = (start, end) => {
    SetPageItem({
      start: start,
      end: end,
    });
  };

  const prevPageClick = () => {
    if (currentPage === 1) {
      SetCurrentPage(currentPage);
    } else {
      SetCurrentPage(currentPage - 1);
    }
  };

  const nextPageClick = () => {
    const numOfPages = Math.ceil(posts.length / postPerPage);
    if (currentPage === numOfPages) {
      SetCurrentPage(currentPage);
    } else {
      SetCurrentPage(currentPage + 1);
    }
  };

  const numOfPages = Math.ceil(posts.length / postPerPage);
  const numOfButtons = [];
  for (let i = 1; i <= numOfPages; i++) {
    numOfButtons.push(i);
  }

  const [arrOfCurrButtons, setArrOfCurrButtons] = useState([]);

  useEffect(() => {
    let tempNumberOfButtons = [...arrOfCurrButtons];
    let dotsInitial = "...";
    let dotsLeft = "... ";
    let dotsRight = " ...";

    if (numOfButtons.length < 6) {
      tempNumberOfButtons = numOfButtons;
    } else if (currentPage >= 1 && currentPage <= 3) {
      tempNumberOfButtons = [1, 2, 3, 4, dotsInitial, numOfButtons.length];
    } else if (currentPage === 4) {
      const sliced = numOfButtons.slice(0, 5);
      tempNumberOfButtons = [...sliced, dotsInitial, numOfButtons.length];
    } else if (currentPage > 4 && currentPage < numOfButtons.length - 2) {
      const sliced1 = numOfButtons.slice(currentPage - 2, currentPage);
      const sliced2 = numOfButtons.slice(currentPage, currentPage + 1);
      tempNumberOfButtons = [
        1,
        dotsLeft,
        ...sliced1,
        ...sliced2,
        dotsRight,
        numOfButtons.length,
      ];
    } else if (currentPage > numOfButtons.length - 3) {
      const sliced = numOfButtons.slice(numOfButtons.length - 4);
      tempNumberOfButtons = [1, dotsLeft, ...sliced];
    } else if (currentPage === dotsInitial) {
      SetCurrentPage(arrOfCurrButtons[arrOfCurrButtons.length - 3] + 1);
    } else if (currentPage === dotsRight) {
      SetCurrentPage(arrOfCurrButtons[3] + 2);
    } else if (currentPage === dotsLeft) {
      SetCurrentPage(arrOfCurrButtons[3] - 2);
    }

    setArrOfCurrButtons(tempNumberOfButtons);
  }, [currentPage, arrOfCurrButtons, numOfButtons]);

  return (
    <>
      {/* <div className="container-fluid mt-5 mb-5">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="card">
              <div className="card-body p-0"> */}
              
             
              {/* </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default SearchFilter;
