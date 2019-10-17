<template>
  <div class="container">
    <form class="md-layout md-gutter">
        <div class="md-layout-item md-size-25">
            <img src="../../assets/img/avatar.jpg" class="form-img" alt="">
            <md-button style="width: 100%" class="md-raised md-accent">Send form</md-button>
        </div>
        <div class="md-layout-item" action="">
            <md-field>
                <label>Type here!</label>
                <md-input v-model="type"></md-input>
                <span class="md-helper-text">Helper text</span>
            </md-field>

            <md-field>
                <label>With label</label>
                <md-input v-model="withLabel" placeholder="A nice placeholder"></md-input>
            </md-field>

            <md-field>
                <label>Number</label>
                <md-input v-model="number" type="number"></md-input>
            </md-field>

            <md-field>
                <label>Textarea</label>
                <md-textarea v-model="textarea"></md-textarea>
            </md-field>
        </div>
    </form>

    
  </div>
</template>

<script>
  export default {
    data: () => ({
      type: null,
      number: null,
      textarea: null,
    })
  }
</script>

<style lang="scss">
    .form-img {
        display: block;
        border-radius: 50%;
        margin: 0 auto 15px auto;
    }
</style>