<template>
  <section class="contacts">
    <h2 class="sidebar-section__title">Контакты</h2>
    <ul class="sidebar-section__list">
      <ContactItem
        v-for="(contact, index) in contacts" 
        :key="index"
        :title="contact.title"
        :value="contact.value"
        :icon="contact.icon"
        :href="contact.href"
      />
    </ul>
  </section>
</template>

<script>
import ContactItem from './ContactItem.vue';
import Emailcon from '@/assets/images/icons/contacts/email.svg';
import WebsiteIcon from '@/assets/images/icons/contacts/website.svg';
import PhoneIcon from '@/assets/images/icons/contacts/phone.svg';
import AddressIcon from '@/assets/images/icons/contacts/address.svg';

export default {
  components: { ContactItem },
  data() {
    return {
      contacts: [
        {
          title: 'Email',
          value: 'sofyagorbunova17@gmail.com',
          icon: Emailcon,
          href: 'mailto:sofyagorbunova17@gmail.com'
        },
        {
          title: 'Сайт',
          value: 'sonics17.github.io/resume/',
          icon: WebsiteIcon,
          href: 'https://sonics17.github.io/resume/'
        },
        {
          title: 'Телефон',
          value: '+7(914)-596-62-99',
          icon: PhoneIcon,
          href: 'tel:+79145966299'
        },
        {
          title: 'Адрес',
          value: 'Санкт-Петербург, Россия',
          icon: AddressIcon,
          href: null
        }
      ]
    }
  }
}
</script>

<style>
</style>