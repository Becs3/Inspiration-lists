import { useState } from "react"
import { Idea } from "../models/idea";

export const useIdeas = () => {
    const [ideas, setIdeas] = useState<Idea[]>([]);

    const addIdea = (newIdeaInput: string) => {
        setIdeas([...ideas, new Idea(newIdeaInput)])
    }
    
    return {ideas, addIdea};
    
};