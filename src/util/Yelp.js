const apiKey = 'EmvKl2n6fwSm0wLM2j0AMYIdy41U5D0nDzkMUf8O76DOchd6Gu8C1kLP1By2EC4Ix4iqjKU9WtueRKqnlXhnsZY2BnnsSgc_swGOMyeZ9PAuJRJnr8kUkKGacG1sXHYx';

const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
            return response.json().then(jsonResponse => {
                if (jsonResponse.businesses) {
                    return jsonResponse.businesses.map(business => {
                        return {
                            id: business.id,
                            imageSrc: business.image_url,
                            name: business.name,
                            address: business.location.address1,
                            city: business.location.city,
                            state: business.location.state,
                            zipCode: business.location.zip_code,
                            category: business.categories[0].alias,
                            rating: business.rating,
                            reviewCount: business.review_count
                        }
                    });
                }
            });
        });
    }
}

export default Yelp;