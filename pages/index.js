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
                "Our inbuilt screen shows the units used and the total monthly bill. The website further adds on a few details and gives personalized comments on how you can reduce your bill."
              }
            />
            <FeatureCard
              title={"Pay and save"}
              iconPath={"/icons/money.svg"}
              desc={
                "If your units consumed per month is lesser than the level set by the goverment, a 5% to 10% cashback will be provided. One can avail the cashback by paying directly through the website."
              }
            />
            <FeatureCard
              title={"Monitor the data"}
              iconPath={"/icons/chart.svg"}
              desc={
                "Our website provides graphical analytics and text representation of previous months electricity use and gives a percentage reduce or increase relative to the current month."
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
