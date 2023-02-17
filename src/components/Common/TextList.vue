<template>
  <div class="padding-container">
    <div
      class="flex flex-col gap-4 py-6"
      :class="[extraPadding ? 'px-16' : '']"
    >
      <titles :title="title" :subtitle="subtitle" :fontSize="31"></titles>
      <ul class="flex flex-col gap-12 pt-4">
        <li
          v-for="(item, index) in list"
          :key="index"
          class="flex items-start gap-6"
        >
          <img
            src="@/assets/images/icons/check.svg"
            alt="check-icon"
            class="w-10"
          />
          <p class="simple-text text-justify">{{ item.text }}</p>
        </li>
        <slot name="button"></slot>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "subtitle", "list", "extraPadding"],
  data() {
    return {};
  },
};
</script>

<style>
</style>