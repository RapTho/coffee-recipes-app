// import styles from "./Footer.module.css";

import Link from "next/link";
import { Grid, Column } from "@carbon/react";

export default function Footer() {
  return (
    <Grid>
      <Column lg={16} md={8} sm={4} className="footer">
        Designed by{" "}
        <Link href="https://linkedin.com/in/raphael-tholl">Raphael Tholl</Link>
      </Column>
    </Grid>
    // <footer className="footer">
    //   <p>
    //     Designed by{" "}
    //     <Link href="https://linkedin.com/in/raphael-tholl">Raphael Tholl</Link>
    //   </p>
    // </footer>
  );
}
