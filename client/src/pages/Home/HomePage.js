import styles from './home.module.scss';
import Head from 'next/head';
import { Separator, BarInfo } from '@/components/Shared';
import NavVertical from '@/components/Navbars/NavVertical/NavVertical';
import NavHorizontal from '@/components/Navbars/NavHorizontal/NavHorizontal';
import CarouselGenres from '@/components/CarouselGenres/CarouselGenres';
import { LastBookPublished } from '@/components/Home/LastBookPublished';
import { LatestBooks } from '@/components/Home/LatestBooks';
import Footer from '@/components/Footer/Footer';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Inksired</title>
        <meta name='description' content='Where characters come to life' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.bodyContainer}>
        <NavVertical />
        <NavHorizontal />
        <article className={styles.mainContainer}>
          <section className={styles.carouselContainer}>
            <CarouselGenres />
          </section>
          <section className={styles.lastBookPublishedContainer}>
            <LastBookPublished />
          </section>
          <Separator height={100} />
          <section className={styles.lastBookPublishedContainer}>
            <LatestBooks title={`Read the latest!`} />
          </section>
          <Separator height={100} />
          <section className={styles.barInfoContainer}>
            <BarInfo />
          </section>
          <Separator height={100} />
          <section className={styles.footerContainer}>
            <Footer />
          </section>
        </article>
      </main>
    </>
  );
}
