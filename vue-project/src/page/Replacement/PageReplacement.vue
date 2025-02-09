<script setup lang="ts">

</script>

<template>
  <div>
    <h1>Запросы:</h1>
    <ul v-if="isAdmin">
      <li v-for="element in allTicket">
         <div class="blockElement">
          <h2 class="element"> {{ element.name }} </h2>
          <h2 class="element"> {{  element.description }} </h2>
          <h2 class="element"> {{  element.status }} </h2>
          <h2 class="element"> Id предмета: {{ element.idEquipment }} </h2>
          <h2 class="element"> Id владельца: {{ element.idCreater }} </h2>
         </div>
         <button v-on:click="delElem(element.id)"> Done</button>
      </li>
    </ul>
    <div v-else>
            <div><h3>Проблема с каким прдеметом?</h3><input type="text" v-model="name"> </div>
            <div><h3>Опишите проблему:</h3><input type="text" v-model="description"> </div>
            <div><h3>степень сломонность: </h3>
                <select v-model="selectedOption">
                  <option v-for="item in options" :key="item.id" :value="item">
                    <!-- {{console.log( selectedOption)}} -->
                    {{ item.name }}
                  </option>
                </select>
            </div>
            <div><h3>id предмета: </h3><input type="text" v-model="idEquipment"> </div>
            <button v-on:click="newTicket">Создать тикет</button>
            <h3>Ваши запросы:</h3>
            <ul>
              <li v-for="element in getUserTicketbyId">
                <div class="blockElement">
                  <div class="element">{{ element.name }}</div>
                  <div class="element">{{  element.description }} </div>
                  <div class="element"> {{  element.status }}</div>
                  <div class="element">Id предмета: {{ element.idEquipment }}</div>
                </div>
              </li>
            </ul>
      </div>
  </div>
</template>


<script>
export default {
    data() {
      let id = this.$store.getters.getUserId
      // console.log(this.$store.getters.getUserTicket(id), "lkufkh")
        return { 
          idUser: this.$store.getters.getUserId,
          name: "",
          description: "",
          idEquipment: "",
          options: [
            {id: 1, name: "новый"},
            {id: 2, name: "используемый"},
            {id: 3, name: "сломанный"}
          ],
          selectedOption: {id: null, name: ""},
          isAdmin: this.$store.getters.isAdmin, 
          allTicket: this.$store.getters.getAllticket,
          getUserTicketbyId: this.$store.getters.getUserTicket(id),
        };
    },
    methods: {
      newTicket() {
        this.$store.commit("createTicket", {
          name: this.name, 
          discription: this.description, 
          status: this.selectedOption.name, 
          idEquipment: this.idEquipment, 
          idCreater: this.idUser
        })
        this.getUserTicketbyId = this.$store.getters.getUserTicket(this.idUser)
      },
      delElem(id) {
        this.$store.commit("deleteTicket", {id: id, idCreater: this.idUser})
      }
    }
}
</script>

<style>
.blockElement{
  border: 1px solid black;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  margin-top: 8px;
}
</style>