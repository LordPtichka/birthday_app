
import { GuestsService } from '@/services/ServiceGuests'
import styles from './styles.module.css'
import CopyBtn from '@/component/copy_btn/Copy_btn'
// import { useState } from 'react'

export default async function Admin() {

    const data = await GuestsService.GetDataGuestsAll()



    return (
        <div className={styles.block_wrap}>
            <div className={styles.text_header}>
                Статистика Гостей
            </div>

            <div className={styles.wrap_table}>
                <div className={styles.string_table}>
                    <div className={styles.text_center}>id</div>
                    <div className={styles.text_center}>имя</div>
                    <div className={styles.text_center}>Подтвердил</div>
                    <div className={styles.text_center}>Пожелания</div>
                    <div className={styles.text_center}>ссылка</div>

                </div>


                {data ? data.map(guests => (
                    <div className={styles.string_table}>
                        <div className={styles.text_center}>{guests.id}</div>
                        <div className={styles.text_center}>{guests.fulName}</div>
                        {guests.confirm != true ? <div className={styles.confirm}></div> : <div className={`${styles.confirm} ${styles.yes}`}>Подтверждено</div>}
                        <div>
                            {guests.wishes.map((wish, index) => (
                                <div key={index}> - {wish}</div>
                            ))}
                        </div>
                        <div> <CopyBtn linkData={`http://192.168.3.1:3001/guests/${guests.id}`} /> </div>
                    </div>
                )) : <div>Данные не загружены или произошла ошибка.</div>}


            </div>

        </div>
    )
}