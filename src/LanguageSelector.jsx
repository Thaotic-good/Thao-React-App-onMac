import {useState} from "react";

function LanguageSelector(){
    const [languages] = useState(["JavaScript", "Python", "Java", "Bash", "Kotlin"])
    const [selected, setSelected] = useState([])

    const handleClickSelection = (language)=> {
        const isInList = selected.includes(language)
       if (isInList) {
           const languageIndex = selected.indexOf(language)
           setSelected(prevSelected=> prevSelected.splice(languageIndex,1))
           /*=> prevSelected is for when I don't want to rewrite the whole state also
           updates to state are scheduled and don't happen instantly but during re-render*/
       }
        else setSelected(prevSelected => [...prevSelected, language])
    }

    return(
        <>
            <ul>
                {languages.map((language, index) =>
                    <li key={index} onClick={()=> handleClickSelection(language)}
                        style={{listStyleType:'none', textAlign:'left', color: selected.includes(language)? 'green' : 'white'}}>{language}</li>)}
            </ul>
        </>
    )
}

export default LanguageSelector