import React from "react";

// Multilingue
import { useTranslation } from "react-i18next";

export default function Page2() {
    const { t } = useTranslation();
    return (
        <div>
            <h1>PAGE2</h1>
        </div>
    );
}
