SELECT
    id,
    name,
    address,
    description,
    venue_type AS "venue_type: VenueType",
    website,
    instagram,
    facebook,
    twitter
FROM
    venue
WHERE
    id = $1