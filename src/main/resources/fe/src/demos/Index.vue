<template>
  <div class="page">
    <page-footer>
      <footer-item v-bind:class="{ 'active' : currentView === 'home' }" @click.native="changeView('home')">
        <span class="icon icon-stamp"></span>
        <label>스탬프</label>
      </footer-item>
      <footer-item v-bind:class="{ 'active' : currentView === 'search' }" @click.native="changeView('search')">
        <span class="icon icon-quest"></span>
        <span class="badge">99+</span>
        <label>퀘스트</label>
      </footer-item>
      <footer-item v-bind:class="{ 'active' : currentView === 'noti' }" @click.native="changeView('noti')">
        <span class="icon icon-closet"></span>
        <label>옷장</label>
      </footer-item>
      <footer-item v-bind:class="{ 'active' : currentView === 'about' }" @click.native="changeView('about')">
        <span class="icon icon-map"></span>
        <label>지도</label>
      </footer-item>
    </page-footer>
    <keep-alive>
      <component :is="currentView"></component>
    </keep-alive>
  </div>
</template>

<script>
import Page from '../components/page'
import { Footer, Item, FooterItem } from '../components/footer'
import Home from './Home'
import Search from './Search'
import Noti from './Noti'
import About from './About'
import Main from './Main'

console.log(FooterItem)
export default {
  components: {
    Page,
    'page-footer': Footer,
    'footer-item': Item,
    'home': Home,
    'search': Search,
    'noti': Noti,
    'about': About,
    'main' : Main
  },
  data () {
    return {
      currentView: 'home'
    }
  },
  methods: {
    changeView (view) {
      this.currentView = view
    }
  }
}
</script>

<style lang="less">
.my-page {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  bottom: 2.8rem;
}
.icon-stamp {
  background-size: 1.3rem 1.3rem;
  background-image: url("../assets/images/stamp/icon_00_stamp.png");
}
.icon-quest{
  background-size: 1.3rem 1.3rem;
  background-image: url("../assets/images/quest/icon_01_quest.png");
}
.icon-closet {
  background-size: 1.3rem 1.3rem;
  background-image: url("../assets/images/wardrobe/icon_02_closet.png");
}
.icon-map {
  background-size: 1.3rem 1.3rem;
  background-image: url("../assets/images/map/icon_03_map.png");
}
</style>
