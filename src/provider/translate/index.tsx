"use client";

import { useEffect, useState } from "react";
import { IntlProvider } from "react-intl";

export const TranslateProvider = ({ children }: { children: React.ReactNode }) => {
    const [locale, setLocale] = useState("en");
    const [messages, setMessages] = useState<Record<string, string> | null>(null);

    const loadLocaleData = async (locale: string) => {
        try {
            const messages = await import(`../../locales/${locale}.json`);
            setMessages(messages.default);
        } catch (error) {
            console.error("Error loading language:", error);
        }
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            const browserLocale = navigator.language.startsWith("es") ? "es" : "en";
            setLocale(browserLocale);
        }
    }, []);

    useEffect(() => {
        loadLocaleData(locale);
    }, [locale]);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const changeLocale = (newLocale: string) => {
        setLocale(newLocale);
    };

    if (!messages) return null;

    return (
        <IntlProvider locale={locale} defaultLocale="en" messages={messages}>
            {children}
        </IntlProvider>
    );
};
