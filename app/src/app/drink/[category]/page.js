import { CardGrid } from "@/components/cardGrid";

export default function VenueCategory() {

    const cards = [
        { image: "https://static.vecteezy.com/system/resources/previews/003/226/340/non_2x/beer-glass-icon-seamless-background-pattern-illustration-free-vector.jpg", alt: "Card 1", link: "#", title: "The Long Man of Wilmington" },
        { image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/f4/78/49/the-colonnade-bar-brighton.jpg?w=500&h=500&s=1", alt: "Card 2", link: "#", title: "The Long Man of Wilmington" },
        { image: "https://grubbygibbon.com/edinburgh/images/Venue_165_main.jpg", alt: "Card 3", link: "#", title: "The Long Man of Wilmington" },
        { image: "https://static.vecteezy.com/system/resources/previews/003/226/340/non_2x/beer-glass-icon-seamless-background-pattern-illustration-free-vector.jpg", alt: "Card 4", link: "#", title: "The Long Man of Wilmington" },
        { image: "https://static.vecteezy.com/system/resources/previews/003/226/340/non_2x/beer-glass-icon-seamless-background-pattern-illustration-free-vector.jpg", alt: "Card 1", link: "#", title: "The Long Man of Wilmington" },
        { image: "https://static.vecteezy.com/system/resources/previews/003/226/340/non_2x/beer-glass-icon-seamless-background-pattern-illustration-free-vector.jpg", alt: "Card 2", link: "#", title: "The Long Man of Wilmington" },
        { image: "https://static.vecteezy.com/system/resources/previews/003/226/340/non_2x/beer-glass-icon-seamless-background-pattern-illustration-free-vector.jpg", alt: "Card 3", link: "#", title: "The Long Man of Wilmington" },
        { image: "https://static.vecteezy.com/system/resources/previews/003/226/340/non_2x/beer-glass-icon-seamless-background-pattern-illustration-free-vector.jpg", alt: "Card 4", link: "#", title: "The Long Man of Wilmington" },
        { image: "https://static.vecteezy.com/system/resources/previews/003/226/340/non_2x/beer-glass-icon-seamless-background-pattern-illustration-free-vector.jpg", alt: "Card 1", link: "#", title: "The Long Man of Wilmington" },
        { image: "https://static.vecteezy.com/system/resources/previews/003/226/340/non_2x/beer-glass-icon-seamless-background-pattern-illustration-free-vector.jpg", alt: "Card 2", link: "#", title: "The Long Man of Wilmington" },
        { image: "https://static.vecteezy.com/system/resources/previews/003/226/340/non_2x/beer-glass-icon-seamless-background-pattern-illustration-free-vector.jpg", alt: "Card 3", link: "#", title: "The Long Man of Wilmington" },
        { image: "https://static.vecteezy.com/system/resources/previews/003/226/340/non_2x/beer-glass-icon-seamless-background-pattern-illustration-free-vector.jpg", alt: "Card 4", link: "#", title: "The Long Man of Wilmington" },
        { image: "https://static.vecteezy.com/system/resources/previews/003/226/340/non_2x/beer-glass-icon-seamless-background-pattern-illustration-free-vector.jpg", alt: "Card 1", link: "#", title: "The Long Man of Wilmington" },
        { image: "https://static.vecteezy.com/system/resources/previews/003/226/340/non_2x/beer-glass-icon-seamless-background-pattern-illustration-free-vector.jpg", alt: "Card 2", link: "#", title: "The Long Man of Wilmington" },
        { image: "https://static.vecteezy.com/system/resources/previews/003/226/340/non_2x/beer-glass-icon-seamless-background-pattern-illustration-free-vector.jpg", alt: "Card 3", link: "#", title: "The Long Man of Wilmington" },
        { image: "https://static.vecteezy.com/system/resources/previews/003/226/340/non_2x/beer-glass-icon-seamless-background-pattern-illustration-free-vector.jpg", alt: "Card 4", link: "#", title: "The Long Man of Wilmington" },
        { image: "https://static.vecteezy.com/system/resources/previews/003/226/340/non_2x/beer-glass-icon-seamless-background-pattern-illustration-free-vector.jpg", alt: "Card 4", link: "#", title: "The Long Man of Wilmington" }
      ];

    return (
     <main>
        <div className="row mt-4">
          <div className="col-12">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="http://localhost:3000">Home</a></li>
                  <li class="breadcrumb-item active" >Drinks</li>
              </ol>
            </nav>
          </div>
        </div>

          <div class="mb-8 py-4 px-4 text-center">
                <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Explore the Best <mark class="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">Pubs</mark> in Brighton</h1>
                <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Step into the heart of Brighton's pub scene and immerse yourself in a tapestry of flavors, atmospheres, and community spirit. From quaint taverns to lively watering holes, discover the perfect blend of tradition and innovation, ensuring every visit is a cherished experience worth raising a glass to.</p>
          </div>

        <CardGrid cards={cards} />

      </main>
    );
  }