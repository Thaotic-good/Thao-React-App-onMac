import {useState} from "react";
/*1. I have a list of languages, I want to use .map to create a <li> for each element
* 2. I want to create a function, to attach to each element, if I click on the <li> it will be added to a different
*    <ul> consisting of only the selected languages and the given language turns green
* 3. clicking again on the language again will unselect the language out of the list of selected items and not be green anymore*/

function LanguageSelector(){
    const [languages] = useState(["JavaScript", "Python", "Java", "Bash", "Kotlin"])
    const [selected, setSelected] = useState([])

    const handleClickSelection = (language)=> {
        const isInList = selected.includes(language)
        if (isInList) {
            const languageIndex = selected.indexOf(language)
            setSelected(prevSelected => prevSelected.splice(languageIndex,1))
        }
        else setSelected(prevSelected  =>  [...prevSelected, language])
    }

    return (
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