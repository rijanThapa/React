import { useState } from "react";
import ProductPage from "./ProductPage";

export default function Shop() {
    const [isDark, setIsDark] = useState(false);

    return (
        <>
            <label>
                <input 
                    type="checkbox"
                    onChange={e => setIsDark(e.target.checked)}
                />
                Dark mode
            </label>
            <hr />
            <ProductPage
                referrer="wizard_of_oz" 
                productId={123}
                theme={isDark ? 'dark' : 'light'}
            />
        </>
    );
}
