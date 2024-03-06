const url = 'https://hotels4.p.rapidapi.com/v2/get-meta-data';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd95219989amsh06c228a94995b36p125696jsn7374752df48c',
		'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
	}
};


const  hotel = async()=>{
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
hotel()