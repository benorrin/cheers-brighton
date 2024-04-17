use actix_web::{get, HttpResponse, web};
use actix_web::web::Path;
use serde::Serialize;
use serde_json::json;
use sqlx::{PgPool, Type};

use crate::database;


#[derive(Debug, Serialize)]
pub struct Venue {
    pub id: i32,
    pub name: String,
    pub description: String,
    pub address: String,
    pub website: Option<String>,
    pub facebook: Option<String>,
    pub instagram: Option<String>,
    pub twitter: Option<String>,
    pub venue_type: VenueType,
}

#[derive(Debug, Serialize, Type)]
#[sqlx(type_name = "venue_type", rename_all = "snake_case")]
pub enum VenueType {
    Pub,
    Bar,
    Club,
}

fn serialize_venue(venue: &Venue) -> serde_json::Value {
    serde_json::json!({
        "id": venue.id,
        "name": &venue.name,
        "description": &venue.description,
        "address": &venue.address,
        "website": venue.website.as_ref().map(String::as_str),
        "facebook": venue.facebook.as_ref().map(String::as_str),
        "instagram": venue.instagram.as_ref().map(String::as_str),
        "twitter": venue.twitter.as_ref().map(String::as_str),
        "venue_type": &venue.venue_type,
    })
}

#[get("/venue/{id}")]
pub async fn get(pool: web::Data<PgPool>, path: web::Path<(i32,)>) -> HttpResponse {
    println!("l");
    let venue_id = path.into_inner().0;
    
    let venue_result = database::get_venue_by_id(pool.get_ref(), venue_id).await;

    let venue = match venue_result {
        Ok(venue) => venue,
        Err(err) => {
            eprintln!("Failed to fetch venue: {}", err);
            return HttpResponse::InternalServerError().finish();
        }
    };

    let json_response = serialize_venue(&venue);

    HttpResponse::Ok().json(json_response)
}