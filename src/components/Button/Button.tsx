import React from "react";
import { AnimatePresence, cubicBezier, motion } from "framer-motion";
import "./Button.scss";

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    type?: "add" | "remove";
    disabled?: boolean;
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    type = "add",
    disabled,
    className,
}) => {
    const CLASSES = {
        add: "button--add",
        remove: "button--remove",
        
    };

    const hasMultipleElements =  children?.toString() && !(type.includes("tertiary")) && children?.toString().includes(",") || false;

    return (
        <AnimatePresence>
            {
                !disabled ? (
                    <motion.button
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        exit={{ opacity: 0.5 }}
                        transition={{ duration: 0.1, ease: cubicBezier(0.6,0.6,0,0.1) }}
                        className={`button ${CLASSES[type]} ${hasMultipleElements && "button--multiple"} ${className || ""}`}
                        onClick={onClick}
                    >
                        {children}
                    </motion.button>
                ) : (
                    <motion.button
                        initial={{ opacity: 1 }}
                        whileInView={{ opacity: 0.5 }}
                        exit={{ opacity: 0.5 }}
                        transition={{ duration: 0.1, ease: cubicBezier(0.6,0.6,0,0.1) }}
                        className={`button ${CLASSES[type]} ${hasMultipleElements && "button--multiple"}`}
                        disabled
                    >
                        {children}
                    </motion.button>
            )}
        </AnimatePresence>
    );
}
