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
        Personal Information
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
      <section class="pt-6 text-center">
        <img
          src="/op-icons/temp/profilepic.png"
          alt="Profile avatar"
          class="w-24 h-24 rounded-full object-cover mx-auto"
        />

        <h2 class="mt-8 text-22-emphasized text-center text-[#000000]">
          Maxine Wilson
        </h2>
        <p
          class="mt-1 font-sf-pro text-[15px] leading-[20px] tracking-[-0.23px] font-normal text-center text-[#3C3C43] opacity-60%"
        >
          maxinewilson@yahoo.com
        </p>

        <div
          class="mt-5 inline-flex items-center gap-2 px-4 h-11 rounded-full border border-brand-aqua text-brand-aqua text-xl font-medium"
        >
          <Icon name="i-heroicons-star" class="w-4 h-4" />
          <span>PRO · Member since 2023</span>
        </div>
      </section>

      <div class="mt-8 space-y-6">
        <section>
          <h3
            class="font-sf-pro text-[15px] leading-[20px] tracking-[-0.23px] font-[590] align-middle text-[#101319] mb-3"
          >
            Name and Contact Details
          </h3>

          <div class="space-y-3">
            <div
              v-for="(item, index) in contactDetails"
              :key="item.label"
              class="bg-[#ffffff] rounded-3xl p-4 flex items-start justify-between gap-3"
            >
              <div>
                <p class="text-[15px] leading-[20px] text-[#000000]">
                  {{ item.label }}
                </p>
                <p class="text-[13px] leading-[18px] text-[#3C3C4399]">
                  {{ item.value }}
                </p>
              </div>
              <button
                type="button"
                class="w-9 h-9 rounded-full border border-[#d9dae0] text-[#1f2024] flex items-center justify-center mt-1"
                @click="openContactEditor(index)"
              >
                <Icon name="i-heroicons-pencil" class="w-4 h-4" />
              </button>
            </div>

            <div
              class="bg-[#ffffff] rounded-3xl p-4 flex items-center justify-between"
            >
              <p class="text-[15px] leading-[20px] text-[#000000]">
                Contact Visibility
              </p>
              <button
                type="button"
                class="relative w-12 h-7 rounded-full transition-colors"
                :class="contactVisible ? 'bg-brand-aqua' : 'bg-[#d9dae0]'"
                @click="contactVisible = !contactVisible"
              >
                <span
                  class="absolute top-0.5 w-6 h-6 rounded-full bg-white transition-transform"
                  :class="
                    contactVisible
                      ? 'translate-x-[-2px]'
                      : 'translate-x-[-20px]'
                  "
                />
              </button>
            </div>
          </div>
        </section>

        <section>
          <h3
            class="text-[15px] leading-[20px] text-[#000000] font-semibold mb-3"
          >
            Address / Location Details
          </h3>

          <div class="space-y-3">
            <div
              v-for="item in addressDetails"
              :key="item.label"
              class="bg-[#ffffff] rounded-3xl p-4"
            >
              <div class="flex items-start justify-between gap-3">
                <div>
                  <p class="text-[15px] leading-[20px] text-[#000000]">
                    {{ item.label }}
                  </p>
                  <p
                    class="text-[13px] leading-[18px] text-[#3C3C43] mt-2 whitespace-pre-line"
                  >
                    {{ item.value }}
                  </p>
                </div>

                <div class="flex items-center gap-2 mt-1">
                  <button
                    type="button"
                    class="w-9 h-9 rounded-full border border-[#d9dae0] text-[#1f2024] flex items-center justify-center"
                  >
                    <Icon name="i-heroicons-pencil" class="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    class="w-9 h-9 rounded-full bg-brand-aqua text-white flex items-center justify-center"
                  >
                    <Icon name="i-heroicons-trash" class="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h3
            class="text-[15px] leading-[20px] font-semibold text-[#000000] mb-3"
          >
            Registered Company Details
          </h3>
          <div class="bg-[#ffffff] rounded-3xl p-4">
            <div class="flex items-start justify-between gap-3">
              <div>
                <p
                  class="text-[15px] leading-[20px] font-semibold text-[#000000]"
                >
                  Davidsons Law
                </p>
                <p
                  class="text-[13px] leading-[18px] text-[#3C3C43] mt-2 whitespace-pre-line"
                >
                  12, London Road Kingston-upon-Thames Surrey KN51 78J
                </p>
                <div class="mt-3 text-[13px] leading-[18px] text-[#3C3C43]">
                  <p>
                    <span class="inline-block w-18">Company Number:</span>
                    GHSO64345
                  </p>
                  <p>
                    <span class="inline-block w-12">Director:</span> Maxine
                    Wilson
                  </p>
                </div>
              </div>

              <div class="flex items-center gap-2 mt-1">
                <button
                  type="button"
                  class="w-9 h-9 rounded-full border border-[#d9dae0] text-[#1f2024] flex items-center justify-center"
                >
                  <Icon name="i-heroicons-pencil" class="w-4 h-4" />
                </button>
                <button
                  type="button"
                  class="w-9 h-9 rounded-full bg-brand-aqua text-white flex items-center justify-center"
                >
                  <Icon name="i-heroicons-trash" class="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h3
            class="text-[15px] leading-[20px] font-semibold text-[#000000] mb-3"
          >
            Seller / Solicitor
          </h3>
          <div class="bg-[#ffffff] rounded-3xl p-4">
            <div class="flex items-start justify-between gap-3">
              <div>
                <p
                  class="text-[15px] leading-[20px] font-semibold text-[#000000]"
                >
                  Davidsons Law
                </p>
                <p
                  class="text-[13px] leading-[18px] text-[#3C3C43] mt-2 whitespace-pre-line"
                >
                  12, London Road Kingston-upon-Thames Surrey KN51 78J
                </p>
                <div class="mt-3 text-[13px] leading-[18px] text-[#3C3C43]">
                  <p>
                    <span class="inline-block w-18">Contact Name:</span> David
                    Smith
                  </p>
                  <p>
                    <span class="inline-block w-12">Email:</span>
                    david.smith@davidsonlaw.co.uk
                  </p>
                  <p>
                    <span class="inline-block w-12">Phone</span> 072323 429834
                  </p>
                  <p>
                    <span class="inline-block w-12">Reference:</span> RJX6723OT
                  </p>
                </div>
              </div>

              <div class="flex items-center gap-2 mt-1">
                <button
                  type="button"
                  class="w-9 h-9 rounded-full border border-[#d9dae0] text-[#1f2024] flex items-center justify-center"
                >
                  <Icon name="i-heroicons-pencil" class="w-4 h-4" />
                </button>
                <button
                  type="button"
                  class="w-9 h-9 rounded-full bg-brand-aqua text-white flex items-center justify-center"
                >
                  <Icon name="i-heroicons-trash" class="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h3
            class="text-[15px] leading-[20px] font-semibold text-[#000000] mb-3"
          >
            Communication Preferences
          </h3>
          <div class="space-y-3">
            <div
              v-for="item in communicationPreferences"
              :key="item.label"
              class="bg-[#ffffff] rounded-3xl p-4 flex items-center justify-between"
            >
              <div class="flex items-center gap-3">
                <Icon :name="item.icon" class="w-5 h-5 text-[#1f2024]" />
                <p class="text-[15px] leading-[20px] text-[#000000]">
                  {{ item.label }}
                </p>
              </div>

              <button
                type="button"
                class="relative w-12 h-7 rounded-full transition-colors"
                :class="item.value ? 'bg-brand-aqua' : 'bg-[#d9dae0]'"
                @click="item.value = !item.value"
              >
                <span
                  class="absolute top-0.5 w-6 h-6 rounded-full bg-white transition-transform"
                  :class="
                    item.value ? 'translate-x-[-2px]' : 'translate-x-[-20px]'
                  "
                />
              </button>
            </div>
          </div>
        </section>

        <section>
          <h3
            class="text-[15px] leading-[20px] font-semibold text-[#000000] mb-3"
          >
            Identity Verification
          </h3>

          <div
            class="bg-[#ffffff] rounded-3xl p-4 flex items-center justify-between"
          >
            <div class="flex items-center gap-3">
              <Icon
                name="i-heroicons-check-badge"
                class="w-6 h-6 text-brand-aqua"
              />
              <div>
                <p class="text-[15px] leading-[20px] text-[#000000]">
                  Verification Status
                </p>
                <p
                  class="text-base text-[12px] leading-[15px] text-[#3C3C43] uppercase tracking-wide"
                >
                  Verified · 28 March 2025
                </p>
              </div>
            </div>

            <button
              type="button"
              class="h-10 px-4 rounded-full border border-[#cfd1d8] text-[#3C3C43] font-jakarta font-semibold text-[13px] leading-[16px] tracking-[0px] text-center align-middle inline-flex items-center justify-center"
            >
              Reverify
            </button>
          </div>
        </section>
      </div>
    </main>

    <BaseDrawer
      v-model="isContactDrawerOpen"
      :title="`Change ${contactEditLabel}`"
      :show-back-button="false"
    >
      <div class="pt-1 pb-2">
        <p class="text-[15px] leading-[24px] text-[#7f8084]">
          The changes will reflect immediately.
        </p>

        <label class="mt-6 block">
          <span class="sr-only">Edit value</span>
          <div
            class="h-16 rounded-[20px] border border-[#e2e2e7] bg-[#f4f4f5] flex items-center gap-3 px-5"
          >
            <Icon
              name="i-heroicons-pencil-square"
              class="w-5 h-5 text-[#b3b3b7]"
            />
            <input
              v-model="contactEditValue"
              :type="contactEditInputType"
              :placeholder="`Enter New ${contactEditLabel}`"
              class="w-full bg-transparent outline-none text-[16px] leading-[22px] text-[#1f2024] placeholder:text-[#8e8e93]"
            />
          </div>
        </label>
      </div>

      <template #footer>
        <button
          type="button"
          class="w-full h-14 rounded-[16px] bg-brand-aqua text-white inline-flex items-center justify-center gap-2 text-[20px] leading-[24px] font-medium"
          @click="saveContactEdit"
        >
          <Icon name="i-heroicons-check" class="w-6 h-6" />
          <span>Save Changes</span>
        </button>
      </template>
    </BaseDrawer>
  </div>
