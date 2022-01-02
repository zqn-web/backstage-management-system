<template>
  <div class="home">
    <Header></Header>
    <el-container class="content">
      <Menu></Menu>
      <!-- 主要内容区 -->
      <el-main>
        <!-- 上方导航栏 -->
        <el-card>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-for="(item, index) in $route.matched" :key="index">{{item.name}}</el-breadcrumb-item>
          </el-breadcrumb>
        </el-card>
        <div class="cont">
          <router-view></router-view>
        </div>
        <Footer></Footer>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Header from './component/Header.vue'
import Footer from './component/Footer.vue'
import Menu from './component/Menu.vue'

export default {
  components: {
    Header,
    Footer,
    Menu
  },
  name: 'Home',
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
  }
}
</script>

<style lang="scss">
.home {
  .content {
    position: absolute;
    width: 100%;
    top: 60px;
    bottom: 0;
    .cont {
      margin: 20px 0;
    }
  }
}
</style>
