// "Passport
// Mexico requires that your passport is valid upon entry to the country. For additional information, please visit the Mexican government's website.

// Travel to Mexico City
// We suggest flying into Mexico City's main airport, Mexico City International Airport Benito Juárez (airport code MEX). The other airports that may show up when searching for flights are far outside the city.

// Travel within Mexico City
// We suggest using ridesharing applications (we use Uber) to travel from the airport to your accommodations. We DO NOT recommend renting a car, as the roads can be difficult and parking is complicated. Once you are at your accommodations, Mexico City is walkable, public transit is reliable, and ridesharing cars are plentiful.

// Accommodations
// We lived in the Condesa neighborhood when we lived in Mexico City, and we recommend our guests stay in either the Condesa or Roma neighborhoods. There are lots of lovely smaller hotels in the neighborhood that have a lot of character. Please ask us if you have questions about specific hotels or neighborhoods. Please check back for more information.

// Other Information
// Mexico City is a wonderful city with the normal security concerns that come with large cities. The Mexico City government has some tips here.

// Mexico City is at high altitude (~7,350 feet), so it is important to remain hydrated. We suggest drinking bottled water and other beverages.

// In August, the average daytime temperature is in the upper 70˚s and the evenings are in the 50˚s."

export const TravelInformation = () => {
	return (
		<div className="wp-content">
			<h1>Travel Information</h1>
			<h2>Passport</h2>
			<p>
				Mexico requires that your passport is valid upon entry to the
				country. For additional information, please visit the Mexican
				government's{" "}
				<a
					target="_blank"
					href="https://consulmex.sre.gob.mx/montreal/index.php/en/foreigners/visa/355-what-documents-do-i-need-to-enter-mexico"
				>
					website
				</a>
				.
			</p>
			<h2>Travel to Mexico City</h2>
			<p>
				We suggest flying into Mexico City's main airport, Mexico City
				International Airport Benito Juárez (airport code MEX). The
				other airports that may show up when searching for flights are
				far outside the city.
			</p>
			<h2>Travel within Mexico City</h2>
			<p>
				We suggest using ridesharing applications (we use Uber) to
				travel from the airport to your accommodations. We DO NOT
				recommend renting a car, as the roads can be difficult and
				parking is complicated. Once you are at your accommodations,
				Mexico City is walkable, public transit is reliable, and
				ridesharing cars are plentiful.
			</p>
			<h2>Accommodations</h2>
			<p>
				We lived in the Condesa neighborhood when we lived in Mexico
				City, and we recommend our guests stay in either the Condesa or
				Roma neighborhoods. There are lots of lovely smaller hotels in
				the neighborhood that have a lot of character. Please ask us if
				you have questions about specific hotels or neighborhoods.
				Please check back for more information.
			</p>
			<h2>Other Information</h2>
			<p>
				Mexico City is a wonderful city with the normal security
				concerns that come with large cities. The Mexico City government
				has some tips{" "}
				<a
					href="https://mexicocity.cdmx.gob.mx/e/basics-for-mexico-city-travel/"
					target="_blank"
				>
					here
				</a>
				.
			</p>
			<p>
				Mexico City is at high altitude (~7,350 feet), so it is
				important to remain hydrated. We suggest drinking bottled water
				and other beverages.
			</p>
			<p>
				In August, the average daytime temperature is in the upper 70˚s
				and the evenings are in the 50˚s.
			</p>
		</div>
	)
}
