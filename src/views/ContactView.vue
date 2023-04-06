<template>
  <div class="contact-form-wrapper">
    <ContactForm @add-contact="addContact" />
  </div>
</template>

<script>
import ContactForm from "../components/ContactForm.vue";

export default {
  name: "HomeView",
  components: {
    ContactForm,
  },
  methods: {
    addContact(newContact) {
      fetch("http://localhost:3000/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newContact),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style scoped>
.contact-form-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  width: 100%;
}
</style>
