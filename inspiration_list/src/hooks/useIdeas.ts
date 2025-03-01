import { useState } from "react"
import { Idea } from "../models/idea";

export const useIdeas = () => {
    const [ideas, setIdeas] = useState<Idea[]>(
        JSON.parse(localStorage.getItem("ideas") || "[]")
    );

    const addIdea = (newIdeaInput: string) => {
        setIdeas([...ideas, new Idea(newIdeaInput)])
    }

    const removeIdea = (id: number) => {
        setIdeas(ideas.filter((i) => i.id !== id))
    }

    const changeIdea = (id: number) => {
        setIdeas(
            ideas.map((i) => {
                if(i.id === id) {
                    return{...i, done: !i.done}
                }
                return i;
            })
        )
    }

    localStorage.setItem("ideas", JSON.stringify(ideas))

    return {ideas, addIdea, removeIdea, changeIdea};
    
};