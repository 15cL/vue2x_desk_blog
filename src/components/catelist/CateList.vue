<template>
  <div class="cate_list">
    <header><i class="iconfont icon-caidan"></i> 分类</header>
    <section>
      <label
        v-for="cate in cates"
        :key="cate.id"
        @click.prevent="tabToCateArt(cate)"
        ><i class="iconfont icon-jinrujiantou"></i>{{ cate.name }} ({{cate.num}})</label
      >
    </section>
  </div>
</template>

<script>
export default {
  props: ['cates'],
  methods: {
    tabToCateArt (cate) {
      this.$router.push({
        path: '/blog/cate',
        query: { cate: encodeURIComponent(JSON.stringify(cate)) }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.cate_list {
  background-color: white;
  padding: 2rem;
  border-radius: 0.3rem;
  section {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    label {
      margin-top: 1rem;
      flex: 0 1 47%;
      padding: 0.7rem 0 0.7rem 0.2rem;
      font-size: 0.9rem;
      background-color: var(--theme-bg-color);
      cursor: pointer;
      i {
        padding-right: 1rem;
      }
    }
    & :hover {
      color: rgb(209, 92, 8);
      box-shadow: 0 0 0.4rem rgb(232, 230, 230);
    }
  }
}
</style>
