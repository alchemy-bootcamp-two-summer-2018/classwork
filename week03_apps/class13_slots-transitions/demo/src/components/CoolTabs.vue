<template>
  <Tabs>
    <Tab name="First tab">
        First tab content
    </Tab>
    <Tab name="Second tab">
        Second tab content
    </Tab>
    <Tab name="Third tab">
        Third tab content
    </Tab>
  </Tabs>
</template>

<script>
import { Tabs, Tab } from 'vue-tabs-component';
import 'vue-tabs-component/docs/resources/tabs-component.css';

export default {
  components: {
    Tab,
    Tabs
  }
};

</script>

<style>

</style>
