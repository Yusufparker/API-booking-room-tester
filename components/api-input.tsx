"use client";

import { useState } from "react";
import { Input } from "./ui/input";
import { useApiStore } from "@/hooks/useApiStore";
import { Button } from "./ui/button";

const ApiInput = () => {
    const { apiUrl, setApiUrl } = useApiStore();
    const [mode, setMode] = useState<string>("READ");
    const [inputValue, setInputValue] = useState<string>(apiUrl || ""); 

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value); 
    };

    const handleSave = () => {
        setApiUrl(inputValue); 
        setMode("READ");
    };

    return (
        <div className="flex gap-4 items-center">
            <Input
                className="border-2 disabled:bg-gray-300"
                size={50}
                placeholder="Endpoint"
                value={inputValue}
                disabled={mode === "READ"}
                onChange={handleInputChange}
            />
            <Button
                variant={mode==="READ" ? 'outline' : 'default'}
                size="sm"
                onClick={() => {
                    if (mode === "READ") {
                        setMode("EDIT");
                    } else {
                        handleSave(); 
                    }
                }}
            >
                {mode === "READ" ? "Edit" : "Save"}
            </Button>
        </div>
    );
};

export default ApiInput;
