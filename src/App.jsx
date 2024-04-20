import React from 'react';
import { Button } from "../components/ui/button";
import { ThemeProvider } from "../components/theme-provider";
import Header from "./components/Header";
import { Dashboard } from "./components/Dashboard";

const App = () => {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Header />
            <Dashboard />
        </ThemeProvider>
    );
};

export default App;