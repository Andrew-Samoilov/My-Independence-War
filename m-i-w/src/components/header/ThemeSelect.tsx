export default function ThemeSelect() {
    return (
        <fieldset>
            <legend>Choose you theme</legend>

            <div>
                <input type="radio" id="light" name="light" value="light" />
                <label htmlFor="light">Light</label>
            </div>

            <div>
                <input type="radio" id="system" name="system" value="system" checked />
                <label htmlFor="system">System</label>
            </div>

            <div>
                <input type="radio" id="dark" name="dark" value="dark" />
                <label htmlFor="dark">Dark</label>
            </div>
        </fieldset>
    )
}
