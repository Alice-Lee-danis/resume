import React from "react"
import classes from "./info.module.css" 
import habr from "../static/habr_icon.png"
import github from "../static/github_icon.png"

const Info:React.FC = ()=>{
    return (
        <div className={classes.info}>
            <h1 className={classes.info__title}>Здравствуйте</h1>
            <p className={classes.info__content}>Вы попали на страницу резюме.
                Рассакажу о главном.
                Мой стек представлен на карточках, где также вы можете перейти
                на репозиторий пет проектов. Помимо той информации
                выделю банальные навыки такие, как работа с <b className={classes.info__content__important}>'json', 'html', 'css'</b>.
                О своих личностных навыках: быстро самообучаюсь, нахожу информацию.
                Надеюсь, что мы будем иметь с вами дело в бущуем.
                Хорошего дня.
            </p>
            <div className={classes.info__contact}>
                <a href="https://github.com/Alice-Lee-danis">
                    <img className={classes.git} src={github} alt="" />
                    <p>Git.hub</p></a>
                <a href="https://career.habr.com/danis123">
                    <img className={classes.habr} src={habr} alt="" />
                    <p>Habr анкета</p></a>
                
                
            </div>
        </div>
    )
}

export default Info