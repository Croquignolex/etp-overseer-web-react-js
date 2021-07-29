// Init value
export function requestInitValue() {
    return {failed: false, loading: true, succeeded: false, message: ""}
}

// Failed value
export function requestFailedValue(message) {
    return {failed: true, loading: false, succeeded: false, message}
}

// Succeeded value
export function requestSucceededValue(message) {
    return {failed: false, loading: false, succeeded: true, message}
}
