import UserComponent from './UserComponent.js'

export default{
    template: `
        <div class="row">
            <div class="col-sm-12">
            <h1> youre in the users page </h1>
            </div>
            
            <user v-for="(user, index) in userList" :liveuser="user" :key="index"></user>

        </div>    
    `,

    data() {
        return {
            message: "Who is using Roku?",

            userList:[]
        }
    },

    methods: {
        fetchAllUsers(){
            let url = `./admin/scripts/users.php?allUsers=true`;

            fetch(url)
            .then(res=>res.json())
            .then(data=>{this.userList = data})
            .catch(function(error){
                console.error(error);
            });
        }
    },

    components: {
        user: UserComponent
    }
}