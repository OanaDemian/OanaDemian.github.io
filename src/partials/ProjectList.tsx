import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Variable Ratio Generator"
        description="A simple app written in React and MUI that allows the user to generate a sequence of number that average a given value."
        link="/posts/variable-ratio-generator/"
        img={{
          src: '/assets/images/reward.png',
          alt: 'reward cup',
        }}
        category={
          <>
            <Tags color={ColorTags.YELLOW}>React</Tags>
            <Tags color={ColorTags.ROSE}>JavaScript</Tags>
            <Tags color={ColorTags.BLUE}>MUI</Tags>
            <Tags color={ColorTags.PURPLE}>Vite</Tags>
            <Tags color={ColorTags.INDIGO}>Vitest</Tags>
          </>
        }
      />
      <Project
        name="News Challenge"
        description="A single page application in Vite + React that send requests to the Guardian API to get Headline and Article data and display them. Styled with CSS."
        link="/posts/news/"
        img={{
          src: '/assets/images/news-challenge.png',
          alt: 'Newspaper',
        }}
        category={
          <>
            <Tags color={ColorTags.LIME}>React</Tags>
            <Tags color={ColorTags.ROSE}>JavaScript</Tags>
            <Tags color={ColorTags.SKY}>CSS</Tags>
            <Tags color={ColorTags.FUCHSIA}>Vite</Tags>
            <Tags color={ColorTags.AMBER}>Vitest</Tags>
          </>
        }
      />
      <Project
        name="Chitter"
        description="A full stack app that allows the users to sign up, sign in, post messages to a public stream and sign out."
        link="/posts/chitter/"
        img={{
          src: '/assets/images/chitter-challenge.png',
          alt: 'White Bird Shape on Water Color Blue Background',
        }}
        category={
          <>
            <Tags color={ColorTags.RED}>MongoDB</Tags>
            <Tags color={ColorTags.ORANGE}>Express</Tags>
            <Tags color={ColorTags.YELLOW}>React</Tags>
            <Tags color={ColorTags.EMERALD}>Node</Tags>
            <Tags color={ColorTags.BLUE}>Vite</Tags>
            <Tags color={ColorTags.INDIGO}>Mongoose</Tags>
            <Tags color={ColorTags.VIOLET}>Sinon</Tags>
            <Tags color={ColorTags.ROSE}>Mocha</Tags>
            <Tags color={ColorTags.FUCHSIA}>Chai</Tags>
          </>
        }
      />
      <Project
        name="Rock Paper Scissors"
        description="Rock paper scissors game created with HTML, CSS and JavaScript."
        link="/posts/rock-paper-scissors/"
        img={{
          src: '/assets/images/rock-paper-scissors.png',
          alt: 'Rock Paper Scissors',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Mocha</Tags>
            <Tags color={ColorTags.INDIGO}>Chai</Tags>
            <Tags color={ColorTags.ROSE}>JavaScript</Tags>
            <Tags color={ColorTags.AMBER}>Express</Tags>
            <Tags color={ColorTags.SKY}>Bootstrap</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
