<template>
  <div class="home_page">
    <div class="row">
      <div class="col_fir">
        <div class="banner">
          <img
            src="../../assets/pic/banner1.jpg"
            style="width: 51.5625rem;height:32.1875rem;"
          />
        </div>
      </div>
      <div class="col_sec">
        <div class="user">
          <img
            src="../../assets/pic/user_pic.jpg"
            style="width: 8rem; height: 8rem; border-radius: 0.3rem"
          />
          <h2>小五</h2>
          <p>保佑身边的人都天天开心</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.home_page {
  .row {
    display: flex;
    justify-content: space-between;
    .col_fir {
      flex: 2.2;
      .banner {
        background-color: white;
        padding: 0.3rem;
      }
    }
    .col_sec {
      flex: 1;
      margin-left: 1rem;
      width: 100%;
      .user {
        text-align: center;
        padding: 3rem 2rem;
        background-color: white;
        h2 {
          margin: 1.2rem 0;
        }
        p {
          font-size: 0.9rem;
          color: rgba(156,163,175,1);
        }
      }
    }
  }
}
</style>
