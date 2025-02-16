import Image from "next/image";
import image_1 from "../../images/1.png"
import image_2 from "../../images/2.png"
import styles from "./styles.module.css";
import Form from "@/component/form_guests/Form";
import { GuestsService } from "@/services/ServiceGuests";
import Timer from "@/component/timer/Timer";

// import { usePathname, useRouter } from 'next/navigation'; 


export default async function Guests({ params }) {

    const id = params.id;
    const initialData = await GuestsService.GetDataGuestsID(id);
    console.log(initialData);


    // =====================================
    // =====================================

    // const router = useRouter();
    // const pathname = usePathname();
    // router.push('/another-page');
    // =====================================
    // =====================================

    return (
        <div>
            <div className={styles.block_wrap}>

                <div className={styles.block}>

                    <Image
                        className={styles.image_block}
                        src={image_1}
                        alt="Next.js logo"
                        priority
                    />
                </div>

                <div className={styles.block}>
                    <div className={styles.text_string_center}>
                        <div>июнь <i className={styles.bold}>| 14 |</i> 2025</div>
                        <div>16:00</div>
                    </div>
                    <div className={styles.text_string_center}>
                        <div>набережная 40-летия ВЛКСМ, 1, г. Выборг  <br /> РЕСТОРАН "МОНРЕПА"</div>
                    </div>
                </div>

                <div className={styles.block}>
                    <Timer />
                </div>

                <div className={styles.block}>
                    <Image
                        className={styles.image_block}
                        src={image_2}
                        alt="Next.js logo"
                        priority
                    />
                </div>

                <div className={styles.block}>
                    <Form id={id} initialData={initialData} />
                </div>
            </div>



            <div className={styles.map} style={{ position: 'relative', overflow: 'hidden' }}>
                <iframe
                    src="https://yandex.ru/map-widget/v1/?ll=28.740760%2C60.713831&mode=poi&poi%5Bpoint%5D=28.740601%2C60.714050&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D127165787083&z=17.06"
                    width="100%"
                    height="400"
                    allowFullScreen
                    style={{ position: 'relative' }}
                />
            </div>
        </div>
    )
}