// src/Home.ts
import Blits from '@lightningjs/blits'
import Sidebar from '../components/SideBar'

export default Blits.Component('Home', {
  components: { Sidebar },
  template: `
    <Element w="1920" h="1080" color="#111">
      <Sidebar />
      <Text content="Home Page" x="200" y="100" fontSize="48" color="white" />
    </Element>
  `,
})
