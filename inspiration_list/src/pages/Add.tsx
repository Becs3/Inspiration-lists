import { FormEvent, useState } from "react";
import { useIdeas } from "../hooks/useIdeas"

export const Add= () => {

    const { addIdea } = useIdeas();
    const [userInputIdea, setUserInputIdea] = useState<string>("");
    const [userInputComment, setUserInputComment] = useState<string>("");

    const addUserInput = (e:FormEvent) => {
        e.preventDefault();

        addIdea(userInputIdea, userInputComment);

        setUserInputIdea("");
        setUserInputComment("");
    }

    return(
        <>
        <h2>Adding ideas</h2>
        <form onSubmit={addUserInput}>
            <div>
            <input 
            type="text"
            placeholder="Idea"
            value={userInputIdea}
            onChange={(e) => setUserInputIdea(e.target.value)} />
            </div>
            <div>
            <input 
            type="text"
            placeholder="comment"
            value={userInputComment}
            onChange={(e) => setUserInputComment(e.target.value)} />
            </div>
        <button>Save</button>
        
        </form>
        </>
    )
}