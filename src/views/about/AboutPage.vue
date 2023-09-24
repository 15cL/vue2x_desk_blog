<template>
  <div class="aboutPage">
    <header>
      <div class="title">
        <i class="el-icon-user"></i>
        关于我
      </div>
      <p>我只是游离在人世间的须臾 。</p>
    </header>
    <section>
      <div class="fir">
        <h4>自我介绍</h4>
        <p>出生于1999年，普普通通打工人，招牌喜好就是吃吃吃。</p>
        <p>喜欢尝试些新事物，也许三分热度，也许坚持到底。</p>
        <p>经常玩玩游戏，但无法长时间进行。觉得没意思，哈哈</p>
        <p>噢！还有我喜欢一起的感觉。有机会，我们也一起叭。</p>

      </div>
      <h4>保佑身边的人都天天开心。</h4>
    </section>
  </div>
</template>

<script>
export default {}
</script>
<style lang="scss" scoped>
.aboutPage {
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: white;
  margin-bottom: 9.8rem;
  p {
    font-size: 0.8rem;
  }
  header {
    p {
      margin-top: 1rem;
      padding: 1rem;
      border-radius: 0.5rem;
      color: white;
      background-color: rgb(67, 63, 63);
    }
  }
  section {
    h4 {
      padding: 1rem 0;
    }
    p {
      padding: 0.3rem 1rem;
    }
  }
}
</style>
