<template>
  <div class="login">
    <div class="custom-margin md-headline text-right">Login</div>
    <form action="" @submit.prevent="login">
      <md-field class="custom-input">
        <label>Email</label>
        <md-input v-model="email" type="email"></md-input>
      </md-field>
      <md-field class="custom-input">
        <label>Password</label>
        <md-input v-model="password" type="password"></md-input>
      </md-field>
      <div class="custom-btn-wrap">
        <md-button type="submit" class="custom-btn md-raised md-accent"
          >Log in</md-button
        >
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    //login function, that connects to Firebase
    sendLoginRequestToDB(userData) {
      const firebaseApiKey = "AIzaSyAWDC-A_tPOyySP7GeabRr_KlLRFLt82KY",
        firebaseLoginUrl =
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword";
      fetch(`${firebaseLoginUrl}?key=${firebaseApiKey}`, {
        method: "POST",
        body: JSON.stringify({
          ...userData
        })
      })
        .then(response => response.json())
        .then(response => {
          //if response doesnt have token, it means that we have error
          if (!response.idToken) {
            //handle error
            this.$store.commit(
              "showAlertPopup",
              response.error.errors[0].message
            );
          } else {
            // if we have token - update state
            this.$store.commit("setAuthData", response);
            this.$router.push("/");
          }
        });
    },
    //login function that handles form submit
    login() {
      if (this.email && this.password) {
        const formData = {
          email: this.email,
          password: this.password
        };
        //trigger connect to Firebase
        this.sendLoginRequestToDB(formData);
      } else {
        this.$store.commit("showAlertPopup", "All fields are mandatory");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  min-width: 350px;
}

.custom-input {
  display: block;
  margin: 0 0 20px 0 !important;

  input {
    width: 100%;
  }
}

.custom-margin {
  margin-bottom: 20px;
}

.custom-btn-wrap {
  display: grid;
  justify-content: end;
}

.custom-btn {
  margin: 20px 0 0 0 !important;
}
</style>
