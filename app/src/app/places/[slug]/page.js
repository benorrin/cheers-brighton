"use client"

export default function Place() {
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
                <span class="badge badge-primary">Primary</span>
                <div className="col-6">
                    <h1 className="place-heading">The Longman of Wilmington</h1>
                    <p className="place-address">2-10 Wilmington Way, Brighton and Hove, Brighton BN1 8JH</p>
                    <hr/>
                </div>
                <div className="col-6">
                    <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                            <img src="https://metro.co.uk/wp-content/uploads/2015/04/9533623417_9109e64d2b_o.jpg" class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                            <img src="https://www.absolutemagazine.co.uk/wp-content/uploads/2015/06/tempest-inn-brighton.jpg" class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                            <img src="https://brightonbeerblog.com/wp-content/uploads/the-foundry-brighton-3.jpg" class="d-block w-100" alt="..."/>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

            </div>
        </main>
    );
}