"use client"

import { CardRow } from "@/components/cardRow";
import { CardGrid } from "@/components/cardGrid";

export default function Place() {

    const title = "More Places";
    const cards = [
        { image: "/placeholder.jpg", alt: "Card 1", link: "#", title: "The Long Man of Wilmington" },
        { image: "/placeholder.jpg", alt: "Card 2", link: "#", title: "The Long Man of Wilmington" },
        { image: "/placeholder.jpg", alt: "Card 3", link: "#", title: "The Long Man of Wilmington" },
        { image: "/placeholder.jpg", alt: "Card 4", link: "#", title: "The Long Man of Wilmington" }
    ];
    const buttonLink = "/drink/pubs";

    const gridCards = [
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

    return(
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
            
            <div className="row mt-4">
                <div className="col-lg-6">
                <span class="badge text-bg-success">Verified</span>
                <span class="badge text-bg-warning">Featured</span>
                    <h1 className="place-heading">The Longman of Wilmington</h1>
                    <p className="place-address">📍 2-10 Wilmington Way, Brighton and Hove, Brighton BN1 8JH</p>
                    <hr/>
                    <p>Spacious real ale pub offering authentic Thai food, big-screen TV sport and a full-size pool table.</p>
                    <button type="button" className="btn btn-primary" style={{ marginRight: '10px', backgroundColor: '#007bff', borderColor: '#007bff' }}>Website</button>
                    <button type="button" className="btn btn-primary" style={{ marginRight: '10px', backgroundColor: '#833ab4', borderColor: '#833ab4' }}>Instagram</button>
                    <button type="button" className="btn btn-primary" style={{ marginRight: '10px', backgroundColor: '#3b5998', borderColor: '#3b5998' }}>Facebook</button>
                    <button type="button" className="btn btn-primary" style={{ backgroundColor: '#1da1f2', borderColor: '#1da1f2' }}>Twitter</button>
                </div>
                <div className="col-lg-6">
                    <img src="/placeholder.jpg" />
                </div>

            </div>

            <div className="row mt-5 place-info-box">
                <div className="col-lg-4">
                    <h2>Opening Hours</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Monday</th>
                                <th>9:00 am - 5:00 pm</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Tuesday</td>
                                <td>9:00 am - 5:00 pm</td>
                            </tr>
                            <tr>
                                <td>Wednesday</td>
                                <td>9:00 am - 5:00 pm</td>
                            </tr>
                            <tr>
                                <td>Thursday</td>
                                <td>9:00 am - 5:00 pm</td>
                            </tr>
                            <tr>
                                <td>Friday</td>
                                <td>9:00 am - 5:00 pm</td>
                            </tr>
                            <tr>
                                <td>Saturday</td>
                                <td>9:00 am - 5:00 pm</td>
                            </tr>
                            <tr>
                                <td>Sunday</td>
                                <td>9:00 am - 5:00 pm</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-lg-4 place-features">
                    <p>Accessibility</p>
                    <ul>
                        <li>♿ Accessible</li>
                        <li>🏳️‍🌈 LGBT Friendly</li>
                    </ul>

                    <p>Food & Dietary Requirements</p>
                    <ul>
                        <li>🍔 Serves food</li>
                        <li>🥡 Take Away</li>
                        <li>🥜 Nut Free</li>
                        <li>🌱 Vegan</li>
                    </ul>

                    <p>Pet Friendly</p>
                    <ul>
                        <li>🐕 Dog friendly</li>
                    </ul>
                </div>
                <div className="col-lg-4 place-features">
                    <p>Amenities</p>
                    <ul>
                        <li>🛜 Free WiFi</li>
                        <li>☀️ Garden/Terrace</li>
                    </ul>

                    <p>Entertainment</p>
                    <ul>
                        <li>🎱 Pool Tables</li>
                        <li>🎯 Darts Board</li>
                        <li>🎸 Live Music</li>
                        <li>⚽ Broadcast Sports</li>
                    </ul>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-lg-12">
                    <h2>Events</h2>
                    <hr />
                    <CardGrid cards={gridCards} />
                </div>
            </div>

            <CardRow title={title} cards={cards} buttonLink={buttonLink} />
        </main>
    );
}