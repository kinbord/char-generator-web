
export default function fetchNPC(): Promise<string> {
    const url = new URL("http://localhost:8098/NPC");

    const name = fetch(url)
        .then(response => response.json())
        .then((out) => {
            return out.name
        }).catch((e) => {
            return e.message
        })

    return name
}


