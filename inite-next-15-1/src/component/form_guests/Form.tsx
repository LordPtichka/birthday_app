"use client";

import { GuestsService } from "@/services/ServiceGuests";
import { useState } from "react";
import styles from "./Form.module.css";

interface FormProps {
    id: string;
    initialData?: any;
}

export default function Form({ id, initialData }: FormProps) {
    const [transfer, setTransfer] = useState('');
    const [foodPreferences, setFoodPreferences] = useState('');
    const [alcoholPreference, setAlcoholPreference] = useState('');
    const [child, setChild] = useState('');
    const [confirm, setConfirm] = useState(false)
    const [formVisible, setFormVisible] = useState(false)

    const confirmHandler = () => {
        setConfirm(true)
        setFormVisible(true)
        let data = { "confirm": true }
        GuestsService.UpdateDataGuestsID(id, data)
    }
    // =====================================
    // =====================================
    const handleSubmit = (dataForm) => {
        dataForm.preventDefault();
        let data = { "wishes": [transfer, foodPreferences, alcoholPreference, child] }
        // console.log(data)
        GuestsService.UpdateDataGuestsID(id, data)
        setFormVisible(false)
    };



    return (

        <div>
            <div className={styles.block}>
                <button onClick={confirmHandler}>Подтверждаю</button>
            </div>

            {formVisible == false ? '' :
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.block}>
                        <label className={styles.label}>Потребуется ли вам трансфер?</label>
                        {['Нет', 'Только до торжества', 'Только после торжества', 'До и после торжества'].map((option) => (
                            <div key={option} className={styles.option}>
                                <input
                                    type="radio"
                                    name="transfer"
                                    value={option}
                                    checked={transfer === option}
                                    onChange={(e) => setTransfer(e.target.value)}
                                    className={styles.radio}
                                />
                                <span>{option}</span>
                            </div>
                        ))}
                    </div>

                    <div className={styles.block}>
                        <label className={styles.label}>Есть ли у вас особые предпочтения по еде?</label>
                        {['нет', 'не ем мясо', 'не ем рыбу', 'вегетарианец'].map((option) => (
                            <div key={option} className={styles.option}>
                                <input
                                    type="radio"
                                    name="foodPreferences"
                                    value={option}
                                    checked={foodPreferences === option}
                                    onChange={(e) => setFoodPreferences(e.target.value)}
                                    className={styles.radio}
                                />
                                <span>{option}</span>
                            </div>
                        ))}
                    </div>

                    <div className={styles.block}>
                        <label className={styles.label}>Какой алкоголь вы предпочитаете?</label>
                        {['Красное вино', 'Белое вино', 'Шампанское', 'Виски/коньяк', 'Водка', 'Не буду пить алкоголь'].map((option) => (
                            <div key={option} className={styles.option}>
                                <input
                                    type="radio"
                                    name="alcoholPreference"
                                    value={option}
                                    checked={alcoholPreference === option}
                                    onChange={(e) => setAlcoholPreference(e.target.value)}
                                    className={styles.radio}
                                />
                                <span>{option}</span>
                            </div>
                        ))}
                    </div>

                    <div className={styles.block}>
                        <label className={styles.label}>Будет ли с вами на празднике ребенок?</label>
                        {['Да', 'Нет'].map((option) => (
                            <div key={option} className={styles.option}>
                                <input
                                    type="radio"
                                    name="child"
                                    value={option}
                                    checked={child === option}
                                    onChange={(e) => setChild(e.target.value)}
                                    className={styles.radio}
                                />
                                <span>{option}</span>
                            </div>
                        ))}
                    </div>

                    <button type="submit" className={styles.block}>
                        Отправить
                    </button>
                </form>
            }
        </div>
    );
}