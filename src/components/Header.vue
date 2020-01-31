<template>
  <header class="header">
    <div class="container header__container">
      <md-tabs class="header__tabs">
        <md-tab
          exact
          to="/"
          class="md-raised"
          md-label="Generate Teams"
        ></md-tab>
        <md-tab
          exact
          to="/all-players-info"
          class="md-raised"
          md-label="All players info"
        ></md-tab>
        <md-tab
          exact
          to="/manage-players"
          class="md-raised"
          md-label="Manage Players"
        ></md-tab>
      </md-tabs>
      <!-- show only when user is logged in -->
      <div class="header__user" v-if="getAuthData.loggedIn">
        <p class="header__user-text">{{ getAuthData.authEmail }}</p>
        <md-button @click="logout" class="header__logout-btn btn-custom-color2">
          Logout
        </md-button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.commit("clearAuthData");
      this.$router.push("/login");
    }
  },
  computed: {
    getAuthData() {
      return this.$store.getters.getAuthData;
    }
  }
};
</script>

<style lang="scss">
.header {
  padding: 10px 0;
  border-bottom: 1px solid #424242;

  &__tabs .md-button.md-active {
    color: rgba(255, 255, 255, 0.7) !important;
    color: var(
      --md-theme-default-text-primary-on-background,
      rgba(255, 255, 255, 0.7)
    ) !important;
  }

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__user {
    display: flex;
  }

  &__user-text {
    color: rgba(255, 255, 255, 0.7) !important;
    margin-right: 10px;
  }
}
</style>
