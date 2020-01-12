<template>
  <div>
      <app-alert-popup></app-alert-popup>

      <component :is="selectTemplate"></component>
  </div>
</template>

<script>
import InnerPageTemplate from './templates/InnerPageTemplate'
import AuthTemplate from './templates/AuthTemplate'
export default {
  computed: {
    selectTemplate() {

      if(this.$route.fullPath === '/login') {
        return 'AuthTemplate'
      }
      return 'InnerPageTemplate'

    }
  },
  components: {
    InnerPageTemplate,
    AuthTemplate
  }
}
</script>
<style lang="scss">
@import url("https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
@mixin r($width) {
  @media screen and (max-width: $width + "px") {
    @content;
  }
}
body {
  min-width: 1024px;
}
.sidebar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &__btn {
    width: 100%;
  }
}
.result-box {
  display: flex;
  justify-content: space-between;
  &__vs {
    align-self: center;
    font-size: 40px;
    font-weight: bold;
    margin: 0 20px;
  }
  &__item {
    img {
      max-height: 80px;
    }
  }
  &__item-title {
    display: block;
    text-align: center;
  }
  .md-card {
    background: #424242;
  }
}
.container {
  width: 1200px;
  margin: 0 auto;
  @include r(1200) {
    width: 100%;
  }
}
.img-reverse {
  margin: 0 16px 0 0 !important;
}
.text-reverse {
  text-align: right !important;
}
.text-center {
  text-align: center;
}
.text-right {
  text-align: right;
}
.app-stretched {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.router-link-exact-active {
  background: #64dd17 !important;
}
.router-link-exact-active .md-button-content {
  color: #424242 !important;
  color: var(--md-theme-default-background, #424242) !important;
}
.md-app {
  min-height: 350px;
  border: 1px solid rgba(#000, 0.12);
  flex-grow: 2;
}
.md-app-container {
  transition: 0s !important;
}
.md-drawer {
  // width: 230px;
  max-width: calc(100vw - 125px);
  transition: 0s !important;
  @include r(1200) {
    max-width: 300px !important;
  }
}
.font-weight-normal {
  font-weight: 300 !important;
}
.md-overlay {
  z-index: 10 !important;
}
.md-app-content,
.custom-bg,
.custom-dialog,
.md-tabs-container,
.header__tabs .md-tabs-navigation {
  background: #303030 !important;
}
.btn-custom-color {
  background: #303030 !important;
  color: white !important;
}
.btn-custom-color2 {
  color: #9d9d9d !important;
  background-color: #424242 !important;
  background-color: var(--md-theme-default-background, #424242) !important;
}
.btn-custom-color-warn {
  background: tomato !important;
}
.star {
  display: inline-block;
  width: 20px;
  height: 20px;
  background: url(./assets/img/star.svg);
}
.pointer {
  cursor: pointer;
}
.error {
  color: red !important;
}
.md-title-visible {
  white-space: pre-wrap !important;
}
.md-tabs.md-theme-default .md-tabs-indicator {
  display: none !important;
}
.md-field.md-focused label {
  color: inherit !important;
}
.md-field.md-theme-default:before {
  background-color: inherit !important;
}
.md-icon.close-icon {
  display: block;
  width: 15px;
  height: 15px;
  font-size: 15px !important;
}
.is-hidden {
  display: none !important;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,.8);
  width: 100%;
  height: 100vh;
}
.absolute-centered {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%)

}
</style>
