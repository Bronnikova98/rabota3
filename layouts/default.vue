<template>
  <div>
    <Navbar />
    <main>
      <div><nuxt /></div>
    </main>
    <Basement />
  </div>
</template>


<script>
import Navbar from "@/components/Navbar";
import Basement from "@/components/Basement";
export default {
  components: { Navbar, Basement },
};
</script>