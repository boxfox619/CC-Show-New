import { Store } from "redux";

export default (store: Store) => (
    async () => {
        return await import("./containers/IndexContainer");
    }
)