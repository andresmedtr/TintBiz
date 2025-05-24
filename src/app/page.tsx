'use client'

import styles from "./page.module.css";
import { FormattedMessage } from "react-intl";

export default function Home() {
  return (
    <div>
      <FormattedMessage id="test" description='esto es el testeo'/>
    </div>
  );
}
