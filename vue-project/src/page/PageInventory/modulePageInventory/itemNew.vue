<script setup lang="ts">
</script>

<template>
    <div>
        <ul class="dateofEqupment">
                <h3>
                    <li>Имя: <p contenteditable @input="onInputM" ></p></li>
                    <li>тип: <p contenteditable @input="onInputT" ></p></li>
                    <li>Status: <p contenteditable @input="onInputS" ></p></li>
                    <li>Id: {{ Id }}</li>
                </h3>
        </ul>
        <button v-on:click="createNewEquipment">Create</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            type: "",
            name: "",
            status: "",
            Id: this.$store.getters.iflenghtUsers + 1,
        };
    },
    methods: {
        onInputT(e) {this.type = e.target.innerText},
        onInputM(e) {this.name = e.target.innerText},
        onInputS(e) {this.status = e.target.innerText},
        createNewEquipment() {
            this.$store.commit("createNewEquipment", {type: this.type, name: this.name, status: this.status, id: this.Id})
            this.Id = this.Id + 1
        }
    }
}
</script>