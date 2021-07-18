import React from "react";

import styles from "./styles.scss";

const Subtext = ({ label, value }) => {
  return (
    <div className={styles.infoCardSubtext}>
      <span className={styles.infoCardSubtextLabel}>{label}</span>:
      <span className={styles.infoCardSubtextValue}>{value}</span>
    </div>
  );
};

const mapNewline = (str: string) => {
  return str.split("\\n").map((it, idx, self) => (
    <>
      {it.trim()}
      {idx + 1 < self.length ? <br /> : null}
    </>
  ));
};

const InfoCard = ({ id, userId, title, body }) => {
  return (
    <div className={styles.infoCard}>
      <span className={styles.infoCardTitle}>{title}</span>
      <div className={styles.infoCardContent}>
        <Subtext label="Id" value={id} />
        <Subtext label="User Id" value={userId} />
        <p className={styles.infoCardContentBody}>{mapNewline(body)}</p>
      </div>
    </div>
  );
};

export default InfoCard;
