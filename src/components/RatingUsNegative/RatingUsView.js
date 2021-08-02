import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

export const RatingUsView = (props) => {

    return (
        <>
            <header className="header-area header-sticky">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="main-nav">

                                <a href="#welcome" className="logo">
                                    <img src="https://evropochta.by/.compiled/images/logo.e0944394.svg" alt="Softy Pinko"/>
                                </a>

                                  <ul className="nav">
                                    <li><a href="https://evropochta.by/" className="active">Сайт evropochta.by</a></li>
                                    <li><a href="#features">Работа в ЕВРОПОЧТА</a></li>
                                    <li><a href="#work-process">Сотрудничество</a></li>
                                    <li><a href="#testimonials">О компании</a></li>
                                    <li><a href="#pricing-plans">Инвесторам</a></li>

                                </ul>
                                <a href='welcome' className='menu-trigger'>
                                    <span>Menu</span>
                                </a>

                            </nav>
                        </div>
                    </div>
                </div>
            </header>

            <div className="welcome-area bgneg" id="welcome">
                <div className="header-text">
                    <div className="container">
                        <div className="row">
                            <div className="offset-xl-3 col-xl-6 offset-lg-2 col-lg-8 col-md-12 col-sm-12">
                                {props.detailedForm ? <DetailedForm/> : <InfoText detailedFormViewHandler={props.detailedFormViewHandler} storeID={props.storeID}/>}

                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <section className="section home-feature">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">

                                <div className="col-lg-4 col-md-6 col-sm-6 col-12"
                                     data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s">
                                    <div className="features-small-item">
                                        <div className="icon">
                                            <i><img src="/assets/images/featured-item-01.png" alt=""/></i>
                                        </div>
                                        <h5 className="features-title">migom-dostavka</h5>
                                        <p>Доставка продуктов за 20 минут</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 col-sm-6 col-12"
                                     data-scroll-reveal="enter bottom move 50px over 0.6s after 0.4s">
                                    <div className="features-small-item">
                                        <div className="icon">
                                            <i><img src="/assets/images/featured-item-01.png" alt=""/></i>
                                        </div>
                                        <h5 className="features-title">evropochta.by</h5>
                                        <p>Доставка посылок по всей Беларуси</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 col-sm-6 col-12"
                                     data-scroll-reveal="enter bottom move 50px over 0.6s after 0.6s">
                                    <div className="features-small-item">
                                        <div className="icon">
                                            <i><img src="/assets/images/featured-item-01.png" alt=""/></i>
                                        </div>
                                        <h5 className="features-title">evroopt.by</h5>
                                        <p>Приоритетом сети магазинов «Евроопт» является работа с покупателем</p>
                                    </div>
                                </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</>
    )
}


const DetailedForm = () => {
    return (
        <>
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputEmail4">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
                    </div>
                                      <div className="form-group col-md-6">
                        <label htmlFor="inputState">Вам понравился сервис?</label>
                        <select id="inputState" className="form-control">
                            <option>Да</option>
                            <option selected>Нет</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="inputAddress">Имя доставщика</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="Антон"/>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputCity">Сотрудники вежливы?</label>
                       <select id="inputCity" className="form-control">
                            <option>Да</option>
                            <option selected>Нет</option>
                        </select>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputState">Состояние посылки?</label>
                        <select id="inputState" className="form-control">
                                             <option selected>Состояние хорошее</option>
                            <option>Удовлетворительно</option>
                            <option>Есть недочеты</option>
                            <option>Состояние плохое</option>
                            <option>Упаковка деформирована</option>
                        </select>
                    </div>

                </div>
                <div className="form-group">
                    <div className="form-check">
                         <label htmlFor="inputAddess">Телефон</label>
                                                                    <input type="text" className="form-control" id="inputAddrss" placeholder="+375..."/>

                        <input className="form-check-input" type="checkbox" id="gridCheck"/>
                            <label className="form-check-label" htmlFor="gridCheck">
                                Перезвоните мне
                            </label>

                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Отправить форму</button>
            </form>
        </>
    )
}

const InfoText = (props) => {
    return (<>
        <h1>Благодарим вас за отзыв</h1>
        <p>Номер вашей посылки - {props.storeID}. Рейтинг ответственных сотрудников понижен. <br/> Заполните форму что бы отправить письмо руководителям структурных подразделений - они постараются решить возникшие вопросы</p>
        <p>Расскажете подробнее? Заполните небольшую анкету</p>
          <a href="#features" className="main-button-slider"
                                   onClick={props.detailedFormViewHandler}>Залолнить анкету</a>
    </>)
}