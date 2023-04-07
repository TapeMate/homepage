<template>
  <div class="contact-form-container">
    <div v-if="this.screenOut === true" class="success-message">
      <h2>Contact Request has been send successfully!</h2>
      <i class="fa-solid fa-envelope-circle-check fa-bounce"></i>
    </div>
    <div @keyup="popCaptcha" class="form-container">
      <form @submit="onSubmit">
        <div class="input-group">
          <div class="input-control">
            <input
              v-on="{
                keyup: validateTopic,
                focus: onFocusAnimation,
                blur: animationCancel,
              }"
              type="text"
              v-model="topic"
              name="topic"
              id="topic"
              :class="{
                error: checkTopic === false,
                success: checkTopic === true,
              }"
            />
            <label id="topic-label" for="topic" class=""
              >Type in your topic here</label
            >
            <i
              v-if="captchaResponse === true"
              class="fa-regular fa-circle-check input-checked-icon"
              id="topic-success"
            ></i>
            <p
              class="topic-error"
              :class="checkTopic === false ? 'errorMsgShow' : ''"
            >
              {{ errorTopic }}
            </p>
          </div>

          <div class="input-control">
            <textarea
              v-on="{
                keyup: validateDescription,
                focus: onFocusAnimation,
                blur: animationCancel,
              }"
              type="text"
              v-model="description"
              name="description"
              id="description"
              :class="{
                error: checkDescription === false,
                success: checkDescription === true,
              }"
            />
            <label for="description"
              >Fill in your matter of contact here.</label
            >
            <i
              v-if="captchaResponse === true"
              class="fa-regular fa-circle-check input-checked-icon"
              id="description-success"
            ></i>
            <p
              class="description-error"
              :class="checkDescription === false ? 'errorMsgShow' : ''"
            >
              {{ errorDescription }}
            </p>
          </div>
        </div>

        <div class="input-group">
          <div class="input-control">
            <input
              v-on="{
                keyup: validatePhone,
                focus: onFocusAnimation,
                blur: animationCancel,
              }"
              type="text"
              v-model="phoneNumber"
              name="phone"
              id="phone"
              :class="{
                error: checkPhone === false,
                success: checkPhone === true,
              }"
            />
            <label for="phone">Enter Phone Number</label>
            <i
              v-if="captchaResponse === true"
              class="fa-regular fa-circle-check input-checked-icon"
              id="phone-success"
            ></i>
            <p
              class="phone-error"
              :class="checkPhone === false ? 'errorMsgShow' : ''"
            >
              {{ errorPhone }}
            </p>
          </div>

          <div class="input-control">
            <input
              v-on="{
                keyup: matchEmail,
                focus: onFocusAnimation,
                blur: animationCancel,
              }"
              type="email"
              v-model="email"
              name="email"
              id="email"
              :class="{
                error: checkMail === false,
                success: checkMail === true,
              }"
            />
            <label for="email">Enter E-mail Adress</label>
            <i
              v-if="captchaResponse === true"
              class="fa-regular fa-circle-check input-checked-icon"
              id="mail-success"
            ></i>
            <p
              class="mail-error"
              :class="checkMail === false ? 'errorMsgShow' : ''"
            >
              {{ errorMessageMail }}
            </p>
          </div>

          <div class="input-control">
            <input
              v-on="{
                keyup: matchEmail,
                focus: onFocusAnimation,
                blur: animationCancel,
              }"
              type="email"
              v-model="emailRepeat"
              name="email-repeat"
              id="email-repeat"
              :class="{
                error: checkMailRepeat === false,
                success: checkMailRepeat === true,
              }"
            />
            <label for="email-repeat">Repeat E-mail Adress</label>
            <i
              v-if="captchaResponse === true"
              class="fa-regular fa-circle-check input-checked-icon"
              id="mail-repeat-success"
            ></i>
            <p
              class="mail-repeat-error"
              :class="checkMailRepeat === false ? 'errorMsgShow' : ''"
            >
              {{ errorMailRepeat }}
            </p>
          </div>
        </div>
        <div class="submit-container">
          <div v-if="checkSUM === true" class="captcha-positioning">
            <Captcha @captcha-response="getCaptchaResponse" />
          </div>
          <button type="submit" id="submit" disabled="disabled">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Captcha from "./Captcha.vue";

