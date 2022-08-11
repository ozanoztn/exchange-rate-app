import axios from "axios";

const convertion={
    data(){
return{
    Result:''
}
    },
methods:{
   async convert(to,from,amount){
        (to==''||from==''||amount=='')? alert('Boş Alan Bırakmayınız'):await axios.get(`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}&apikey=pbPF5Q0noKsvChNRlj48MypLnzropknY`)
 .then(res=>{this.Result=amount+" "+from+'='+res.data.result+" "+to});
 console.log(this.Result)
    }
}
}
export default convertion