import styles from "./AboutPage.module.scss";

function AboutPage() {
    return (
        <div className={styles["about-page-wrapper"]}>
            <p className={styles.title}>ABOUT</p>
            <p className={styles.desc}>
                ZUNOTE is a basic productivity tool that you can take notes while voice recording. It will be a
                multi-platform app soon. Desktop app will support Macos (arm/intel), Windows and Linux operating
                systems. Mobile app will support both IOS and Android. Lastly, extension will be available on
                Chrome/Firefox extension store.
            </p>
        </div>
    );
}

export default AboutPage;
