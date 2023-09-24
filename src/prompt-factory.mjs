

function predicate(prompt){
    return `Decide if the following statement ${prompt} evaluates as true. Answer only 'yes' or 'no' literals unquoted.`
}

function asJson(prompt){
    return  `Return the response to the following ${prompt} as a JSON object.
        The root will have 'response' as key.`
}

export {
    predicate,
    asJson
}