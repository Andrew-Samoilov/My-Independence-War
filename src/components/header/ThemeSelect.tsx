interface ThemeSelectProps {
    styleSelectTheme?: string;
}

export default function ThemeSelect({ styleSelectTheme }:ThemeSelectProps) {
    return (
        <>
            <select
                name="theme"
                id='color-theme'
                defaultValue={'System'}
                className={styleSelectTheme}
            >
                <option value="Light">Light</option>
                <option value="System">System</option>
                <option value="Dark">Dark</option>
            </select>
        </>
    )
}
