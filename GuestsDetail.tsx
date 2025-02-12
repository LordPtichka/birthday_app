import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GuestsService } from "../../../services/guests.service";
import GuestsItem from "../Home/guests-item/GuestsItem"
import { IGuests, IGuestsConfirmed } from "../../../types/guests.interface";
import styles from "./GuestsDetail.module.css"
import Form from "../Home/update-guests-form/Form";
import Timer from "../Home/timer/Timer";




const GuestsDetail = () => {

  const { id } = useParams()
  const [guests, setGuests] = useState<IGuests>({} as IGuests)
  const [isFormVisible, setFormVisible] = useState(false)

  // =================================
  // =================================
  // =================================



  const toggleForm = () => {
    setFormVisible(!isFormVisible); // Переключаем состояние формы
    setConfirmDisabled(true); // Отключаем кнопку "Подтвердить"

    if (!id) return
    const confirmedInfo: IGuestsConfirmed = {
      confirmed: true
    }

    const fetchData = async () => {
      const data = await GuestsService.UpdateConfirmed(id, confirmedInfo)
      console.log(confirmedInfo)
      console.log(data)
    }
    fetchData()
  };

  const toggleFormFalse = () => {
    setFormVisible(!isFormVisible); // Переключаем состояние формы
    setRejectDisabled(true); // Отключаем кнопку "Отклонить"

    if (!id) return
    const confirmedInfo: IGuestsConfirmed = {
      confirmed: false
    }

    const fetchData = async () => {
      const data = await GuestsService.UpdateConfirmed(id, confirmedInfo)
      console.log(confirmedInfo)
      console.log(data)
    }
    fetchData()
  };


  const [isConfirmDisabled, setConfirmDisabled] = useState(false);
  const [isRejectDisabled, setRejectDisabled] = useState(false);



  // =================================
  // =================================
  // =================================

  return <main>

    <div className={styles.first_block}>
      <h2>{guests.fulName}</h2>
      <div className={styles.image} style={{ backgroundImage: `url(${import.meta.env.VITE_ENV_DOMEN}/welkom.png)` }} />
    </div>

    <div className={`${styles.block} ${styles.margin}`}>
      <div className={styles.text}>
        <div className={styles.center} >июнь <i className={styles.font}>| 14 |</i> 2025г.</div>
        <div>16:00  &#xfeff;  &#xfeff;</div>

      </div>
    </div>

    <div className={`${styles.block} ${styles.margin}`}>
      <div className={styles.text}>
        набережная 40-летия ВЛКСМ, 1, Выборг, <br /> Ленинградская область, 188800 <br />
        РЕСТОРАН "МОНРЕПА"
      </div>
    </div>

    <div className={`${styles.margin}`}>
      <Timer />
    </div>

    <div className={styles.first_block}>
      <div className={styles.image} style={{ backgroundImage: `url(${import.meta.env.VITE_ENV_DOMEN}/evplov.png)` }} />
    </div>

    {/* ==================== */}
    <div className={styles.block}>
      <button
        className={styles.btn_confirm}
        onClick={toggleForm}
        disabled={isConfirmDisabled} // Отключаем кнопку, если isConfirmDisabled === true
      >
        Подтвердить
      </button>
      <button
        className={styles.btn_confirm}
        onClick={toggleFormFalse}
        disabled={isRejectDisabled} // Отключаем кнопку, если isRejectDisabled === true
      >
        Отклонить
      </button>
    </div>

    {
      isFormVisible && (
        <div className={isFormVisible ? styles.formContainer : `${styles.formContainer} ${styles.formContainerHidden}`}>
          <Form />
        </div>

      )
    }
    {/* ==================== */}



    <div className={styles.map}>
      <div style={{ position: "relative", overflow: "hidden", width: "100%" }}>
        <iframe src="https://yandex.ru/map-widget/v1/?ll=28.740431%2C60.713622&mode=poi&poi%5Bpoint%5D=28.740611%2C60.714054&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D127165787083&source=serp_navig&z=18.9" height="600" style={{ position: "relative", width: "100%" }}></iframe>
      </div>
    </div>
  </main >;
};

export default GuestsDetail
