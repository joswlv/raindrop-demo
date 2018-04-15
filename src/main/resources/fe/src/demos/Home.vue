<template>
  <div class="my-page">
    <page-header>
      <level-box></level-box>
      <coin-box></coin-box>
      <treasure-box></treasure-box>
      <experience-box></experience-box>
    </page-header>
    <page-content>
      <setting-btn></setting-btn>
      <photo-btn></photo-btn>
      <main-charcater></main-charcater>
    </page-content>
  </div>
</template>
<script>
import { Header, LevelBox, CoinBox, TreasureBox, ExperienceBox} from '../components/header'
import Content from '../components/content'
import {MainCharcater, SettingBtn, PhotoBtn} from '../components/main'

export default {
  components: {
    'page-header': Header,
    MainCharcater,
    SettingBtn,
    PhotoBtn,
    LevelBox,
    CoinBox,
    TreasureBox,
    ExperienceBox,
    'page-content': Content
  }
}
</script>
