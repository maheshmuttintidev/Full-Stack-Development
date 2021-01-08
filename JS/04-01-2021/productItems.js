  function getProductsList() {
	var productItem = document.getElementById("productItems").value

	switch(productItem) {
		case "Laptop":
			document.getElementById("card").innerHTML  = `
															<img src='../../assets/laptop.jpg' class='card-image'/>
															<h2 id='product-price'>Price: $599</h2>
															<h3 id='product-brand'>Brand: Apple</h3>
														`
			break	
		case "Mobile":
			document.getElementById("card").innerHTML  = `
															<img src='../../assets/mobile.jpg' class='card-image'/>
															<h2 id='product-price'>Price: $49</h2>
															<h3 id='product-brand'>Brand: Apple</h3>
														`
			break
		case "HeadPhone":
			document.getElementById("card").innerHTML  = `
															<img src='../../assets/headphone.jpg' class='card-image'/>
															<h2 id='product-price'>Price: $29</h2>
															<h3 id='product-brand'>Brand: JBL</h3>
														`
			break
		case "AirPod":
			document.getElementById("card").innerHTML  = `
															<img src='../../assets/airpod.jpg' class='card-image'/>
															<h2 id='product-price'>Price: $29</h2>
															<h3 id='product-brand'>Brand: Apple</h3>
														`
			break
		case "PlayStation":
			document.getElementById("card").innerHTML  = `
															<img src='../../assets/playstation.jpg' class='card-image'/>
															<h2 id='product-price'>Price: $999</h2>
															<h3 id='product-brand'>Brand: Sony</h3>
														`
			break
	}
}