import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { Link, useNavigate } from "react-router-dom";

export default function Pagination({ total = 1, page = 1, totalPages = 1 }) {
  const getPages = () => {
    const arr = [];
    for (let i = 1; i <= totalPages; i++) {
      arr.push(i);
    }
    return arr;
  };
  const navigate = useNavigate();
  const handlePage = (e) => {
    navigate(`?page=${e.target.value}`);
    scrollTo({ top: 0 });
  };
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white border-t border-gray-200 sm:px-6">
      <div className="flex items-center justify-between flex-1">
        <div>
          <div className="text-sm text-gray-700">
            <div>
              Showing page: <span className="font-medium">{page}</span> of{" "}
              <span className="font-medium">{totalPages}</span> pages
            </div>
            <div>
              Total: <span className="font-medium">{total}</span> results
            </div>
          </div>
        </div>
        <div>
          <nav
            className="inline-flex -space-x-px rounded-md shadow-sm isolate"
            aria-label="Pagination"
          >
            <Link
              to={`?page=1`}
              className="relative inline-flex items-center px-2 py-2 rounded-l-md hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span>Start</span>
            </Link>
            {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
            <select
              title="pages"
              name="pages"
              value={page}
              onChange={handlePage}
            >
              <option>Select Page</option>
              {getPages().map((val) => (
                <option key={val}>{val}</option>
              ))}
            </select>
            <Link
              to={`?page=${totalPages}`}
              className="relative inline-flex items-center px-2 py-2 rounded-r-md hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span>End</span>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
