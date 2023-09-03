import style from './intersector.module.scss';
import { useRef, useState, useEffect } from 'react';

export default function Intersector() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsIntersecting(entry.isIntersecting);
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0,
      }
    );

    if (section) {
      observer.observe(section);
    }
  }, []);

  return (
    <>
      <main className={style['app-container']}>
        <section className={style.firstSection}>
          <h2>Scroll ⬇️</h2>
          <p>Check the Intersection Observer API in action.</p>
        </section>
        <section className={style.secondSection}>
          <h2
            ref={sectionRef}
            className={isIntersecting ? style.intersected : style.initial}
          >
            Nice🤠
          </h2>
          <p
            ref={sectionRef}
            className={isIntersecting ? style.intersected : style.initial}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            cupiditate perferendis dignissimos fugiat fugit! Dicta qui
            consectetur deserunt culpa, commodi ipsa perferendis officiis autem
            vel. <strong>It works!</strong>
          </p>
        </section>
      </main>
    </>
  );
}
