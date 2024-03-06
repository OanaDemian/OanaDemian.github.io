import {
  GradientText,
  HeroAvatar,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          I'm <GradientText>Oana</GradientText> 👋
        </>
      }
      description={
        <>
          A passionate and empathetic software engineer, with a background in
          Applied Behaviour Analysis and Special Needs Education. I would like
          to be part of a team that creates products aimed at making the world
          better and I think technology is a way to do this at a grand scale.{' '}
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
    />
  </Section>
);

export { Hero };
