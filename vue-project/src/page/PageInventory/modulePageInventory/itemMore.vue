<script setup lang="ts">
</script>

<template>
    <div class="content">
        <div class="discription">
            описания
            <img />
            <ul>
                <li><h2>Имя: {{ Equpment.name }}</h2></li>
                <li><h2>тип: {{ Equpment.type }}</h2></li>
                <li><h2>Id: {{ Equpment.id }}</h2></li>
                <li><h2>{{ Equpment.status }}</h2></li>
            </ul>
        </div>
        <div class="user">
            <div>
                <p>Закрпить на:</p>
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
        </div>
        
    </div>
</template>

<script>
export default {
	data() {
		let idInventory = this.$router.currentRoute.value.params.idInventory
        let Equpment = this.$store.getters.takeEqupmentById(parseInt(idInventory))
        return {
            userPinId: "",
            Equpment: Equpment,
            Pined: this.$store.getters.getUsersWithPin(Equpment.id),
        };
    },
    methods:{
        pined() {
            console.log(parseInt(this.userPinId))
            let date = [this.Equpment, parseInt(this.userPinId)]
            this.$store.commit("pinToUserEqupment", date)
            this.Pined = this.$store.getters.getUsersWithPin(this.Equpment.id)
        }
    }
}

</script>

<style>
.content{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
.discription{
    display: block;
}
.user {
    display: block
}

</style>