import Blits from '@lightningjs/blits';

export default Blits.Component('Player', {
  template: `
    <Element w="1920" h="1080" color="#000">
      <Text x="50" y="50" text="[Video Player]" fontSize="36" color="white" />
    </Element>
  `,
});
