export function CardRow({ title, cards, buttonLink }) {
    return (
        <div className="cardRow">
            <div className="row">
                <h2>{title}</h2>
                <hr/>
                
                {cards.map((card, index) => (
                    <div key={index} className="col-lg-3">
                        <a href={card.link}>
                            <div class="card bg-dark text-white">
                                <img src={card.image} alt={card.alt} />
                                <div class="card-img-overlay">
                                    <h5 class="card-title">{card.title}</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
                
                <a href={buttonLink} className="mt-4">
                    <button type="button" class="btn btn-primary">See More</button>
                </a>
            </div>
        </div>
    );
}