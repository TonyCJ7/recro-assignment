import { joinClass } from "helpers/utils";
import React from "react";

import styles from "./styles.scss";

const Loader = () => {
  return (
    <div className={joinClass(styles.loader)}>
      <div className={styles.loaderContainer}>
        <div className={styles.loaderContainerContent} />
      </div>
    </div>
  );
};

export default Loader;
