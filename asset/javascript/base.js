/** createEvents **/
export function createEvents(event, atcEvent, nameEvent, listElement) {
    if (event === "add") {
        for (let element of listElement) {
            element.addEventListener(atcEvent, nameEvent)
        }
    }
    if (event === "remove") {
        for (let element of listElement) {
            element.removeEventListener(atcEvent, nameEvent)
        }
    }
}