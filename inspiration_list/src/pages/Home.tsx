import { useIdeas } from "../hooks/useIdeas"

export const Home= () => {
    
    const {ideas, removeIdea, changeIdea} = useIdeas();


    return(
        <>
        <h2>Finding inspiration</h2>
        <div>
            {ideas.map((i) => {
                return(
                    <div className={i.done ? "done" : ""} key={i.id}>
                        <p>{i.text}</p>
                        <button onClick={() => changeIdea(i.id)}>Done</button>
                        <button onClick={() => removeIdea(i.id)}>Remove</button>
                    </div>
                )
            })}
        </div>
        </>
    )
}