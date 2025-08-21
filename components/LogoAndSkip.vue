<template>
  <div class="logo-and-skip">
    <img class="logo-and-skip__logo" src="/public/logo.svg" alt="Logo" />
    <UButton class="logo-and-skip__button" @click="onClick">
      Skip
    </UButton>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['onClick']);
const onClick = () => emit('onClick');
</script>

<style scoped>
.logo-and-skip {
  @apply flex items-center justify-between px-4 pt-6 pb-6;

  &__button {
    /* TODO: bring transition out to cover all buttons */
    @apply bg-black/50 text-white font-medium text-[17px] px-2 py-1 rounded-full transition-all duration-200;
  }

  &__button:hover {
    @apply bg-brand-aqua;
  }
}
</style>