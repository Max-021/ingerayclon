<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div
          :class="['modal-container', 'modal-container-' + large]"
          v-clickOutside="close"
        >
          <!-- Header -->
          <div class="modal-header" v-if="header">
            <div class="futura t-35"><slot name="title" /></div>
            <button type="button" @click="$emit('close')">
              <span>&times;</span>
            </button>
          </div>

          <!-- Body -->
          <slot name="content" />
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  props: ["header", "large"],
  data: function () {
    return {};
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
  directives: {
    clickOutside: {
      bind: function (el, binding, vnode) {
        el.clickOutsideEvent = function (event) {
          if (
            !(
              el == event.target ||
              el.contains(event.target) ||
              event.target.tagName === "BUTTON"
            )
          ) {
            vnode.context[binding.expression](event);
          }
        };
        document.body.addEventListener("click", el.clickOutsideEvent);
      },
      unbind: function (el) {
        document.body.removeEventListener("click", el.clickOutsideEvent);
      },
    },
  },
};
</script>
<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modal-container {
  position: relative;
  width: 90%;
  height: auto;
  margin: 0px auto;
  background: var(--lilac);
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  color: black;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.modal-container-sm {
  max-width: 500px;
}
.modal-container-md {
  max-width: 900px;
}
.modal-container-xl {
  max-width: 1024px;
}
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 1rem 1rem 0 1rem;
}
.modal-header button {
  height: 40px;
  width: 40px;
  border-radius: 100%;
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  z-index: 10;
}
.modal-header button:hover {
  cursor: pointer;
}
.modal-header span {
  display: inline-block;
  font-size: 50px;
  color: white;
  line-height: 20px;
  height: fit-content;
}
.futura {
  color: white;
}
.t-35 {
  font-size: 35px;
}
</style>