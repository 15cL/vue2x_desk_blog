<template>
  <div class="detail_footer">
    <div class="content">
      <div class="left">
        <nav>上一篇</nav>
        <div class="footer_title">
          <slot name="left"></slot>
        </div>
      </div>
      <div class="right">
        <nav>下一篇</nav>
        <div class="footer_title">
          <slot name="right"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'lastArt', 'nextArt'
  ]
}
</script>

<style lang="scss" scoped>
.detail_footer {
  margin-top: 1rem;
  padding: 1rem;
  font-size: 0.6rem;
  border-radius: 0.2rem;
  background-color: white;
  .content {
    display: flex;
    justify-content: space-between;
    nav {
      color: rgb(167, 167, 167);
    }
    .footer_title {
      margin-top: 0.4rem;
      text-align: center;
    }
  }
}
</style>
