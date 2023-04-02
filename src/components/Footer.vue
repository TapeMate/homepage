<template>
  <footer class="footer-main">
    <div class="footer-container">
      <div class="footer-content">
        <p>{{ companyData[0].name }}</p>
        <p>{{ companyData[0].street }}</p>
        <p>{{ companyData[0].zipCode }} {{ companyData[0].city }}</p>
        <p v-if="companyData[0].email != ''">
          E-Mail: {{ companyData[0].email }}
        </p>
        <p v-if="companyData[0].phone != ''">
          Telefon: {{ companyData[0].phone }}
        </p>
      </div>
      <div class="footer-content">
        <p><b>Geschäftsführung: </b><br />{{ companyData[0].ceo01 }}</p>
        <p v-if="companyData[0].ceo02 != ''">{{ companyData[0].ceo02 }}</p>
        <p v-if="companyData[0].ceo03 != '' > 0">{{ companyData[0].ceo03 }}</p>
        <p v-if="companyData[0].executive != ''">
          <b>Aufsichtsratsvorsitzende: </b><br />{{ companyData[0].executive }}
        </p>
      </div>
      <div class="footer-content">
        <p>Registergericht {{ companyData[0].city }}</p>
        <p>HRB {{ companyData[0].registerID }}</p>
        <p>Ust.-ID.: {{ companyData[0].taxID }}</p>
        <p v-if="companyData[0].homepage != ''">
          <a :href="companyData[0].homepage">Besuchen Sie uns!</a>
        </p>
      </div>
      <div class="footer-content">
        <p>social media and icons</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  props: {
    companyData: Array,
  },
};
</script>

<style scoped>
.footer-main {
  width: 100%;
  height: auto;
  background: #fff;
}
.footer-container {
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: rgba(0, 00, 0, 0.1);
}
.footer-content {
  text-align: left;
  padding: 1rem;
  width: 100%;
}
</style>
