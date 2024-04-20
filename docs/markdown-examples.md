---
layout: page
---
<script setup>
  import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
  VPTeamPageSection
} from 'vitepress/theme'

const members2023 = [
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Evan You',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Red',
    desc: '大光头',
    org: '计算机学院',
    inks: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
            ]
  }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>华中师范大学 无人机协会</template>
    <template #lead>太庙</template>
  </VPTeamPageTitle>
  <VPTeamPageSection>
    <template #title>2023级</template>
    <template #lead>...</template>
    <template #members>
      <VPTeamMembers size="small" :members="members2023">
    </template>
  </VPTeamPageSection>
</VPTeamPage>