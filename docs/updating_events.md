# Updating Events

To update the events displayed on the website, you need to edit the `src/events.json` file. This file contains an array of event objects.

## Event Structure

Each event object in the JSON array has the following structure:

```json
{
  "id": "string",
  "title": "string",
  "date": "YYYY-MM-DD",
  "type": "Workshop" | "Competition" | "Networking" | "Meeting",
  "description": "string"
}
```

### Fields

-   `id`: A unique identifier for the event. This can be a string of numbers.
-   `title`: The title of the event.
-   `date`: The date of the event in `YYYY-MM-DD` format.
-   `type`: The type of event. This can be one of four values: `Workshop`, `Competition`, `Networking`, or `Meeting`.
-   `description`: A short description of the event.

## How to Add a New Event

1.  Open `src/events.json`.
2.  Add a new JSON object to the array with the details of the new event.
3.  Ensure the `id` is unique.
4.  Save the file. The website will automatically update with the new event.

## Example

```json
[
    {
      "id": "1",
      "title": "Intro to Penetration Testing",
      "date": "2025-09-22",
      "type": "Workshop",
      "description": "Learn the basics of ethical hacking and penetration testing methodologies."
    },
    {
      "id": "2",
      "title": "Capture The Flag Competition",
      "date": "2025-09-28",
      "type": "Competition",
      "description": "Test your skills in our monthly CTF challenge with prizes for winners."
    }
]
```
