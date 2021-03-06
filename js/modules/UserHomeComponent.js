export default {
    props: ['currentuser'],

    template: `
    <div class="home container">
        <h2 v-if="this.$parent.currentuser">Welcome {{this.$parent.currentuser.username}}</h2>
        <p>What do you want to do?</p>
        <div class="icons">
            <div v-on:click="redirectUser('movies')">
                <i class="fas fa-film"></i>
                <p>Movies</p>
            </div>
            <div v-on:click="redirectUser('shows')">
                <i class="fas fa-tv"></i>
                <p>Tv Shows</p>
            </div>
            <div v-on:click="redirectUser('music')">
                <i class="fas fa-music"></i>
                <p>Music</p>
            </div>
        </div>
    </div>
    `,

    data() {
        return {
            
        }
    },

    created: function() {
        console.log('params:', this.$route.params);

        // if (this.$parent.currentuser.admin == false){
            if (this.currentuser.admin == 1){
                this.$parent.admin = true;
            }else{
                this.$parent.admin = false;
            }
        // }

        this.$parent.currentuser = this.currentuser;
    },

    methods: {
        redirectUser(place){
            if(place == "movies"){
                this.$router.replace({name: 'movies'});
            }else if(place == "shows"){
                this.$router.replace({name: 'shows'});
            }else if(place == "music"){
                this.$router.replace({name: 'music'});
            }
        }
    }
}