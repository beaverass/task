<template>
 <div id="app">


   <ul>
     <ol v-bind:key="city" v-for="city in cities">

       <div>{{ city.name }}</div>

       <ul>

         <ol v-bind:key="user" v-for="user in users" >

           <div class="district" >{{user.groups[0].name === city.name + ' г.' ? user.groups[1].name : ''}}</div>
           <div class="street">{{user.groups[0].name === city.name + ' г.' ? user.groups[2].name : '' }}</div>

           <div class="name">
             <a class="tooltip" href="#">{{user.groups[0].name === city.name + ' г.' ?  user.name : '' }}<span>{{city.name}} {{city.data}} жителей</span></a>
           </div>

         </ol>

       </ul>

     </ol>

   </ul>



 </div>
</template>



<script>

const usersUrl = 'http://localhost:5000/users';
const citiesUrl = 'http://localhost:5000/cities'

export default {
  name: 'App',
  components: {

  },
  data() {
    return {
      users: [

      ],
      cities: [

      ]

    }
  },
  mounted(){

    fetch(usersUrl)
        .then(response => response.json())
        .then(json => {
          this.users = json
        });

    fetch(citiesUrl)
        .then(response => response.json())
        .then(json => {
          this.cities = json
        });


  },

}

</script>


<style>
a{
  color: #337ab7;
  text-decoration: none;
}
a:hover {
  background		: #ffffff;
  text-decoration	: none;
}
a.tooltip span {
  display			: none;
  padding			: 2px 3px;
  margin-left		: 8px;
  width			: 130px;
}
a.tooltip:hover span {
  display			: inline;
  position		: absolute;
  background		: #ffffff;
  border			: 1px solid #cccccc;
  color			: #6c6c6c;
}

.district{

}
.street{
  padding-left: 120px;
}
.name{
  padding-left: 220px;
}


</style>

