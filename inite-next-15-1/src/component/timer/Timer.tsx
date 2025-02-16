"use client"
import { useEffect, useState } from 'react';
import style from './Timer.module.css'

const Timer: React.FC = () => {
    // Целевая дата: 14 июня 2025 года, 16:00 UTC+3
    const targetDate = new Date('2025-06-14T16:00:00+03:00');

    // Состояние для отображения оставшегося времени
    const [timeRemaining, setTimeRemaining] = useState<{
        days: number;
        hours: number;
        minutes: number;
        seconds: number;
    }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    // Функция для обновления таймера
    const updateCountdown = () => {
        const now = new Date(); // Текущее время
        const difference = targetDate.getTime() - now.getTime(); // Разница в миллисекундах

        if (difference <= 0) {
            setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            return;
        }

        // Расчет дней, часов, минут и секунд
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeRemaining({ days, hours, minutes, seconds });
    };

    useEffect(() => {
        // Обновляем таймер каждую секунду
        const interval = setInterval(updateCountdown, 1000);

        // Первичное обновление при монтировании компонента
        updateCountdown();

        // Очищаем интервал при размонтировании компонента
        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            {timeRemaining.days === 0 &&
                timeRemaining.hours === 0 &&
                timeRemaining.minutes === 0 &&
                timeRemaining.seconds === 0 ? (
                <p>Событие уже произошло!</p>
            ) : (

                <div className={style.wrapTimer}>
                    <div className={style.timerElement}>
                        <div>{timeRemaining.days}</div>
                        <div>Дней</div>
                    </div>
                    <div className={style.timerElement}>
                        <div>|</div>
                    </div>
                    <div className={style.timerElement}>
                        <div>{timeRemaining.hours}</div>
                        <div>Часов</div>
                    </div>
                    <div className={style.timerElement}>
                        <div>|</div>
                    </div>
                    <div className={style.timerElement}>
                        <div>{timeRemaining.minutes}</div>
                        <div>Минут</div>
                    </div>
                    <div className={style.timerElement}>
                        <div>|</div>
                    </div>
                    <div className={style.timerElement}>
                        <div>{timeRemaining.seconds}</div>
                        <div>Секунд</div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Timer;