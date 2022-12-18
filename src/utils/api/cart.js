import request from './request'

//获取购物车商品
export function getShopCarList(){
	return request({
		url:'/api/shopcar/getShopCarList',
	})
}

//删除购物车
export function deleteShopCar( params , token ){
	return request({
		url:'/api/shopcar/deleteShopCar',
		params,
		headers:{
			token
		}
	})
}

//删除购物车[批量]
export function deleteShopCars( ids, token ){
	return request({
		url:'/api/shopcar/deleteShopCars',
		method: 'POST',
		data:ids,
		headers:{
			token
		}
	})
}


//加入购物车
export function addShopCar( data , token ){
	return request({
		url:'/api/shopcar/addShopCar',
		method:'post',
		data,
		headers:{
			token
		}
	})
}
