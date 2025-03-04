import { useIdeas } from "../hooks/useIdeas"
import "../css/layout.css"

export const Home= () => {
    
    const {ideas, removeIdea, changeIdea} = useIdeas();

    return(
        <>
        <h3>Ideas</h3>
        <div className="ideaContainer">
            {ideas.map((i) => {
                return(                  
                    <div className={i.done ? "done" : "displayIdea"} key={i.id}>
                        <h3>{i.text}</h3>
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