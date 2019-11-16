<template>
  <!-- попап показывается при какой либо ошибке или просто для того,
    чтобы донести информацию для юзера. Через vuex в него передаются
    состояние(видим или нет) и сообщение -->
  <md-dialog
    :md-click-outside-to-close="false"
    :md-active.sync="getAlertPopup.isVisible"
  >
    <md-dialog-title class="md-headline ">INFO</md-dialog-title>
    <md-dialog-content class="md-title">
      {{ getAlertPopup.msg }}
    </md-dialog-content>

    <md-dialog-actions>
      <md-button class="md-primary btn-custom-color" @click="closeAlertPopup">
        Ok!
      </md-button>
    </md-dialog-actions>
  </md-dialog>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  computed: mapGetters(["getAlertPopup"]),
  methods: {
    closeAlertPopup() {
      this.$store.commit("closeAlertPopup");
    }
  }
};
</script>
