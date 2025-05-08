import Blits from "@lightningjs/blits"
import Home from "./pages/Home"
import Explore from "./pages/Explore"

export default Blits.Application({
  template: `
    <Element>
      <RouterView />
    </Element>
  `,
  routes: [
    { path: '/', component: Home },
    { path: '/explore', component: Explore },
  ]
})
