---
layout: page
---
<script setup>
    import {
        VPTeamPage,
        VPTeamPageTitle,
        VPTeamMembers,
        VPTeamPageSection
    } from 'vitepress/theme';

    const members2023 = [
        {
            avatar: '/avator/单禹嘉.jpg',
            name: '单禹嘉',
            org: '计算机学院',
            desc: '繁花似锦觅安宁 淡水流云渡此生',
            links: [
                { icon: 'github', link: 'https://github.com/eleliauk' },
            ]
        },
        {
            avatar: '/avator/唐诗吟.png',
            name: '唐诗吟',
            org: '计算机学院',
            desc: '躺？想',       
        },
        {
            avatar: '/avator/李子昂.jpg',
            name: '李子昂',
            org: '计算机学院',
            desc: '格兰芬多在读',   
            links: [
                { icon: 'github', link: 'https://github.com/lulisnd' },
            ]  
        },
        {
            avatar: '/avator/年智斌.jpg',
            name: '年智斌',
            org: '计算机学院',
            desc:'懒得动，懒得想，懒得一切。'   
        },
        {
            avatar: '/avator/焦新亨.png',
            name: '焦新亨',
            org: '计算机学院',
            desc: '这是一个签名',  
            links: [
                { icon: 'github', link: 'https://github.com/drunksweet' }
            ]       
    },
     {
        avatar: '/avator/傅树炫.jpg',
        name: '傅树炫',
        org: '计算机学院',
        desc: '你随便弄一下就好了',                 
    },
      {
        avatar: '/avator/李逸飞.jpg',
        name: '李逸飞',
        org: '计算机学院',
        desc: '心中有海，不赶浪潮',   
        links: [
            { icon: 'github', link: 'https://github.com/ToEiffel' },
           
        ]              
    },
    {
        avatar: '/avator/赖景康.jpg',
        name: '赖景康',
        org: '计算机学院',
        desc: '让故事留下来',                 
    },
    ];
    const members2022 = [
    {
       avatar: '/avator/王敏君.jpg',
        name: '王敏君',
        org: '计算机学院',
        desc: '战斗的意义是为了生存',
    },{
       avatar: '/avator/杨雯琪.jpg',
        name: '杨雯琪',
        org: '计算机学院',
        desc: '咸鱼也想翻身',
    },
    {
       avatar: '/avator/刘子鹏.jpg',
        name: '刘子鹏',
        org: '计算机学院',
        desc: '晚安',
    },
    {
       avatar: '/avator/王桥宏.jpg',
        name: '王桥宏',
        org: '计算机学院',
        desc: '尔曹身与名俱灭，不废江河万古流',
          links: [
            { icon: 'github', link: 'https://github.com/qhongyxy' },
           
        ]
    }];
    const members2021 = [
    {
        avatar: '/avator/耿明强.jpg',
        name: '耿明强',
        org: '计算机学院',
        desc:'a picky info miner',
        links: [
            { icon: 'github', link: 'https://github.com/mqgeng/' },
           
        ]
    }
    ];
</script>

<VPTeamPage>
    <VPTeamPageTitle>
        <template #title>华中师范大学 无人机协会</template>
        <template #lead>成员介绍</template>
    </VPTeamPageTitle>
    <!-- <VPTeamPageSection>
        <template #title>2023级</template>
        <template #lead>...</template>
        <template #members>
            <VPTeamMembers size="small" :members="members2023"/>
        </template>
    </VPTeamPageSection>
    <VPTeamPageSection>
        <template #title>2022级</template>
        <template #lead>...</template>
        <template #members>
            <VPTeamMembers size="small" :members="members2022"/>
        </template>
    </VPTeamPageSection>
    <VPTeamPageSection>
        <template #title>2021级</template>
        <template #lead>...</template>
        <template #members>
            <VPTeamMembers size="small" :members="members2021"/>
        </template>
    </VPTeamPageSection> -->
</VPTeamPage>