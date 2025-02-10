<script setup lang="ts">
</script>

<template>
    <div class="content">
        <div class="discription">
            <img class="img"/>
            <ul class="dateofEqupment">
                <h3>
                <li>Имя: <p contenteditable @input="onInputM" >{{ name }}</p></li>
                <li>Status: <p contenteditable @input="onInputS" >{{ status }}</p></li>
                <li>Id: {{ id }}</li>
                </h3>
            </ul>
            <button v-on:click="changeStateEqupment">to date</button>
        </div>
        <!-- <div class="user">
            <div>
                <p>Закрпить за пользователем:</p>
                <textarea type="text" v-model="userPinId" placeholder="user id" />
                <button v-on:click="pined">Tap!</button>
            </div>
            <h2>Закреплёен за:</h2>
            <ul>
                <li v-for="user in Pined">
                    {{ user.userName }}, id: {{ user.id }}
                </li>
            </ul>
            <p></p>
            <h3> users</h3>
        </div> -->
        
    </div>
</template>

<script>
export default {
	data() {
		let idInventory = this.$router.currentRoute.value.params.idInventory
        let Equpment = this.$store.getters.takeEqupmentById(idInventory)
        console.log(Equpment)

        return {
            message: "",
            Equpment: Equpment,
            Change: false,
            userPinId: "",
            name: Equpment.name_item,
            status: Equpment.status,
            id: Equpment.item_id,
            // Pined: this.$store.getters.getUsersWithPin(Equpment.id),
        };
    },
    methods:{
        pined() {
            let date = [this.Equpment, parseInt(this.userPinId)]
            this.$store.commit("pinToUserEqupment", date)
            this.Pined = this.$store.getters.getUsersWithPin(this.id)
        },
        onInputM(e) {this.name = e.target.innerText},
        onInputS(e) {this.status = e.target.innerText},
        changeStateEqupment() {
            
            this.$store.commit("updateEquipment", {
                name_item: this.name,
                item_id: this.id,
                status: this.status
            })
            this.$store.dispatch("UpdateEquipment")
        }
    }
}

</script>

<style>
.img {
    background-color: hotpink;
    width: 250px;
    height: 250px;
}
.dateofEqupment{
    display: inline-block;
}
.content{
    display: grid;

    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
.discription{
    display: inline;
}
.user {
    display: block
}

</style>