use std::{env, io};
use actix_web::{middleware, App, HttpServer};
use dotenv::dotenv;
use std::collections::HashMap;

mod database;
mod venue;

#[actix_web::main]
async fn main() -> io::Result<()> {
    env::set_var("RUST_LOG", "actix_web=debug,actix_server=info");

    // Load environment variables from the .env file
    match dotenv() {
        Ok(_) => println!("Loaded environment variables from .env file."),
        Err(err) => {
            eprintln!(
                "Failed to load environment variables from .env file: {}",
                err
            );
            std::process::exit(1);
        }
    }

    let environment_variables: HashMap<String, String> = env::vars().collect();

    // Configure database connection
    let pool = match database::initialize_database(
        environment_variables
            .get("DATABASE_URL")
            .unwrap()
            .to_string(),
    ) {
        Ok(pool) => pool,
        Err(err) => {
            eprintln!("Failed to initialize database: {}", err);
            std::process::exit(1);
        }
    }; 

    HttpServer::new(move || {
        App::new()
            // Set up DB pool to be used with web::Data<Pool> extractor
            .data(pool.clone())
            // enable logger - always register actix-web Logger middleware last
            .wrap(middleware::Logger::default())
            // register HTTP requests handlers
            .service(venue::get)
    })
    .bind("0.0.0.0:9090")?
    .run()
    .await
}