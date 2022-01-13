import React, { Fragment, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import axios from "./../Axios/Axios";

const Home = () => {
  let [state, setState] = useState([]);
  let [pageNumber, setPageNumber] = useState(0);

  let usersPerPage = 10;

  let visited = pageNumber * usersPerPage;

  let changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  let firstPage = ({selected}) => {
    if (selected = 200) {
     return  setPageNumber(selected)
    }
  };
  let lastPage = ({ selected }) => {
    if (selected = 1) {
      return setPageNumber(selected)
    }
  };

  useEffect(() => {
    let fetchData = async () => {
      let finalData = await axios.get("todos");
      setState(finalData.data);
    };
    fetchData();
  }, []);

  let pageCount = Math.ceil(state.length / usersPerPage);
  console.log(pageCount);
  

  let displayUser = state.slice(visited, visited + usersPerPage).map(x => {
    return (
      <tr key={x.id} className="bg-gray-200">
        <td className='border border-black'>{x.id}</td>
        <td className='border border-black '>{x.userId}</td>
        <td className='border border-black '>{x.title}</td>
        <td className='border border-black '>
          {x.completed === true ? "True" : "False"}
        </td>
      </tr>
    );
  });

  return (
    <Fragment>
      <div className='w-3/5 text-center m-auto mt-10 bg-white p-4 '>
        <h1 className='w-1/5 m-auto  uppercase font-bold text-center mb-2 underline '>
          Todos Details
        </h1>
        <table className='border border-black border-collapse'>
          <thead className=' bg-blue-300'>
            <tr>
              <th className='border border-black uppercase '>Id</th>
              <th className='border border-black uppercase '>UserId</th>
              <th className='border border-black uppercase '>Title</th>
              <th className='border border-black uppercase'>Complted</th>
            </tr>
          </thead>
          <tbody>{displayUser}</tbody>
        </table>
      </div>
      <div className='flex   '>
        <button
          onClick={firstPage}
          className='ml-[220px] bg-slate-400 rounded-md px-2 m-2'
        >
          First
        </button>
        <ReactPaginate
          
          previousLable={"Previous"}
          pageCount={pageCount}
          nextLable={"next"}
          onPageChange={changePage}
          className='flex m-auto  space-x-4 border-2'
        />
        <button
          onClick={lastPage}
          className='mr-[220px] bg-slate-400 rounded-md px-2 m-2'
        >
          Last
        </button>
      </div>
    </Fragment>
  );
};

export default Home;
