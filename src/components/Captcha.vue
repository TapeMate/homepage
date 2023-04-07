<template>
  <div class="captcha-container captchaSlideIn">
    <form @submit="onSubmit">
      <h3>Captcha</h3>
      <span class="captcha" id="passphrase">{{ botphrase }}</span>
      <input
        id="captcha"
        type="text"
        placeholder="Enter Above Word"
        v-model="captcha"
      />
      <input
        v-if="honeypot === true"
        id="captcha-repeat"
        type="text"
        placeholder="Repeat Above Word"
        v-model="captchaRepeat"
      />
      <input id="captch-submit" type="submit" value="submit" />
    </form>
    <div class="captcha-response">
      <h5 class="success" v-if="response === true">success</h5>
      <h5 class="error" v-if="response === false">error</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "Captcha",
  data() {
    return {
      botphrase: "EBLU",
      passphrase: "blue",
      captcha: "",
      response: "",

      // set on true for honeypot render
      honeypot: true,
      captchaRepeat: "",
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      const captcha = this.captcha.toLowerCase();
      const repeat = this.captchaRepeat;

      if (captcha === this.passphrase && repeat === "") {
        this.response = true;
      } else if (captcha === this.botphrase.toLowerCase() || captcha !== "") {
        this.response = false;
      } else {
        this.response = false;
      }

      this.emitResponse(this.response);

      this.captcha = "";
      this.captchaRepeat = "";
    },
    emitResponse(value) {
      this.$emit("captcha-response", value);
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
#captcha-repeat {
  position: absolute;
  top: -9999px;
  left: -9999px;
}
.captcha-response {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
h3 {
  padding: 1rem;
}
h5 {
  margin: 0;
  padding: 0.5rem;
  background: #222;
  width: 100%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
.success {
  color: lime;
}
.error {
  color: tomato;
}

#submit {
  width: 150px;
  margin-bottom: 10px;
}

input {
  padding: 1rem;
}
.captcha-container {
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;
  width: 320px;
  height: auto;
}
body {
  background: #335778;
}

form {
  width: 100%;
  background: #ffffff;
  color: #444;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid #333;
  padding: 0.5rem;
}

.captcha {
  padding-left: 2em;
  text-align: center;
  display: block;
  margin-bottom: 0.5em;
  font-size: 2em;
  letter-spacing: 8px;
}
.captcha::first-letter {
  position: relative;
  margin-right: -3.6em;
}

input[type="text"] {
  display: block;
  margin-bottom: 1em;
  border-radius: 4px;
  border: 1px solid #aaa;
}

input[type="submit"] {
  background: #364d8f;
  color: #fff;
  border: none;
  border-radius: 3px;
  padding: 5px 10px;
}

.notice {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  background: #fafafa;
  font-size: 1.4em;
  text-align: center;
  padding: 0.5em;
  color: #328580;
  font-weight: 700;
}

#bot {
  color: inherit;
  text-decoration: none;
  background: #fafafa;
  border-radius: 3px;
  display: block;
  margin: 5em auto 0;
  width: 120px;
  padding: 5px 10px;
  text-align: center;
}

@keyframes captchaSlideIn {
  0% {
    transform: translate(-500px, 0);
  }
  100% {
    transform: translate(0, 0);
  }
}

.captchaSlideIn {
  animation: captchaSlideIn 0.5s ease-in-out forwards;
}
</style>
