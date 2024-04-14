import { CardRow } from "@/components/cardRow";

export default function Drink() {

    const title = "🍺 Pubs";
    const cards = [
        { image: "https://flowbite.com/docs/images/blog/image-1.jpg", alt: "Card 1", link: "#", title: "The Long Man of Wilmington" },
        { image: "https://flowbite.com/docs/images/blog/image-1.jpg", alt: "Card 2", link: "#", title: "The Long Man of Wilmington" },
        { image: "https://flowbite.com/docs/images/blog/image-1.jpg", alt: "Card 3", link: "#", title: "The Long Man of Wilmington" },
        { image: "https://flowbite.com/docs/images/blog/image-1.jpg", alt: "Card 4", link: "#", title: "The Long Man of Wilmington" }
    ];
    const buttonLink = "/drink/pubs";

    return (
      <main>
        <div className="row">
          <div className="col-12">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="http://localhost:3000">Home</a></li>
                  <li class="breadcrumb-item active" >Drinks</li>
              </ol>
            </nav>
          </div>
        </div>
        <CardRow title={title} cards={cards} buttonLink={buttonLink} />
      </main>
    );
}