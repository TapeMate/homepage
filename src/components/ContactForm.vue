<template>
  <div class="contact-form-container">
    <div v-if="this.screenOut === true" class="success-message">
      <h2>Contact Request has been send successfully!</h2>
      <i class="fa-solid fa-envelope-circle-check fa-bounce"></i>
    </div>
    <div @keyup="enableSubmit" class="form-container">
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
              v-if="checkTopic === true"
              class="fa-regular fa-circle-check"
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
              v-if="checkPhone === true"
              class="fa-regular fa-circle-check"
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
                keyup: validateMail,
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
              v-if="checkMail === true"
              class="fa-regular fa-circle-check"
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
                keyup: verifyMailAdress,
                focus: onFocusAnimation,
                blur: animationCancel,
              }"
              type="email"
              v-model="verifyEmail"
              name="email-repeat"
              id="email-repeat"
              :class="{
                error: checkMailRepeat === false,
                success: checkMailRepeat === true,
              }"
            />
            <label for="email-repeat">Repeat E-mail Adress</label>
            <i
              v-if="checkMailRepeat === true"
              class="fa-regular fa-circle-check"
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
        <button type="submit" id="submit" disabled="disabled">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactForm",
  emits: ["add-contact"],
  data() {
    return {
      // data
      id: "",
      date: "",
      topic: "",
      description: "",
      phoneNumber: "",
      email: "",
      verifyEmail: "",
      // for input error & success handling
      errorTopic: "",
      errorDescription: "",
      errorPhone: "",
      errorMessageMail: "",
      errorMailRepeat: "",
      // status for enable Submit
      checkTopic: "",
      checkDescription: "",
      checkPhone: "",
      checkMail: "",
      checkMailRepeat: "",
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

    // enabling Submit Button after checksum is "true" and check if changed
    enableSubmit() {
      if (
        this.checkTopic === true &&
        this.checkDescription === true &&
        this.checkPhone === true &&
        this.checkMail === true &&
        this.checkMailRepeat === true
      ) {
        document.querySelector("#submit").disabled = false;
      } else {
        document.querySelector("#submit").disabled = true;
      }
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
    validateMail(e) {
      const regex = /^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
      if (!regex.test(this.email)) {
        this.errorMessageMail = "Please enter a valid E-Mail adress.";
        this.checkMail = false;
      } else if (regex.test(this.email)) {
        this.errorMessageMail = "";
        this.checkMail = true;
      }
    },

    verifyMailAdress() {
      const mail = document.querySelector("#email").value;
      const mailRepeat = document.querySelector("#email-repeat").value;
      const mailRepeatInput = document.querySelector("#email-repeat");

      // prevents copy pasting on email repeat input
      mailRepeatInput.addEventListener("paste", (e) => e.preventDefault());

      if (mail !== mailRepeat) {
        this.errorMailRepeat =
          "Your E-Mail adresses don't match. Please check.";
        this.checkMailRepeat = false;
      } else {
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

<style scoped></style>
