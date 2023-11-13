import { getCharacters } from "../api/request";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  CounterState,
  setData,
  setInfo,
  setLoading,
  setPage,
} from "../redux/reducer";
import Component from "../components/Component";
import Pagination from "../components/atoms/Pagination";
import { useSearchParams } from "react-router-dom";
import { Button } from "../components/atoms/Button";
import { Input } from "../components/atoms/Input";
import { debounce } from "lodash";
import { Alert } from "../components/atoms/Alert";
export default function Home() {
  const loading = useSelector((val: CounterState) => val.loading);
  const search = useSelector((val: CounterState) => val.search);
  const page = useSelector((val: CounterState) => val.page);
  const data = useSelector((val: CounterState) => val.data);
  const info = useSelector((val: CounterState) => val.info);
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    const currentPage = searchParams.get("page")!;
    const currentSearch = searchParams.get("search")!;
    if (!currentPage) {
      setSearchParams({ page: "1", search: currentSearch });
    }
    if (!currentSearch) {
      setSearchParams({ page: currentPage });
    }
    dispatch(setPage(Number(currentPage)));
    dispatch(setLoading(true));
    setLocalSearch(currentSearch);

    getCharacters(Number(currentPage), currentSearch)
      .then((val) => {
        dispatch(setInfo(val.data.info));
        dispatch(setData(val.data.results));
      })
      .catch((err) => {
        console.error(err);
        dispatch(setData([]));
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  }, [searchParams]);
  const [localSearch, setLocalSearch] = useState("");
  const searchCharacter = debounce((e) => {
    setSearchParams({
      search: e.target.value as string,
      page: "1",
    });
  }, 300);
  return (
    <div>
      <div className="flex items-center justify-end flex-1 p-3">
        <div className="flex items-center w-full max-w-sm space-x-2">
          <Input
            value={localSearch || search}
            onChange={(e) => {
              setLocalSearch(e.target.value);
              searchCharacter(e);
            }}
            type="search"
            placeholder="Search"
          />
        </div>
      </div>
      <ul className="p-2">
        {!data.length ? (
          <li className="p-2">
            <Alert title="No data">No Data here!</Alert>
          </li>
        ) : (
          data.map((val) => {
            return (
              <li key={val.id}>
                <Component character={val} />
              </li>
            );
          })
        )}
      </ul>
      <Pagination total={info.count} page={page} totalPages={info.pages} />
    </div>
  );
}
