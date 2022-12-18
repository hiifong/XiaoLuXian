import { defineStore } from 'pinia'
export const useCartStore = defineStore({
  id: 'cart',
  state: () => {
    return {
      cartList:[],//购物车数据
      select:[],//选中的商品的id
      orderList:[]//结算的商品
    }
  },
  getters:{
    isChecked(){
      return this.select.length == this.cartList.length;
    },
    //总价和数量
    total(){
      let total={
        price:0,
        number:0
      }      
      this.orderList = [];
      this.cartList.forEach(v=>{
        if( this.select.indexOf( v.id )  !=-1 ){
          total.price += v.counter * v.discountPrice;
          total.number = this.select.length;
          this.orderList.push({
            number:1,
            id:v.courseId
          })
        }
      })

      return total;
    }
  },
  actions:{
    //存储购物车数据
    addCart( list ){
      this.select = [];
      list.forEach(v=>{
        v['check'] = true;
        this.select.push( v.id );
      })
      this.cartList=list;
    },
    //全选
    all(){
      this.select = this.cartList.map(v=>{
        v['check'] = true;
        return v.id;
      })
    },
    //全不选
    unAll(){
      this.cartList.forEach(v=>{
        v['check'] = false;
      })
      this.select = [];
    },
    //单选
    itemChecked( index ){
      //当前点击的课程都id值
      let id = this.cartList[index].id;
      //去检查select中有没有
      let idx = this.select.indexOf( id );

      if( idx > -1 ){ 
        //有
        this.cartList[index].check = false;
        this.select.splice( idx, 1 );
      }else{
        //没有
        this.cartList[index].check = true;
        this.select.push(  id  );
      }
    }
  }
})