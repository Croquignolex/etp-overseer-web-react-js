// Map zones daa to have {id, name} couple
export function mappedZones(zones) {
    let returnedMappedZones = [];
    zones.forEach(zone => returnedMappedZones.push({
        id: zone.id,
        name: zone.reference ? `${zone.name} (${zone.reference})` : zone.name
    }));
    return returnedMappedZones;
}

// Map sims daa to have {id, name} couple
export function mappedSims(sims) {
    let returnedMappedSims = [];
    sims.forEach(sim => returnedMappedSims.push({
        id: sim.id,
        name: `${sim.name} (${sim.number})`
    }));
    return returnedMappedSims;
}

// Format data form select input easy management
export function dataToArrayForSelect(data) {
    let returnNedArray = [];
    data.forEach((_data) => {
        returnNedArray.push({
            label: _data.name,
            value: _data.id
        })
    });
    return returnNedArray;
}