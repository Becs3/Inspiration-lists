import { FormEvent, useState } from "react";
import { useIdeas } from "../hooks/useIdeas"

export const Add= () => {

    const { addIdea } = useIdeas();
    const [userInput, setUserInput] = useState<string>("");

    const addUserInput = (e:FormEvent) => {
        e.preventDefault();

        addIdea(userInput);
        setUserInput("");
    }

    return(
        <>
        <h2>Ideas</h2>
        <form onSubmit={addUserInput}>
            <input 
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)} />
        <button>Save</button>
        </form>
        </>
    )
}