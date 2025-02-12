// /component/copy_btn/Copy_btn.tsx

"use client";

import { useState } from "react";

interface CopyBtnProps {
    linkData: string; // Текст, который нужно скопировать
}

export default function CopyBtn({ linkData }: CopyBtnProps) {
    const [isCopied, setIsCopied] = useState(false); // Состояние для отображения "Скопировано!"

    const handleCopy = () => {
        try {
            // Создаем временный textarea
            const textarea = document.createElement("textarea");
            textarea.value = linkData; // Устанавливаем значение текста
            document.body.appendChild(textarea); // Добавляем textarea в DOM

            // Выделяем текст и копируем
            textarea.select();
            textarea.setSelectionRange(0, 99999); // Для мобильных устройств
            document.execCommand("copy");

            // Удаляем временный textarea
            document.body.removeChild(textarea);

            // Обновляем состояние
            setIsCopied(true);
        } catch (error) {
            console.error("Не удалось скопировать текст:", error);
        }

        // Сбрасываем состояние через 2 секунды
        setTimeout(() => setIsCopied(false), 2000);
    };

    return (
        <button onClick={handleCopy}>
            {isCopied ? "Скопировано!" : "Копировать"}
        </button>
    );
}