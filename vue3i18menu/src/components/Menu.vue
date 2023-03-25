<template>
  <nav>
    <ul>
      <li>{{ $t("home") }}</li>
      <li>{{ $t("skills") }}</li>
      <li>{{ $t("projects") }}</li>
      <li>{{ $t("contact") }}</li>
    </ul>
    <div>
      <button @click="changeLang('en')">EN</button>
      <button @click="changeLang('tr')">TR</button>
      <button @click="changeLang('de')">DE</button>
    </div>
  </nav>
  <div class="melek">Melek</div>
  <div class="aralik">&</div>
  <div class="mete">Mete</div>
</template>

<script>
export default {
  methods: {
    changeLang(lang) {
      this.$i18n.locale = lang;
    },
  },
};
</script>
<style>
nav {
  background-color: #333;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  color: #fff;
}

nav ul {
  display: flex;
  list-style: none;
}

nav ul li {
  margin-right: 20px;
  cursor: pointer;
  position: relative;
}

nav ul li:hover ul {
  display: block;
}

nav ul li ul {
  display: none;
  position: absolute;
  top: 40px;
  left: 0;
  background-color: #f9f9f9;
  padding: 10px;
  min-width: 120px;
  z-index: 1;
}

nav ul li ul li {
  margin: 0;
}

nav ul li ul li:hover {
  background-color: #ddd;
}

.lang-select {
  display: flex;
  align-items: center;
}

.lang-select select {
  margin-left: 10px;
}

.melek {
  color: pink;
  font-family: "Times New Roman", Times, serif;
  font-size: 100px;
  margin: 100px 100px;
}

.mete {
  color: blue;
  font-family: "Times New Roman", Times, serif;
  font-size: 100px;
  margin: 100px 300px;
}

.aralik {
  color: black;
  font-family: "Times New Roman", Times, serif;
  font-size: 100px;
  margin: 100px 300px;
}
</style>
