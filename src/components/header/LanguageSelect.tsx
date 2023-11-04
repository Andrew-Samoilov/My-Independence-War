interface LanguageSelectProps {
    styleSelectLanguage?: string;
}

export default function LanguageSelect({ styleSelectLanguage }: LanguageSelectProps) {
    return (
        <select
            name="lang"
            defaultValue={'English'}
            className={styleSelectLanguage}
        >
            <option value="English">Eng</option>
            <option value="Ukrainian">Укр</option>
        </select> 
    )
}
