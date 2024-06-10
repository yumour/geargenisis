/* eslint-disable react-hooks/exhaustive-deps */
import { Typography } from "antd";
import { useSearchParams } from "react-router-dom";
import Products from "../../components/Products";
import { SearchOutlined, WarningTwoTone } from "@ant-design/icons";
import { useEffect, useState } from "react";

function Search() {
  const [query, setQuery] = useState();
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q"); // 'querystring'

  useEffect(() => {
    if (!!q && q !== query) setQuery(q);
  }, [q]);

  return (
    <>
      {!!query ? (
        <>
          <Typography.Text style={{ fontSize: "22px" }} strong>
            <SearchOutlined /> البحث عن'
            <Typography.Link style={{ fontSize: "22px" }} strong>
              {query}
            </Typography.Link>
            '
          </Typography.Text>
          <Products query={query} />
        </>
      ) : (
        <Typography.Text style={{ fontSize: "22px" }} strong>
          <WarningTwoTone /> Check your Search keyword again...
        </Typography.Text>
      )}
    </>
  );
}

export default Search;
