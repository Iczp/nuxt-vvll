<template>
  <svg
    ref="menuToClose"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
  >
    <g
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-width="2"
    >
      <path d="M5 5L12 5L19 5">
        <animate
          ref="animateOpen1"
          fill="freeze"
          attributeName="d"
          begin="indefinite"
          :dur="dur"
          values="M5 5L12 5L19 5;M5 5L12 12L19 5"
        ></animate>
        <animate
          ref="animateClose1"
          fill="freeze"
          attributeName="d"
          begin="indefinite"
          :dur="dur"
          values="M5 5L12 12L19 5;M5 5L12 5L19 5"
        ></animate>
      </path>
      <path d="M5 12H19">
        <animate
          ref="animateOpen2"
          fill="freeze"
          attributeName="d"
          begin="indefinite"
          :dur="dur"
          values="M5 12H19;M12 12H12"
        ></animate>
        <animate
          ref="animateClose2"
          fill="freeze"
          attributeName="d"
          begin="indefinite"
          :dur="dur"
          values="M12 12H12;M5 12H19"
        ></animate>
      </path>
      <path d="M5 19L12 19L19 19">
        <animate
          ref="animateOpen3"
          fill="freeze"
          attributeName="d"
          begin="indefinite"
          :dur="dur"
          values="M5 19L12 19L19 19;M5 19L12 12L19 19"
        ></animate>
        <animate
          ref="animateClose3"
          fill="freeze"
          attributeName="d"
          begin="indefinite"
          :dur="dur"
          values="M5 19L12 12L19 19;M5 19L12 19L19 19"
        ></animate>
      </path>
    </g>
  </svg>
</template>

<script lang="ts">
import { defineComponent, watch, ref } from 'vue';

export default defineComponent({
  name: 'LineMdMenuToCloseTransition',
  props: {
    open: {
      type: Boolean,
      required: false,
      default: false,
    },
    dur: {
      type: String,
      required: false,
      default: '0.3s',
    },
  },
  setup(props) {
    const animateOpen1 = ref<SVGAnimateElement | null>(null);
    const animateOpen2 = ref<SVGAnimateElement | null>(null);
    const animateOpen3 = ref<SVGAnimateElement | null>(null);

    const animateClose1 = ref<SVGAnimateElement | null>(null);
    const animateClose2 = ref<SVGAnimateElement | null>(null);
    const animateClose3 = ref<SVGAnimateElement | null>(null);

    const triggerOpenAnimations = () => {
      if (animateOpen1.value) animateOpen1.value.beginElement();
      if (animateOpen2.value) animateOpen2.value.beginElement();
      if (animateOpen3.value) animateOpen3.value.beginElement();
    };

    const triggerCloseAnimations = () => {
      if (animateClose1.value) animateClose1.value.beginElement();
      if (animateClose2.value) animateClose2.value.beginElement();
      if (animateClose3.value) animateClose3.value.beginElement();
    };

    watch(
      () => props.open,
      (newState) => {
        if (newState) {
          triggerOpenAnimations();
        } else {
          triggerCloseAnimations();
        }
      },
      { immediate: true }
    );

    return {
      animateOpen1,
      animateOpen2,
      animateOpen3,
      animateClose1,
      animateClose2,
      animateClose3,
    };
  },
});
</script>

<style scoped>
svg {
  cursor: pointer;
}
</style>
