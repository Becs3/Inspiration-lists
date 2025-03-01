import { useIdeas } from "../hooks/useIdeas"

export const Home= () => {
    
    const {ideas, removeIdea, changeIdea} = useIdeas();


    return(
        <>
        <h2>Ideas</h2>
        <div>
            {ideas.map((i) => {
                return(
                    <div className={i.done ? "done" : ""} key={i.id}>
                        <p>{i.text}</p>
                        <p>{i.comment}</p>
                        <button onClick={() => changeIdea(i.id)}>Done</button>
                        <button onClick={() => removeIdea(i.id)}>Remove</button>
                    </div>
                )
            })}
        </div>
        </>
    )
}