// src/components/SideBar.ts
import Blits from '@lightningjs/blits'

export default Blits.Component('Sidebar', {
  state() {
    return {
      menuItems: [
        { id: 'home', icon: 'home.png', label: 'Home' },
        { id: 'explore', icon: 'explore.png', label: 'Explore' },
        { id: 'videos', icon: 'videos.png', label: 'Videos' },
        { id: 'fixtures', icon: 'fixtures.png', label: 'Fixtures' },
        { id: 'results', icon: 'results.png', label: 'Results' },
        { id: 'profile', icon: 'profile.png', label: 'Profile' },
        { id: 'help', icon: 'help.png', label: 'Help' },
      ],
    }
  },

  template: `
    <Element w="120" h="1080" color="#0c0f26">
      <Text content="WILLOW" x="10" y="30" fontSize="22" color="white" />
      <Element y="100">
        <Element
          b:for="(item, i) in $menuItems"
          :id="item.id"
          :y="i * 80"
          w="120"
          h="60"
          :focusable="true"
          :color="$focused?.id === item.id ? '#2c2f49' : ''"
        >
          <Element :src="'assets/icons/' + item.icon" x="20" y="10" w="40" h="40" />
          <Text
            :content="item.label"
            x="70"
            y="18"
            fontSize="18"
            color="white"
            :alpha="$focused?.id === item.id ? 1 : 0"
            :transition="{alpha: {duration: 150}}"
          />
        </Element>
      </Element>
    </Element>
  `,

  input: {
    enter() {
      const map = {
  home: '/',
  explore: '/explore',
  videos: '/videos',
  fixtures: '/fixtures',
  results: '/results',
  profile: '/profile',
  help: '/help',
} as const;

type RouteKey = keyof typeof map;

const current = this.$focused?.id as RouteKey;

if (current && current in map) {
  this.$router.to(map[current]);
}

    },
  },
})
