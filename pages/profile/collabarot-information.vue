<template>
  <div class="mobile-container min-h-screen bg-umu-gradient pb-8">
    <header class="flex items-center justify-between px-4 pt-5">
      <button
        type="button"
        class="w-10 h-10 flex items-center justify-center"
        @click="goBack"
      >
        <Icon name="i-heroicons-chevron-left" class="w-6 h-6 text-black" />
      </button>

      <h1
        class="font-sf-pro text-[17px] leading-[22px] tracking-[-0.43px] font-[590] text-black text-center"
      >
        Collaborators
      </h1>

      <button
        type="button"
        class="w-8 h-8 rounded-full bg-[#403d91] flex items-center justify-center"
        aria-label="More"
      >
        <Icon
          name="i-heroicons-ellipsis-horizontal"
          class="w-5 h-5 text-white"
        />
      </button>
    </header>

    <main class="px-4 pb-8">
      <section class="pt-6">
        <div class="rounded-3xl bg-white p-4">
          <p class="text-[15px] leading-[20px] text-[#101319] font-semibold">
            Property Team
          </p>
          <p class="mt-1 text-[13px] leading-[18px] text-[#7f8084]">
            Invite and manage people who can help with this property journey.
          </p>

          <button
            type="button"
            class="mt-4 w-full h-12 rounded-2xl bg-brand-aqua text-white inline-flex items-center justify-center gap-2 text-[15px] leading-[20px] font-medium"
            @click="addCollaborator"
          >
            <Icon name="i-heroicons-plus" class="w-5 h-5" />
            <span>Add Collaborator</span>
          </button>
        </div>
      </section>

      <section class="mt-6">
        <h2
          class="text-[15px] leading-[20px] font-semibold text-[#101319] mb-3"
        >
          Current Collaborators
        </h2>

        <div class="space-y-3">
          <article
            v-for="person in collaborators"
            :key="person.email"
            class="bg-white rounded-3xl p-4"
          >
            <div class="flex items-start justify-between gap-3">
              <div class="flex items-start gap-3 min-w-0">
                <img
                  :src="person.avatar"
                  :alt="person.name"
                  class="w-12 h-12 rounded-full object-cover"
                />

                <div class="min-w-0">
                  <p
                    class="text-[15px] leading-[20px] text-[#101319] font-semibold"
                  >
                    {{ person.name }}
                  </p>
                  <p class="text-[13px] leading-[18px] text-[#7f8084] truncate">
                    {{ person.email }}
                  </p>
                  <p class="mt-1 text-[12px] leading-[16px] text-brand-aqua">
                    {{ person.role }}
                  </p>
                </div>
              </div>

              <button
                type="button"
                class="w-9 h-9 rounded-full border border-[#d9dae0] text-[#1f2024] inline-flex items-center justify-center"
                @click="removeCollaborator(person.email)"
                :aria-label="`Remove ${person.name}`"
              >
                <Icon name="i-heroicons-trash" class="w-4 h-4" />
              </button>
            </div>
          </article>
        </div>
      </section>

      <section class="mt-6">
        <h2
          class="text-[15px] leading-[20px] font-semibold text-[#101319] mb-3"
        >
          Access Settings
        </h2>

        <div class="space-y-3">
          <div
            v-for="setting in accessSettings"
            :key="setting.label"
            class="bg-white rounded-3xl p-4 flex items-center justify-between"
          >
            <div>
              <p class="text-[15px] leading-[20px] text-[#101319]">
                {{ setting.label }}
              </p>
              <p class="text-[13px] leading-[18px] text-[#7f8084]">
                {{ setting.description }}
              </p>
            </div>

            <button
              type="button"
              class="relative w-12 h-7 rounded-full transition-colors"
              :class="setting.value ? 'bg-brand-aqua' : 'bg-[#d9dae0]'"
              @click="setting.value = !setting.value"
              :aria-label="`Toggle ${setting.label}`"
            >
              <span
                class="absolute top-0.5 w-6 h-6 rounded-full bg-white transition-transform"
                :class="
                  setting.value ? 'translate-x-[-2px]' : 'translate-x-[-20px]'
                "
              />
            </button>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
definePageMeta({
  title: "Collaborators - UmovingU",
});

const collaborators = ref([
  {
    name: "Maxine Wilson",
    email: "maxinewilson@wilson.co.uk",
    role: "Owner",
    avatar: "/op-icons/temp/profilepic.png",
  },
  {
    name: "David Smith",
    email: "david.smith@davidsonlaw.co.uk",
    role: "Solicitor",
    avatar: "/op-icons/temp/profilepic.png",
  },
  {
    name: "Olivia Thompson",
    email: "olivia.thompson@acmeagency.co.uk",
    role: "Estate Agent",
    avatar: "/op-icons/temp/profilepic.png",
  },
]);

const accessSettings = ref([
  {
    label: "Allow collaborators to upload documents",
    description: "Permit secure document uploads for this property.",
    value: true,
  },
  {
    label: "Allow collaborators to view progress",
    description: "Show milestones and completed tasks.",
    value: true,
  },
  {
    label: "Email alerts for collaborator updates",
    description: "Receive an email when permissions or members change.",
    value: false,
  },
]);

const removeCollaborator = (email) => {
  collaborators.value = collaborators.value.filter(
    (person) => person.email !== email,
  );
};

const addCollaborator = () => {
  navigateTo("/profile");
};

const goBack = () => {
  if (typeof window !== "undefined" && window.history.length > 1) {
    window.history.back();
    return;
  }

  navigateTo("/profile");
};
</script>
