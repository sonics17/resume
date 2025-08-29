<template>
  <section class="contacts">
    <h2 class="sidebar-section__title">Контакты</h2>
    <ul class="sidebar-section__list">
      <ContactItem
        v-for="(contact, index) in contacts" 
        :key="index"
        :contact="contact"
      />
    </ul>
  </section>
</template>

<script>
import { markRaw } from 'vue';
import ContactItem from './ContactItem.vue';
import Emailcon from './icons/Emailcon.vue';
import WebsiteIcon from './icons/WebsiteIcon.vue';
import PhoneIcon from './icons/PhoneIcon.vue';
import AddressIcon from './icons/AddressIcon.vue';

export default {
  components: { ContactItem },

  data() {
    return {
      contacts: [
        {
          label: 'Email',
          value: 'sofyagorbunova17@gmail.com',
          icon: markRaw(Emailcon),
          href: 'mailto:sofyagorbunova17@gmail.com'
        },
        {
          label: 'Сайт',
          value: 'sonics17.github.io/resume/',
          icon: markRaw(WebsiteIcon),
          href: 'https://sonics17.github.io/resume/'
        },
        {
          label: 'Телефон',
          value: '+7(914)-596-62-99',
          icon: markRaw(PhoneIcon),
          href: 'tel:+79145966299'
        },
        {
          label: 'Адрес',
          value: 'Санкт-Петербург, Россия',
          icon: markRaw(AddressIcon),
          href: null
        }
      ]
    }
  }
}

</script>


<style>
</style>