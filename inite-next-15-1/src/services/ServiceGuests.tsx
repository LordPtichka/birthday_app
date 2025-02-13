const link = `http://json-server:4000`

export const GuestsService = {


    async GetDataGuestsAll() {
        try {
            const response = await fetch(`${link}/GuestsData/`);
            if (!response.ok) {
                return response.status
            }
            return response.json();
        } catch {
            return null
        }
    },
    // ==========================
    async GetDataGuestsID(id) {
        try {
            const response = await fetch(`${link}/GuestsData/${id}`);
            if (!response.ok) {
                return response.status
            }
            return response.json();
        } catch {
            return null
        }
    },

    async UpdateDataGuestsID(id, data) {

        const response = await fetch(`${link}/GuestsData/${id}`,
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