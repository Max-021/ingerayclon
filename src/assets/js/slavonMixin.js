export const slavonMixin = {
    data: function(){
        return {}
    },
    methods:{
        dameUnSlavon: function(name, url){
            return {
                sectionName: name,
                sectionUrl: url
            }
        }
    }
}