import Axios from "axios";

const state = {
	kospi: 0,
	kosdaq: 0,
	nasdaq: 0,
	code: 0,
	stock: {}
}

const getters = {
	getKospi: state => {
		return state.kospi;
	},
	getKosdaq: state => {
		return state.kosdaq;
	},
	getNasdaq: state => {
		return state.nasdaq;
	},
	getCode: state => {
		return state.code
	},
	getStock: state => {
		return state.stock;
	}
}

const actions = {
	requestGetKospi(context, payload) {
		axios({
			url: 'https://finance.naver.com/sise/sise_index.nhn?code=KOSPI',
			method: 'get',
		})
	}
}
