use actix_web::web::Data;
use anyhow::{Context, Result};
use dotenv::dotenv;
use sqlx::postgres::{PgPool, PgPoolOptions};

use crate::venue::{Venue, VenueType};


/// Initializes the database connection pool.
///
/// ## Parameters
/// - `database_url`: Database connection URL.
///
/// ## Returns
/// Returns a `Result` containing the PostgreSQL connection pool on success.
pub fn initialize_database(database_url: String) -> Result<sqlx::PgPool> {
    // Load environment variables from the .env file
    dotenv().ok();

    let pool = PgPoolOptions::new()
        .max_connections(5)
        .connect_lazy(&database_url)
        .context("Failed to create database pool.")?;

    Ok(pool)
}


// ──────────────────────────────────────────────────────────────────────────────
//                                Venue Section
// ──────────────────────────────────────────────────────────────────────────────

/*
pub async fn get_venues(pool: &PgPool) -> Result<Vec<Venue>, sqlx::Error> {
    let query_result = sqlx::query_file_as!(Venue, "queries/get-venues.sql")
        .fetch_all(pool)
        .await?;

    Ok(query_result)
}
*/

pub async fn get_venue_by_id(pool: &PgPool, venue_id: i32) -> Result<Venue, sqlx::Error> {
    let query_result = sqlx::query_file_as!(Venue, "queries/get-venue.sql", venue_id)
        .fetch_one(pool)
        .await?;

    Ok(query_result)
}
