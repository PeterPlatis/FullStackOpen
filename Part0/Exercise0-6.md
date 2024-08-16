```mermaid
    sequenceDiagram
        participant browser
        participant server

        browser ->>+ server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
        server -->>- browser: 201 - new_note_spa/json
        Note right of browser: Update notes<br/> with new notes JSON
        
```
