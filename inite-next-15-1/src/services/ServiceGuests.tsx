export const GuestsService = {

    async GetDataGuestsAll() {

        const response = await fetch(`http://localhost:4000/GuestsData/`);
        if (!response.ok) {
            return response.status
        }
        return response.json();
    },

    async GetDataGuestsID(id) {
        const response = await fetch(`http://localhost:4000/GuestsData/${id}`);
        if (!response.ok) {
            return response.status
        }
        return response.json();
    },

    async UpdateDataGuestsID(id, data) {

        const response = await fetch(`http://localhost:4000/GuestsData/${id}`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            },
        );
        if (!response.ok) {
            return response.status
        }
        return response.json();
    }
}