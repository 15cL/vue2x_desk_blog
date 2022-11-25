<template>
  <div class="cate_list">
    <header><i class="iconfont icon-caidan"></i> 分类</header>
    <section>
      <a
        v-for="cate in cates"
        :key="cate.id"
        ><i class="iconfont icon-jinrujiantou"></i>{{ cate.name }} (1)</a
      >
    </section>
  </div>
</template>

<script>
export default {
  props: ['cates']
}
</script>

<style lang="scss" scoped>
.cate_list {
  margin-top: 1rem;
  background-color: white;
  padding: 2rem;
  border-radius: 0.3rem;
  section {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    a {
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
