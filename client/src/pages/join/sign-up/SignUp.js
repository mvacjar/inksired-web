import styles from './sign-up.module.scss';

import Image from 'next/image';
import { JoinLayout } from '../../../layouts/joinLayout';
import RegisterForm from '@/components/Auth/RegisterForm';

// import { useFormik } from 'formik';
// import {
//   initialValues,
//   validationSchema,
// } from '@/components/Auth/RegisterForm.form';

export default function SignUpPage() {
  // const formik = useFormik({
  //   initialValues: initialValues(),
  //   validationSchema: validationSchema(),
  //   validationOnChange: false,
  //   onSubmit: (values) => {
  //     alert(JSON.stringify(values, null, 2));
  //   },
  // });
  return (
    <>
      <JoinLayout>
        <main className={styles.wrapperSign}>
          <section className={styles.containerSignUp}>
            <article className={styles.articleSignUp}>
              <div className={styles.paragraphContainer}>
                <p className={styles.paragraph}>
                  Welcome to{' '}
                  <span className={styles.highlightWord}>Inksired</span>, the
                  ultimate platform for buying and selling books, and a vibrant
                  forum for book enthusiasts. Join our community to explore a
                  wide range of new and used books, discover great deals, and
                  find your next favorite read. Sell your books with ease and
                  connect with fellow readers who share your passion. Engage in
                  lively discussions about characters, new releases, and beloved
                  classics. Sign up today and immerse yourself in the world of
                  literature at Inksired!
                </p>
              </div>
            </article>
            <RegisterForm />
          </section>
        </main>
      </JoinLayout>
    </>
  );
}
