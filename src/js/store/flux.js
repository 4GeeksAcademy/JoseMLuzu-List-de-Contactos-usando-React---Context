import { json, useParams } from "react-router";


const getState = ({ getStore, getActions, setStore }) => {
	let contactURL = "https://playground.4geeks.com/contact/";
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			contacts: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getContacts: () => {
				fetch(`${contactURL}agendas/josemanuel`, {
					method: "GET"
				})
					.then((response) => {
						console.log(response.status);
						return response.json()

					})
					.then((data) => {
						console.log(data);
						setStore({ contacts: data.contacts })

					})
					.catch((error) => { 
						console.error('Error getting contacts:', error);
						// Handle error, show error message to user, etc.
					});
			},
			addNewContact: (name, phone, email, address) => {
				fetch(`${contactURL}agendas/josemanuel/contacts`, {
					method: "POST",
					body: JSON.stringify({ name: name, phone: phone, email: email, address: address }),
					headers: {
						'Content-Type': 'application/json'
					}
				})
					.then(response => {
						if (!response.ok) {
							throw new Error('Failed to add new contact');
						}
						return response.json();
					})
					.then(data => {
						setStore({ contacts: [...getStore().contacts, data] });
					})
					.catch(error => {
						console.error('Error adding new contact:', error);
						// Handle error, show error message to user, etc.
					});
			},
			deleteContact: (index) => {
				let contactToDelete = getStore().contacts[index];

				fetch(`${contactURL}agendas/josemanuel/contacts/${contactToDelete.id}`, {
					method: "DELETE",
					headers: {
						'Content-Type': 'application/json'
					}
				})
					.then(response => {
						if (response.status === 204) {
							getActions().getContacts();
							return null;
						} else {
							throw new Error('Failed to delete contact');
						}
					})
					.catch(error => {
						console.error('Error deleting contact:', error);
						// Handle error, show error message to user, etc.
					});
			},
			editContact: (id, name, phone, email, address) => {
				fetch(`${contactURL}agendas/josemanuel/contacts/${id}`, {
					method: "PUT",
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({ name: name, phone: phone, email: email, address: address })
				})
					.then(response => {
						getActions().getContacts();
						return response.json();
					})
					.catch(error => {
						console.error('Error editing contact:', error);
						// Handle error, show error message to user, etc.
					});
			}
		}
	};
};

export default getState;
