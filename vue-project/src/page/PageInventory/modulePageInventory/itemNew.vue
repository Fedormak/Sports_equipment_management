<script setup lang="ts">
</script>

<template>
    <div>
        <ul class="dateofEqupment">
                <h3>
                    <li>Имя: <p сlass="input" contenteditable @input="onInputM" ></p></li>
                    <li>Количество: <p сlass="input" contenteditable @input="onInputS" ></p></li>
                </h3>
                <button v-on:click="createNewEquipment">Create</button>
        </ul>
        <ul v-if="dataNewEqBool">
            <h2> вы создали:</h2>
            <li v-for="elem in dataNewEq">
                <h4>{{ elem.name_item }}, {{ elem.status }}, {{ elem.item_id }}</h4>

            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: "",
            count: "",
            dataNewEqBool: false,
            dataNewEq: this.$store.getters.getDataOfNewEqupment
        };
    },
    methods: {
        onInputM(e) {this.name = e.target.innerText},
        onInputS(e) {this.count = e.target.innerText},
        createNewEquipment() {
            this.$store.commit("createNewEquipment", {count: this.count, name: this.name})
            this.$store.dispatch("NewEqupment")
            this.dataNewEqBool = true
            setTimeout(()=>{this.dataNewEq = this.$store.getters.getDataOfNewEqupment}, 500)
            
        }
    }
}
</script>

<style>
.input{
    border: 1px black solid
} 
</style>