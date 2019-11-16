<template>
  <header class="header">
    <div class="container">
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
    </div>
  </header>
</template>

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
}
</style>
