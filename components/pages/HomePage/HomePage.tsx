import { AnimatedAppear, Button, Heading, Row, Logo } from "@/components/ui";
import { ALIGN, DIRECTION, HEADING_SIZE, SIZE } from "@/constants/global";
import { AUTH_URL } from "@/constants/routes";

import css from "./homePage.module.css";

const HomePage = () => (
  <>
    <main className={css.wrap}>
      <Row size={SIZE.LARGE}>
        <AnimatedAppear direction={DIRECTION.TOP} delay={700}>
          <Logo withText size={SIZE.LARGE} />
        </AnimatedAppear>
      </Row>
      <AnimatedAppear direction={DIRECTION.BOTTOM} delay={900}>
        <Heading size={HEADING_SIZE.H1} inverse>
          Welcome to Next&nbsp;Level&nbsp;Train!
        </Heading>
      </AnimatedAppear>
      <AnimatedAppear direction={DIRECTION.BOTTOM} delay={1100}>
        <p>
          Elevate your fitness journey by logging your workouts and planning future
          sessions. Our platform makes it easy to track your progress, set goals, and stay
          motivated. Whether you’re a beginner or a seasoned athlete, we’re here to help
          you reach new heights in your training. Start your transformation today!
        </p>
      </AnimatedAppear>
      <Row size={SIZE.LARGE} align={ALIGN.CENTER}>
        <AnimatedAppear direction={DIRECTION.BOTTOM} delay={1300}>
          <Button size={SIZE.LARGE} href={AUTH_URL.LOGIN}>
            Get Started
          </Button>
        </AnimatedAppear>
      </Row>
    </main>
    <div className={css.overlayTop} />
    <div className={css.overlayBottom} />
  </>
);

export default HomePage;