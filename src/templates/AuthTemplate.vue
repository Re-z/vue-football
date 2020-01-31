<template>
  <div class="auth">
    <div class="overlay auth__overlay">
      <div class="auth__popup">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.auth {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: url("../assets/img/bg.jpg") center center no-repeat;
  background-size: cover;
  &__overlay {
    display: grid;
    align-items: center;
    justify-content: center;
  }
  &__popup {
    background-color: var(--md-theme-default-background, #424242) !important;
    padding: 30px 20px;
  }
}
</style>
