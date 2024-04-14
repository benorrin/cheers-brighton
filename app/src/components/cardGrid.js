export function CardGrid({ cards }) {
    // Function to chunk the cards into groups of four
    const chunkArray = (array, size) => {
        const chunkedArr = [];
        for (let i = 0; i < array.length; i += size) {
            chunkedArr.push(array.slice(i, i + size));
        }
        return chunkedArr;
    };

    // Chunk the cards array into groups of four
    const rowsOfCards = chunkArray(cards, 4);

    return (
        <div className="cardGrid">
            {/* Mapping over rowsOfCards */}
            {rowsOfCards.map((row, rowIndex) => (
                <div key={rowIndex} className="row mt-4">
                    {/* Mapping over the cards within each row */}
                    {row.map((card, index) => (
                        <div key={index} className="col-lg-3">
                            <a href={card.link}>
                                <div className="card bg-dark text-white shadow">
                                    <img src={card.image} alt={card.alt} />
                                    <div className="card-img-overlay card-overlay">
                                        <h5 className="card-title">{card.title}</h5>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}