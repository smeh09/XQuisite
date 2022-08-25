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
            See usage , pay bills, see previous month data and so much more.
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
            Letricus aims at saving the environment from the constant carbon
            emmisions and exponentially increasing energy wastage. With an easy
            UI and extremely affordable prices, anyone can get our product and
            save money on electricity bills and along with that save the
            environment. We aim to install 12,000,000+ units in India alone and
            save 100,000,000+ units of energy every month effectiviely
            benefitting our consumers with ₹8,00,00,000 which would otherwise
            have been wasted. With plans to go global in the next 5 years
            Letricus will bring change to the world and you can play your part
            right now, order online
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
