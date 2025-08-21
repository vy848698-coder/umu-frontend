<template>
  <footer class="create-account-or-login">

    <div class="create-account-or-login__buttons">
      <UButton
        @click="onCreateAccount" 
        class="create-account-or-login__button create-account-or-login__button-create-account">
        Create Account
      </UButton>

      <UButton
        @click="onLogin"
        class="create-account-or-login__button create-account-or-login__button--login">
        Log in
      </UButton>
    </div>

  </footer>
</template>
<script lang="ts">
const emit = defineEmits(['on-create-account', 'on-login'])

const onCreateAccount = () => {
  emit('on-create-account', 'create-account')
}

const onLogin = () => {
  emit('on-login', 'login')
}

</script>
<style scoped>
.create-account-or-login {
  @apply fixed bottom-0 max-w-md w-full px-7 pb-11;

  &__buttons {
    @apply flex flex-col gap-3;
  }

  &__button {
    display: flex;
    height: 50px;
    padding: 14px 20px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    align-self: stretch;
    border-radius: 12px;
    color: white;
  }

  &__button-create-account {
    background-color: var(--brand-alt-aqua); /* TODO these should be themed */
    &:hover {
      /* TODO: this is a hack to make the button look like it's active. Need input from designer */
      background-color: color-mix(in srgb, var(--brand-alt-aqua) 70%, white 30%);
    }
  }

  &__button--login {
    @apply bg-white;
    color: var(--brand-alt-aqua);

    &:hover {
      /* TODO: this is a hack to make the button look like it's active. Need input from designer */
      background-color: color-mix(in srgb, var(--grays-white) 70%, var(--brand-alt-aqua) 30%);
    }
  }
  
}
</style>