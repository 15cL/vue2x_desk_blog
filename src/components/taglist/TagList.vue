<template>
  <div class="tag_list">
    <header><i class="iconfont icon-biaoqian"></i> 标签</header>
    <section>
      <div v-for="tag in tags" :key="tag.id" @click="toTagPage(tag)">
        <label v-if="tag.num">
          <p>{{ tag.name }}</p>
          <span style="color: white">({{ tag.num }})</span>
        </label>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: ['tags'],
  methods: {
    toTagPage (tag) {
      this.$router.push({
        path: '/blog/tag',
        query: { tag: encodeURIComponent(JSON.stringify(tag)) }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.tag_list {
  margin-top: 1rem;
  background-color: white;
  padding: 2rem;
  border-radius: 0.3rem;

  section {
    display: flex;
    flex-wrap: wrap;
    font-size: 0.1rem;
    div {
      label {
        display: flex;
        margin: 1rem 0.6rem 0 0;
        padding: 0.4rem 0.5rem;
        border-radius: 2rem;
        background-color: var(--theme-bg-color);
        cursor: pointer;
        span {
          margin-left: 0.3rem;
          padding: 0 0.4rem;
          text-align: center;
          display: inline-block;
          border-radius: 1rem;
          background-color: rgb(210, 207, 207);
        }
      }
      & :hover {
        color: rgb(218, 170, 24);
        box-shadow: 0 0 0.4rem rgb(232, 230, 230);
      }
    }
  }
}
</style>
