module.exports = {

    attributes: {
        division: {
            model: "Division",
            via: "id"
        },
        name: {
            type: "string"
        },
        image: {
            type: "string"
        }
    }

};
