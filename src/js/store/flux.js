const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		people: [],
		planets: [],
		vehicles: [],
		onecharacter: {},
		oneplanet: {},
		onevehicle: {},
		favs: [],
	  },
	  actions: {
		getpeople: () => {
		  fetch("https://www.swapi.tech/api/people", {
			method: "GET",
			headers: {
			  "Content-Type": "application/json",
			},
		  })
			.then((resp) => {
			  return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
			})
			.then((data) => {
			  //here is were your code should start after the fetch finishes
			  setStore({ people: data.results }); //this will print on the console the exact object received from the server
			})
			.catch((error) => {
			  //error handling
			  console.log(error);
			});
		},
		getplanets: () => {
		  fetch("https://www.swapi.tech/api/planets", {
			method: "GET",
			headers: {
			  "Content-Type": "application/json",
			},
		  })
			.then((resp) => {
			  return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
			})
			.then((data) => {
			  //here is were your code should start after the fetch finishes
			  setStore({ planets: data.results }); //this will print on the console the exact object received from the server
			})
			.catch((error) => {
			  //error handling
			  console.log(error);
			});
		},
		getvehicles: () => {
		  fetch("https://www.swapi.tech/api/vehicles", {
			method: "GET",
			headers: {
			  "Content-Type": "application/json",
			},
		  })
			.then((resp) => {
			  return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
			})
			.then((data) => {
			  //here is were your code should start after the fetch finishes
			  setStore({ vehicles: data.results }); //this will print on the console the exact object received from the server
			})
			.catch((error) => {
			  //error handling
			  console.log(error);
			});
		},
		getonecharacter: (uid) => {
		  fetch("https://www.swapi.tech/api/people/" + uid, {
			method: "GET",
			headers: {
			  "Content-Type": "application/json",
			},
		  })
			.then((resp) => {
			  return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
			})
			.then((data) => {
			  //here is were your code should start after the fetch finishes
			  setStore({ onecharacter: data.result.properties }); //this will print on the console the exact object received from the server
			})
			.catch((error) => {
			  //error handling
			  console.log(error);
			});
		},
		getoneplanet: (uid) => {
		  fetch("https://www.swapi.tech/api/planets/" + uid, {
			method: "GET",
			headers: {
			  "Content-Type": "application/json",
			},
		  })
			.then((resp) => {
			  return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
			})
			.then((data) => {
			  //here is were your code should start after the fetch finishes
			  setStore({ oneplanet: data.result.properties }); //this will print on the console the exact object received from the server
			})
			.catch((error) => {
			  //error handling
			  console.log(error);
			});
		},
		getonevehicle: (uid) => {
		  fetch("https://www.swapi.tech/api/vehicles/" + uid, {
			method: "GET",
			headers: {
			  "Content-Type": "application/json",
			},
		  })
			.then((resp) => {
			  return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
			})
			.then((data) => {
			  //here is were your code should start after the fetch finishes
			  setStore({ onevehicle: data.result.properties }); //this will print on the console the exact object received from the server
			})
			.catch((error) => {
			  //error handling
			  console.log(error);
			});
		},
		favorites: (fav) => {
		  let favorites = getStore().favs;
		  if (favorites.includes(fav)) {
			console.log("ENTRA")
			setStore({favs:favorites.filter((value)=> value != fav )})
			
		  }else{
			setStore({favs: [...favorites, fav]})
		  }
		},
	  },
	};
  };
  
  export default getState;
  