export default function ({$axios, redirect }) {
   $axios.onRequest(config=>{
    // console.log('Making request to ' + config.url);
    // console.log(redirect);
   })
   $axios.onResponse(response => { 
    //    console.log('我是',response)
   })
  }
