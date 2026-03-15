<template>
  <div class="mobile-container min-h-screen bg-umu-gradient pb-8">
    <!-- Header -->
    <header class="flex items-center justify-between px-4 pt-5 pb-4">
      <button
        type="button"
        class="w-[24px] h-[24px] flex items-center justify-center"
        @click="goBack"
      >
        <Icon
          name="i-heroicons-chevron-left"
          class="w-[25px] h-[18px] text-black"
        />
      </button>

      <h1 class="text-[17px] leading-[22px] font-family-sf-pro letter-spacing-[0.43px] text-black">
        Your Documents
      </h1>

      <button
        type="button"
        class="w-[30px] h-[30px] rounded-full bg-[#403d91] flex items-center justify-center"
        aria-label="More"
      >
        <Icon
          name="i-heroicons-ellipsis-horizontal"
          class="w-[25px] h-[25px] text-white"
        />
      </button>
    </header>

    <main class="px-5 pb-8">
      <!-- Hero Section with Icon -->
      <section class="pt-8 text-center">
        <img
          src="/op-icons/temp/property.svg"
          alt="Documents"
          class="w-[144px] h-[128px] mx-auto"
        />
        <h2 class="mt-6 text-[20px] leading-[25px] font-family-sf-pro letter-spacing-[0.45px] font-semibold text-[#101319]">
          Your Documents Store
        </h2>
        <p class="mt-2 text-[15px] leading-[20px] letter-spacing-[0.23px] text-[#3c3c43] opacity(60%)">
          Upload, organize, and share property documents securely
        </p>
      </section>

      <!-- Search Bar -->
      <div class="mt-6 flex gap-4 items-center">
        <div class="flex-1 bg-white rounded-2xl w-full h-[36px] px-4 flex items-center">
          <Icon
            name="i-heroicons-magnifying-glass"
            class="w-5 h-5 text-[#8f9094]"
          />
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search documents"
            class="ml-2 bg-transparent outline-none text-[17px] leading-[22px] letter-spacing-[0.43px] placeholder:text-[#3c3c43]"
          />
        </div>

        <button
          type="button"
          class="w-[36px] h-[36px] rounded-2xl bg-[#00A191] padding- text-white flex items-center justify-center"
          aria-label="Search filters"
        >
          <Icon name="i-heroicons-adjustments-horizontal" class="w-[15px] h-[20px]" />
        </button>
      </div>

      <!-- Add Documents Button -->
      <button
        type="button"
        class="mt-6 w-full h-[52px] rounded-full border-2 border-dashed border-[#00A8AB] text-[#00A8AB] inline-flex items-center justify-center font-sf-pro text-[15px] font-semibold"
      >
        <Icon name="i-heroicons-plus" class="w-5 h-5 mr-2" />
        Add Documents to Document Store
      </button>

      <!-- Recent Uploads Section -->
      <section class="mt-8">
        <h3 class="text-[15px] leading-[20px] letter-spacing-[0.23px] font-semibold text-[#000000]">Recent Uploads</h3>

        <div class="mt-4 flex gap-4 overflow-x-auto scrollbar-width: none; pb-2">
          <div
            v-for="doc in recentUploads"
            :key="doc.id"
            class="min-w-[90px] h-[137px] bg-white rounded-2xl p-4 shadow-sm flex flex-col items-center justify-center"
          >
            <Icon name="i-heroicons-document-text" class="w-[28px] h-[34px] text-[#00A8AB]" />
            <p class="mt-3 text-[11px] leading-[13px] font-semibold text-[#3c3c43] text-center line-clamp-2">
              {{ doc.title }}
            </p>
          </div>
        </div>
      </section>

      <!-- Passport Documents Section -->
      <section class="mt-8">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-[15px] leading-[20px] letter-spacing-[0.23px] font-semibold text-[#000000]">Passport Documents</h3>
        </div>

        <ul class="space-y-3">
          <li
            v-for="doc in passportDocuments"
            :key="doc.id"
            class="bg-white rounded-2xl p-4 flex items-center justify-between"
          >
            <div class="flex items-start gap-3 flex-1">
              <Icon
                src="/op-icons/temp/file.svg"
                class="w-[16px] h-[21px] text-[#9C9CA6] flex-shrink-0 mt-7"
              />
              <div class="flex-1 min-w-0">
                <p class="font-sf-pro text-[15px] leading-[20px] letter-spacing-[0.23px] text-[#000000]">{{ doc.title }}</p>
                <p class="mt-0.5 text-[13px] leading-[18px] letter-spacing-[0.08px] text-[#9C9CA6]">
                  {{ doc.size }} · PDF · {{ doc.date }}
                </p>
                <div class="mt-2 flex flex-wrap gap-2">
                  <span
                    v-for="tag in doc.tags"
                    :key="tag"
                    class="text-[11px] leading-[13px] font-semibold text-[#00A191] bg-[#00a19a1a]  px-2 py-1 rounded-full"
                  >
                    # {{ tag }}
                  </span>
                </div>
                <div class="mt-2 flex items-center gap-2">  
                  <img
                    src="/op-icons/temp/maxine.svg"
                    alt="avatar"
                    class="w-4 h-4 rounded-full object-cover flex-shrink-0"
                  />
                  <p class="text-[13px] leading-[18px] letter-spacing-[0.08px] text-[#9C9CA6]">
                    {{ doc.author }}
                  </p>
                </div>
              </div>
            </div>

            <Icon
              name="i-heroicons-chevron-right"
              class="w-[16px] h-[21px] text-[#3C3C43] flex-shrink-0 ml-2"
            />
          </li>
        </ul>

        <button
          type="button"
          class="mt-4 w-full text-center text-[15px] font-semibold text-[#00A8AB] py-3 flex items-center justify-center gap-2"
        >
          Show all property documents
          <Icon name="i-heroicons-chevron-right" class="w-4 h-4" />
        </button>
      </section>

      <!-- Other Stored Documents Section -->
      <section class="mt-8">
        <h3 class="text-[17px] font-semibold text-[#101319] mb-4">Other Stored Documents</h3>

        <ul class="space-y-3">
          <li
            v-for="doc in otherDocuments"
            :key="doc.id"
            class="bg-white rounded-2xl p-4"
          >
            <div class="flex items-start justify-between gap-2">
              <div class="flex-1">
                <div class="flex items-center gap-2">
                  <Icon
                    name="i-heroicons-document-text"
                    class="w-5 h-5 text-[#00A8AB] flex-shrink-0"
                  />
                  <p class="font-semibold text-[15px] text-[#101319]">{{ doc.title }}</p>
                </div>
                <p class="mt-1 text-[12px] text-[#7f8084]">
                  {{ doc.size }} · PDF · {{ doc.date }}
                </p>
                <div class="mt-2 flex flex-wrap gap-2">
                  <span
                    v-for="tag in doc.tags"
                    :key="tag"
                    class="text-[11px] font-semibold text-[#00A8AB] bg-[#E8FFFB] px-2 py-1 rounded-full"
                  >
                    # {{ tag }}
                  </span>
                </div>
                <p class="mt-2 text-[12px] text-[#7f8084] flex items-center gap-1">
                  <Icon name="i-heroicons-user" class="w-4 h-4" />
                  {{ doc.author }}
                </p>
              </div>

              <Icon
                name="i-heroicons-chevron-right"
                class="w-5 h-5 text-[#b4b5b8] flex-shrink-0"
              />
            </div>
          </li>
        </ul>

        <button
          type="button"
          class="mt-4 w-full text-center text-[15px] font-semibold text-[#00A8AB] py-3 flex items-center justify-center gap-2"
        >
          Show all share other documents
          <Icon name="i-heroicons-chevron-right" class="w-4 h-4" />
        </button>
      </section>
    </main>
  </div>
</template>

<script setup>
definePageMeta({
  title: "Your Documents - UmovingU",
});

const searchQuery = ref("");

const recentUploads = [
  {
    id: 1,
    title: "Energy Performance Certificate.pdf",
  },
  {
    id: 2,
    title: "Property Survey Report.pdf",
  },
  {
    id: 3,
    title: "Building Insurance Policy.pdf",
  },
  {
    id: 4,
    title: "Completion Statement.pdf",
  },
];

const passportDocuments = [
  {
    id: 1,
    title: "Gas Safety Certificate",
    size: "2.4 MB",
    date: "Aug 3, 2024",
    tags: ["Planning", "Guarantees"],
    author: "Maxine Wilson",
  },
  {
    id: 2,
    title: "Electrical Inspection Report",
    size: "1.8 MB",
    date: "Jul 20, 2024",
    tags: ["Maintenance", "Certificates"],
    author: "John Doe",
  },
  {
    id: 3,
    title: "Building Compliance Document",
    size: "3.1 MB",
    date: "Sep 15, 2024",
    tags: ["Regulatory", "Approvals"],
    author: "Emily Chen",
  },
];

const otherDocuments = [
  {
    id: 1,
    title: "Electrical Inspection Report",
    size: "1.8 MB",
    date: "Sep 12, 2024",
    tags: ["Compliance", "Warranties"],
    author: "James Turner",
  },
  {
    id: 2,
    title: "Fire Risk Assessment",
    size: "3.0 MB",
    date: "Oct 19, 2024",
    tags: ["Regulations", "Covers"],
    author: "Laura Chen",
  },
  {
    id: 3,
    title: "Building Warranty Insurance",
    size: "2.0 MB",
    date: "Nov 5, 2024",
    tags: ["Protection", "Assurances"],
    author: "Oliver Smith",
  },
];

const goBack = () => {
  if (typeof window !== "undefined" && window.history.length > 1) {
    window.history.back();
    return;
  }

  navigateTo("/profile");
};
</script>

