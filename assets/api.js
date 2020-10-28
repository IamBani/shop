import qs from 'qs';
export default ({$axios},url,d,method='get',option={})=>{
    if(method==='get'){
        return $axios.$request({
            url,
            method:'get',
            params:{
               ...d
            },
            ...option
    })
    }else{
        return $axios.$request({
            method:'post',
            url,
            data:qs.stringify(d), 
            ...option
        })
    }
    
}