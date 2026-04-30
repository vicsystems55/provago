<template>
  <footer class="bg-provagoDark text-white">
    <div class="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-3">
      <div>
        <h2 class="text-2xl font-bold text-provagoRed">Provago Limited</h2>
        <p class="mt-4 text-sm text-gray-300">
          Innovative IT, construction, renewable energy and development
          solutions across Nigeria.
        </p>
      </div>

      <div>
        <h3 class="font-semibold">Quick Links</h3>
        <div class="mt-4 flex flex-col gap-2 text-sm text-gray-300">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About Us</RouterLink>
          <RouterLink to="/services">Our Services</RouterLink>
          <RouterLink to="/projects">Projects</RouterLink>
          <RouterLink to="/contact">Contact Us</RouterLink>
        </div>
      </div>

      <div>
        <h3 class="font-semibold">Contact Us</h3>
        <p class="mt-4 text-sm text-gray-300">
          Plot 1513 Chris Oyakhilome Crescent, Durumi, FCT-Abuja.
        </p>
        <p class="mt-2 text-sm text-gray-300">provagolimited@gmail.com</p>
      </div>
    </div>

    <div class="border-t border-white/10 py-4 text-center text-sm text-gray-400">
      © 2025 Provago Limited. All Rights Reserved.
    </div>
  </footer>
</template>