export default {
  name: "ContactForm",
  emits: ["add-contact"],
  components: {
    Captcha,
  },
  data() {
    return {
      // data
      id: "",
      date: "",
      topic: "",
      description: "",
      phoneNumber: "",
      email: "",
      emailRepeat: "",
      // for input error & success handling
      errorTopic: "",
      errorDescription: "",
      errorPhone: "",
      errorMessageMail: "",
      errorMailRepeat: "",
      // status for enable Submit and/or Captcha
      checkTopic: "",
      checkDescription: "",
      checkPhone: "",
      checkMail: "",
      checkMailRepeat: "",
      checkSUM: false,
      // Captcha and Screenout
      captchaResponse: "",
      screenOut: false,
      // animations
      animationTarget: "",
      animationInput: "",
    };
  },

  watch: {},

  methods: {
    // label animation
    onFocusAnimation(e) {
      const targetID = e.currentTarget.id;
      const targetLabel = document.querySelector(`[for=${targetID}]`);

      if (targetLabel.classList.contains("labelSlideBackIn") === true) {
        targetLabel.classList.remove("labelSlideBackIn");
      }
      targetLabel.classList.add("labelSlideOut");
      this.animationTarget = targetLabel;
      this.animationInput = e.currentTarget;
    },

    animationCancel() {
      if (this.animationInput.value.length > 0) {
        return;
      }
      this.animationTarget.classList.add("labelSlideBackIn");
    },

    // enabling captcha after checkSUM is "true" and check if changed

    popCaptcha() {
      if (
        this.checkTopic === true &&
        this.checkDescription === true &&
        this.checkPhone === true &&
        this.checkMail === true &&
        this.checkMailRepeat === true
      ) {
        this.checkSUM = true;
        // document.querySelector("#submit").disabled = false;
      } else {
        this.checkSUM = false;
        // document.querySelector("#submit").disabled = true;
      }
    },

    getCaptchaResponse(value) {
      this.captchaResponse = value;
      if (this.captchaResponse === true) {
        this.enableSubmit();
      }
    },

    // enable submit button
    enableSubmit() {
      document.querySelector("#submit").disabled = false;
      this.checkSUM = "";

      // ugly solution, needs rework:
      document.querySelector("#topic").disabled = true;
      document.querySelector("#description").disabled = true;
      document.querySelector("#phone").disabled = true;
      document.querySelector("#email").disabled = true;
      document.querySelector("#email-repeat").disabled = true;
    },

    // validate Topic
    validateTopic(e) {
      this.toUpperCase(e);
      this.checkTopicLength(e);
    },

    toUpperCase(e) {
      const element = e.currentTarget;
      // guard when pressing tab -> element will be undefined
      if (element === undefined) {
        return;
      }
      const str =
        element.value.charAt(0).toUpperCase() + element.value.slice(1);
      document.querySelector(`#${element.id}`).value = str;
    },

    checkTopicLength(e) {
      const minLength = 10;
      const input = e.currentTarget;
      if (this.topic.length <= minLength) {
        this.errorTopic = "Topic to short.";
        this.checkTopic = false;
      } else {
        this.errorTopic = "";
        this.checkTopic = true;
      }
    },

    // validate Description
    validateDescription(e) {
      this.toUpperCase(e);
      this.checkDescriptionLength(e);
    },

    checkDescriptionLength(e) {
      const minLength = 30;
      const input = e.currentTarget;
      if (this.description.length <= minLength) {
        this.errorDescription = "Description to short.";
        this.checkDescription = false;
      } else {
        this.errorDescription = "";
        this.checkDescription = true;
      }
    },

    // validate Phone
    validatePhone(e) {
      const regex = /^(\+49|0)(?:(?!\d*(\d)\1{7})[\d\s()-]{8,})$/;
      const input = e.currentTarget;
      if (!regex.test(this.phoneNumber)) {
        this.errorPhone = "Please enter a valid phone number.";
        this.checkPhone = false;
      } else {
        this.errorPhone = "";
        this.checkPhone = true;
      }
    },

    // validate E-Mail
    matchEmail(e) {
      this.validateEmail(e);
      this.verifyEmail(e);
    },

    validateEmail(e) {
      const regex = /^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
      if (!regex.test(this.email)) {
        this.errorMessageMail = "Please enter a valid E-Mail adress.";
        this.checkMail = false;
      } else if (regex.test(this.email)) {
        this.errorMessageMail = "";
        this.checkMail = true;
      }
    },

    verifyEmail(e) {
      const Input = document.querySelector("#email-repeat");
      const email = this.email;
      const verifyEmail = this.emailRepeat;
      // prevents copy pasting on email repeat input
      Input.addEventListener("paste", (e) => e.preventDefault());

      if (email !== verifyEmail) {
        this.errorMailRepeat =
          "Your E-Mail adresses don't match. Please check.";
        this.checkMailRepeat = false;
      } else if (email === verifyEmail) {
        this.errorMailRepeat = "";
        this.checkMailRepeat = true;
      }
    },

    // submit Data
    onSubmit(e) {
      e.preventDefault();

      const currentDate = new Date();
      const day = currentDate.getDate();
      // Add 1 because months are zero-indexed
      const month = currentDate.getMonth() + 1;
      const year = currentDate.getFullYear();

      const newID = Math.floor(Math.random() * 10000);

      const newContact = {
        id: `${newID}-${day}${month}${year}`,
        date: `${day}.${month}.${year}`,
        topic: this.topic,
        description: this.description,
        phoneNumber: this.phoneNumber,
        email: this.email,
      };
      // emits data to the parent component. can be called in template.
      this.$emit("add-contact", newContact);

      // resets input values.
      this.topic = "";
      this.description = "";
      this.phoneNumber = "";
      this.email = "";
      this.verifyEmail = "";
      this.screenOut = true;
      setTimeout(() => {
        this.screenOut = false;
        window.location.reload();
      }, 2500);
    },
  },
};
</script>

<style scoped>
.captcha-positioning {
  /* position: absolute;
  z-index: 4;
  top: 0;
  left: 0; */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
}
</style>
