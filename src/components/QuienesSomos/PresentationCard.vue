<template>
  <div class="circle-card">
    <img
      :src="
        require(`@/assets/images/quienes-somos/staff-circle/${person.image}`)
      "
      :alt="`Foto de ${person.name}`"
    />
    <div class="circle-name">
      <h2>{{ person.name }}</h2>
      <p>{{ person.position }}</p>
    </div>
    <p>{{ person.title }}</p>
  </div>
</template>
<style scoped>
.circle-card {
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
}
.circle-card img {
  width: 220px;
}
.circle-card .circle-name {
  display: flex;
  flex-direction: column;
  text-align: center;
}
.circle-card .circle-name h2 {
  letter-spacing: 1px;
  font-size: 1.5rem;
  font-family: "IngeTextBold", Arial, Helvetica, sans-serif;
  color: var(--dark-bluish-green);
}
.circle-card .circle-name p {
  font-size: 1rem;
  color: var(--dark-bluish-green);
}
.circle-card p {
  font-size: 1rem;
  text-align: center;
}
</style>
<script>
export default {
  props: ["person"],
  data() {
    return {};
  },
};
</script>