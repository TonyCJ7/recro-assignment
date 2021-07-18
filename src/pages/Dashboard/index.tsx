import React, { useCallback, useEffect, useRef, useState } from "react";
import { createStructuredSelector } from "reselect";
import { makeSelectError, makeSelectList, makeSelectLoading } from "./selector";
import { useDispatch, useSelector } from "react-redux";
import { getDetailsListAction } from "store/dashboard/actions";
import { InfoCard } from "components";

import styles from "./styles.scss";
import Loader from "components/Loader";
import { joinClass } from "helpers/utils";

const stateSelector = createStructuredSelector({
  detailsList: makeSelectList(),
  isLoading: makeSelectLoading(),
  error: makeSelectError()
});

const Dashboard: React.FC<{}> = () => {
  const { detailsList, isLoading, error } = useSelector(stateSelector);

  const [offset, setOffset] = useState(0);

  const dispatch = useDispatch();

  const loader = useRef(null);

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setOffset((prev) => prev + 1);
    }
  }, []);

  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  useEffect(() => {
    if (!isLoading) {
      dispatch(getDetailsListAction(offset, 10));
    }
  }, [offset]);

  return (
    <div className={joinClass(styles.dashboard)}>
      {isLoading && <Loader />}

      {detailsList.map((it) => (
        <InfoCard key={it.id} {...it} />
      ))}
      <div ref={loader} />
    </div>
  );
};

export default Dashboard;
