import Head from "next/head";
import styles from "../styles/home.module.css";
import Link from "next/link";
import FeatureCard from "../components/Home/featureCard";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lectricus</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.hero}>
          <div className={styles.heading}>
            Meet the <span id={styles.gradient}>future</span> of sustainability.
          </div>
          <div className={styles.subHeading}>
            Usage units, pay bills, see previous month data and so much more.
          </div>
          <div className={styles.submitRow}>
            <Link href="/signup">
              <button id={styles.submit}>Get Started</button>
            </Link>
            <Link href="/login">
              <div className={styles.submitSide}>Already a User?</div>
            </Link>
          </div>
        </div>
        <div id={styles.midSec}>
          <div className={styles.heading} id={styles.sub}>
            Features.
          </div>
          <div className={styles.featuresRow}>
            <FeatureCard
              title={"See the bill"}
              iconPath={"/icons/signal.svg"}
              desc={
                " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu elit eufelis blandit condimentum. Ut ac suscipit elit. Etiam tincidunt ante ac sem blandit malesuada Lorem"
              }
            />
            <FeatureCard
              title={"Pay and save"}
              iconPath={"/icons/money.svg"}
              desc={
                " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu elit eufelis blandit condimentum. Ut ac suscipit elit. Etiam tincidunt ante ac sem blandit malesuada Lorem"
              }
            />
            <FeatureCard
              title={"Monitor the data"}
              iconPath={"/icons/chart.svg"}
              desc={
                " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu elit eufelis blandit condimentum. Ut ac suscipit elit. Etiam tincidunt ante ac sem blandit malesuada Lorem"
              }
            />
          </div>
        </div>
        <div>
          <div className={styles.heading} id={styles.sub}>
            Motive.
          </div>
          <div className={styles.motiveDesc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu
            elit eufelis blandit condimentum. Ut ac suscipit elit. Etiam
            tincidunt ante ac sem blandit malesuada LoremLorem ipsum dolor sit
            amet, consectetur adipiscing elit. Duis eu elit eufelis blandit
            condimentum. Ut ac suscipit elit. Etiam tincidunt ante ac sem
            blandit malesuada LoremLorem ipsum dolor sit amet, consectetur
            adipiscing elit. Duis eu elit eufelis blandit condimentum. Ut ac
            suscipit elit. Etiam tincidunt ante ac sem blandit malesuada
            LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            eu elit eufelis blandit condimentum. Ut ac suscipit elit. Etiam
            tincidunt ante ac sem blandit malesuada LoremLorem ipsum dolor sit
            amet, consectetur adipiscing elit. Duis eu elit eufelis blandit
            condimentum. Ut ac suscipit elit. Etiam tincidunt ante ac sem
            blandit malesuada LoremLorem ipsum dolor sit amet, consectetur
            adipiscing elit. Duis eu elit eufelis blandit condimentum. Ut ac
            suscipit elit. Etiam tincidunt ante ac sem blandit malesuada Lorem
          </div>
        </div>
        <div className={styles.videoSection}>
          <div className={styles.heading} id={styles.sub}>
            Promo.
          </div>
          <video src="/promo.mp4" controls height={400}></video>
        </div>
      </div>
    </>
  );
}