</template>

<script setup>
import BaseDrawer from "@/components/ui/BaseDrawer.vue";

definePageMeta({
  title: "Personal Information - UmovingU",
});

const contactVisible = ref(true);

const contactDetails = ref([
  { label: "Name", value: "Maxine Wilson" },
  { label: "Email Address", value: "maxinewilson@wilson.co.uk" },
  { label: "Phone Number", value: "+44 7700 900457" },
]);

const isContactDrawerOpen = ref(false);
const activeContactIndex = ref(null);
const contactEditValue = ref("");

const contactEditLabel = computed(() => {
  if (activeContactIndex.value === null) return "Value";
  return contactDetails.value[activeContactIndex.value]?.label ?? "Value";
});

const contactEditInputType = computed(() => {
  if (activeContactIndex.value === null) return "text";
  const label = contactDetails.value[activeContactIndex.value]?.label ?? "";

  if (label.toLowerCase().includes("email")) return "email";
  if (label.toLowerCase().includes("phone")) return "tel";
  return "text";
});

const openContactEditor = (index) => {
  activeContactIndex.value = index;
  contactEditValue.value = contactDetails.value[index]?.value ?? "";
  isContactDrawerOpen.value = true;
};

const saveContactEdit = () => {
  if (activeContactIndex.value === null) return;

  contactDetails.value[activeContactIndex.value] = {
    ...contactDetails.value[activeContactIndex.value],
    value: contactEditValue.value,
  };

  isContactDrawerOpen.value = false;
};

const addressDetails = [
  {
    label: "Current Address",
    value: "12, London Road\nKingston-upon-Thames\nSurrey\nKN51 78J",
  },
  {
    label: "Saved Address",
    value: "Dolphin House\nLeacroft\nStaines\nSurrey TW18 4NG",
  },
];

const communicationPreferences = ref([
  { label: "In-App Push Notifications", icon: "Bell", value: true },
  {
    label: "Email Newsletter",
    icon: "Email",
    value: true,
  },
  { label: "SMS", icon: "SMS", value: false },
]);

const goBack = () => {
  if (typeof window !== "undefined" && window.history.length > 1) {
    window.history.back();
    return;
  }

  navigateTo("/profile");
};
</script>
