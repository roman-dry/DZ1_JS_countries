console.table(countries);
var htmlString = '';

for (var country of countries) {
	htmlString += `<tr>
		<td>${country.name.common}</td>
		<td>${country.region}</td>
		<td>${country.population}</td>
		<td class="text-center"><img src="${country.flags.png}" style="width: 50px"></td>
	</tr>`
}

document.getElementById('countries').innerHTML = htmlString;