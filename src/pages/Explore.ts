// src/Explore.ts
import Blits from '@lightningjs/blits'
import Sidebar from '../components/SideBar'

export default Blits.Component('Explore', {
  components: { Sidebar },
  template: `
    <Element w="1920" h="1080" color="black">
      <Sidebar />
      <Text x="200" y="100" content="Explore Page Placeholder" fontSize="48" color="white" />
    </Element>
  `,
})
