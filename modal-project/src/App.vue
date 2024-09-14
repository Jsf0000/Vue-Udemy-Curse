<template>
  <h1>{{ title }}</h1>
  <p> Welcome... </p>
  <teleport to=".modals" v-if="showModal">
<!--    <Modal :header="header" :text="text" theme="dark" @close="toggleModal"/>-->

    <Modal theme="dark" @close="toggleModal">
      <template v-slot:links>
        <a href="#"> sign up now</a>
        <a href="#">more info</a>
      </template>
      <h1>Ninja Giveaway!</h1>
      <p> Grab your ninja swag for half price!</p>
    </Modal>
  </teleport>
  <div v-if="showModal2">
    <modal :header="title" theme="dark" @close="toggleModal2">
      <template v-slot:links>
        <a href="#"> Use Model practice</a>
      </template>
    </modal>
  </div>
  <button @click="toggleModal"> open modal</button>
  <button @click="toggleModal2"> open modal2</button>

  <!--  <input type="text" ref="name">-->
<!--  <button @click="handleClick">click me</button>-->
</template>

<script>
import Modal from "./components/CustomModal.vue";
export default {
  components: {Modal},
  name: 'App',
  data() {
    return {
      title: 'My First Vue App :)',
      header: 'Sign up for the giveaway!',
      text: 'Grab your ninja swag for half price!',
      showModal: false,
      showModal2: false
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleModal2() {
      this.showModal2 = !this.showModal2;
    }
    // handleClick() {
    //   console.log(this.$refs.name)
    //   this.$refs.name.classList.add('active')
    //   this.$refs.name.focus()
    // }
  }

}
</script>

<style>
#app, .modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
