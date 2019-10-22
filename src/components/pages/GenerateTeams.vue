<template>
    <main>
        <div class="container">
            

            



        </div>
    </main>
</template>


<script>
export default {
   async created() {
       const data = await fetch('https://vue-football-83475.firebaseio.com/players.json');
       const players = await data.json();
           console.log(players);

           const list = [];
           for (let player in players) {
               list.push({
                   ...players[player],
                   id: player
               })
           }
           console.log(list)
    }
}
</script>