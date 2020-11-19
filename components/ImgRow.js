import styles from "./imgrow.module.css";

const ImgRow = props => (
    <div className="container row d-flex align-items-center flex-wrap pt-5 mt-5">
        <div className="col-md-4 d-flex justify-content-center">
            <img className={styles.img} src={props.img1}></img>
        </div>
        <div className="col-md-4 d-flex justify-content-center">
            <img className={styles.img} src={props.img2}></img>
        </div>
        <div className="col-md-4 d-flex justify-content-center">
            <img className={styles.img} src={props.img3}></img>
        </div>
    </div>
);

export default ImgRow;