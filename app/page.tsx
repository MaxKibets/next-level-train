import Image from "next/image";

import logoFull from "@/public/logo-full.svg";
import { AnimatedFrame, Button, Heading, Row } from "@/components/ui";

import css from "./page.module.css";

export default function Home() {
  return (
    <>
      <main className={css.wrap}>
        <AnimatedFrame direction="top" delay={700} className={css.logoWrap}>
          <Image src={logoFull} fill alt="NEXT LEVEL TRAIN: log, plan, achive!" />
        </AnimatedFrame>
        <AnimatedFrame direction="bottom" delay={900}>
          <Heading size="1">Welcome to Next Level Train!</Heading>
        </AnimatedFrame>
        <AnimatedFrame direction="bottom" delay={1100}>
          <p>
            Elevate your fitness journey by logging your workouts and planning future
            sessions. Our platform makes it easy to track your progress, set goals, and
            stay motivated. Whether you’re a beginner or a seasoned athlete, we’re here to
            help you reach new heights in your training. Start your transformation today!
          </p>
        </AnimatedFrame>
        <Row size="large">
          <AnimatedFrame direction="bottom" delay={1300}>
            <Button href="/login">Get Started</Button>
          </AnimatedFrame>
        </Row>
      </main>
      <div className={css.overlayTop} />
      <div className={css.overlayBottom} />
    </>
  );
}
