import { useState, useEffect } from 'react';
import styles from './navHorizontal.module.scss';
import Image from 'next/image';
import router from 'next/router';
import { useAuth } from '@/hooks/useAuth';

export default function NavHorizontal() {
  const [searchValue, setSearchValue] = useState('');
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hidden, setHidden] = useState(false);
  const { user } = useAuth();

  const handleClearInput = (e) => {
    e.preventDefault();
    setSearchValue('');
  };

  const handleSearch = (e) => {
    e.preventDefault();
  };

  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY && window.scrollY > 10) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [lastScrollY]);

  const toCart = () => {
    router.push('/cart');
  };

  const toLogin = () => {
    router.push('/join/sign-in');
  };

  const toSignUp = () => {
    router.push('/join/sign-up');
  };

  return (
    <>
      <nav className={`${styles.navbar} ${hidden ? styles.hidden : ''}`}>
        <div className={styles.imageWrapper}>
          <Image
            src='/images/layer-horizontal.svg'
            alt='Join Background'
            fill
            priority
            style={{
              objectFit: 'cover',
            }}
            className={styles.horizontalBackground}
          />
          <div className={styles.searchContainer}>
            <form className={styles.searchForm} onSubmit={handleSearch}>
              <input
                type='text'
                className={styles.searchInput}
                placeholder='Search...'
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </form>
            <button type='submit' className={styles.searchIconContainer}>
              <div className={styles.iconsSearch}>
                <Image
                  src='/images/x.svg'
                  width={18}
                  height={18}
                  alt='clear-icon'
                  className={styles.xIcon}
                  onClick={handleClearInput}
                />
                <Image
                  src='/images/loupe.svg'
                  width={21}
                  height={21}
                  alt='loupe-icon'
                  className={styles.searchIcon}
                />
              </div>
            </button>
          </div>
          <div className={styles.cartIconContainer}>
            {user ? (
              <Image
                src='/images/cart2.png'
                width={45}
                height={45}
                alt='cart-icon'
                className={styles.cartIcon}
                onClick={toCart}
              />
            ) : (
              <div className={styles.buttonsContainer}>
                <button className={styles.signInButton} onClick={toLogin}>
                  Sign In
                </button>
                <button className={styles.signUpButton} onClick={toSignUp}>
                  Sign Up
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
