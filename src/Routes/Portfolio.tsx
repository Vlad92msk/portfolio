import React from "react";
import cls from "../Styles/App.module.scss";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-scroll";
import { Box } from "@material-ui/core";
import img from "../Styles/me.bmp";
import { Spring } from "react-spring/renderprops";
import { NavLink } from "react-router-dom";

function Portfolio() {
  return (
    <Grid container item xs={12} justify="center" className={cls.Portfolio}>
      <Grid
        container
        direction="column"
        justify="center"
        xs={2}
        spacing={3}
        style={{
          height: "100%",
          position: "fixed",
          left: 0,
          padding: "50px",
          textTransform: "uppercase",
        }}
      >
        <Nav />
      </Grid>

      <Grid xs={8} container>
        <Grid id="1" xs={12} container className={cls.Container}>
          <WithMe />
        </Grid>
        <Grid id="2" xs={12} container className={cls.Container}>
          <Grid xs={12} className={cls.Skills}>
            Навыки
          </Grid>
          <hr style={{ width: "100%", border: "1px solid #fffe0080" }} />
          <MySkills />
        </Grid>
        <Grid id="3" xs={12} container className={cls.Container}>
          <Experience />
        </Grid>
        <Grid id="4" xs={12} container className={cls.Container}>
          <LernProject />
        </Grid>
      </Grid>
      <Grid xs={12} container className={cls.Footer}></Grid>
    </Grid>
  );
}

export default Portfolio;

const Nav = () => {
  return (
    <>
      <Grid item container>
        <Link
          className={cls.NavLink}
          activeClass={cls.active}
          to="1"
          spy={true} //Сделать Linkвыделенным, когда он scrollнаходится в позиции цели.
          smooth={true} //Чтобы оживить прокрутку
          offset={-70} //Для прокрутки дополнительных пикселей (например, отступов).
          duration={1000} //Время анимации прокрутки. Это может быть число или функция
        >
          Обо мне
        </Link>
      </Grid>
      <Grid item container>
        <Link
          className={cls.NavLink}
          activeClass={cls.active}
          to="2"
          spy={true} //Сделать Linkвыделенным, когда он scrollнаходится в позиции цели.
          smooth={true} //Чтобы оживить прокрутку
          offset={-70} //Для прокрутки дополнительных пикселей (например, отступов).
          duration={1000} //Время анимации прокрутки. Это может быть число или функция
        >
          Навыки
        </Link>
      </Grid>
      <Grid item container>
        <Link
          className={cls.NavLink}
          activeClass={cls.active}
          to="3"
          spy={true} //Сделать Linkвыделенным, когда он scrollнаходится в позиции цели.
          smooth={true} //Чтобы оживить прокрутку
          offset={-70} //Для прокрутки дополнительных пикселей (например, отступов).
          duration={1000} //Время анимации прокрутки. Это может быть число или функция
        >
          Опыт
        </Link>
      </Grid>
      <Grid item container>
        <Link
          className={cls.NavLink}
          activeClass={cls.active}
          to="4"
          spy={true} //Сделать Linkвыделенным, когда он scrollнаходится в позиции цели.
          smooth={true} //Чтобы оживить прокрутку
          offset={-70} //Для прокрутки дополнительных пикселей (например, отступов).
          duration={1000} //Время анимации прокрутки. Это может быть число или функция
        >
          Учебные проекты
        </Link>
      </Grid>
    </>
  );
};

const WithMe = () => {
  const toggleFrom = {
    opacity: 0,
    transform: "translateY(25px)",
  };
  const toggleTo = {
    opacity: 1,
    transform: "translateY(0px)",
  };

  return (
    <>
      <Grid container xs={12}>
        <Grid xs={3}>
          <Box
            component="img"
            style={{
              background: `url(${img})`,
              width: "255px",
              height: "255px",
              backgroundPosition: "50%",
              backgroundSize: "cover",
              borderRadius: "50%",
            }}
          />
        </Grid>
        <Grid container xs={9} alignContent="flex-start">
          <Spring from={toggleFrom} to={toggleTo} config={{ duration: 1000 }}>
            {(props) => (
              <Grid item xs={12} className={cls.Fio} style={props}>
                Фирсов Владислав
              </Grid>
            )}
          </Spring>
          <Spring from={toggleFrom} to={toggleTo} config={{ duration: 900 }}>
            {(props) => (
              <Grid item xs={12} className={cls.FrontEnd} style={props}>
                Frontend-разработчик
              </Grid>
            )}
          </Spring>

          <Grid item xs={12} className={cls.Row}>
            Тел: 8 985 939 73 47
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

const MySkills = () => {
  const toggleFrom = {
    opacity: 0,
    transform: "translateY(25px)",
  };
  const toggleTo = {
    opacity: 1,
    transform: "translateY(0px)",
  };

  return (
    <>
      <Spring from={toggleFrom} to={toggleTo} config={{ duration: 900 }}>
        {(props) => (
          <Grid xs={12} container className={cls.Row} style={props}>
            <Grid xs={1} className={cls.jsIcon} />
            <Grid xs={10} className={cls.Text}>
              <h5>Javascript</h5>
              <span>
                Javascript - на +/- среднем уровне. В процессе работы, если
                что-то подзабываю - обращаюсь за помощью к
                <a href="https://learn.javascript.ru">
                  https://learn.javascript.ru
                </a>
                .
              </span>
            </Grid>
          </Grid>
        )}
      </Spring>

      <Spring from={toggleFrom} to={toggleTo} config={{ duration: 1000 }}>
        {(props) => (
          <Grid xs={12} container className={cls.Row} style={props}>
            <Grid xs={1} className={cls.reactIcon} />
            <Grid xs={10} className={cls.Text}>
              <h5>React + Redux</h5>
              <span>
                Уверенно владею библиотекой Rеact. В процессе работы использую
                функциональные компоненты. Для управления жизненными циклами
                использую хуки <span>useState и useEffect</span>, в качестве
                оптимизации <span>useMemo и useColback</span>. <br />
                Знаком с различными дополнительными библиотеками для работы с
                React:
                <br /> Для работы с формами - <span>formik и yap</span>,
                <br /> Для работы с сылками <span>react-router-dom</span>,
                <br /> Для работы с анимацией -
                <span>react-spring и react-tooltip</span>,
                <br /> Для работы с бизнес логикой -
                <span>react-redux и redux-thunk</span>.
                <br /> Всеми перечисленными инструментами, за исключением Redux
                владею на базовом уровне. Что касается Redux - то данной
                библиотекой владею уверенно.
              </span>
            </Grid>
          </Grid>
        )}
      </Spring>

      <Spring from={toggleFrom} to={toggleTo} config={{ duration: 1000 }}>
        {(props) => (
          <Grid xs={12} container className={cls.Row} style={props}>
            <Grid xs={1} className={cls.fwIcon} />
            <Grid xs={10} className={cls.Text}>
              <h5>CSS-фреймворки</h5>
              <span>
                Из CSS-фреймворков работал с бутстрапом и материалайзом.
                Поверхностно
                <span>MATERIAL-UI</span>.
              </span>
            </Grid>
          </Grid>
        )}
      </Spring>

      <Grid xs={12} container className={cls.Row}>
        <Grid xs={1} className={cls.ppIcon} />
        <Grid xs={10} className={cls.Text}>
          <span>
            <h5>CSS и препроцессоры</h5>
            Думаю, что большинство задач средней сложности и немного выше
            выполнить смогу.
            <br />В части препроцессоров использовал scss (Пользовался
            вложеностями и миксинами).
          </span>
        </Grid>
      </Grid>
      <Grid xs={12} container className={cls.Row}>
        <Grid xs={1} className={cls.gitIcon} />
        <Grid xs={10} className={cls.Text}>
          <h5>Git и Github</h5>
          <span>
            Имею представление о системе контроля версий и как с ней работать на
            базовм уровне. В частности материалы проекта на котором
            практиковался выложены в репозиторий на Github (
            <a href="https://github.com/Vlad92msk/test.git">
              https://github.com/Vlad92msk/test.git
            </a>
            ) . Умею получать данные с репозитория, создавать ветки, комитить и
            пушить обновления, делать пулреквест. Данные манипуляции в основном
            делал через редактор VSCode.
          </span>
        </Grid>
      </Grid>
      <Grid xs={12} container className={cls.Row}>
        <Grid xs={1} className={cls.tsIcon} />
        <Grid xs={10} className={cls.Text}>
          <h5>TypeScript</h5>
          На данный моент в процессе изучения.
        </Grid>
      </Grid>
      <Grid xs={12} container className={cls.Row}>
        <Grid xs={12} className={cls.Text}>
          <h5>Прочее</h5>
          <span>
            Немного поработал с MySQL и PostgreSQL. На Мускуле создавал
            несложные схемы и писал простенькие запросы. Поработал с firebase.{" "}
            <br />
            Конечно для начинающего разработчика, в условиях, что не к кому
            обратиться за помощью - firebase - это довольно сложное апи для
            работы... Однако небольших успехов в этом конечно добился.
          </span>
        </Grid>
      </Grid>
      <Grid xs={12} container className={cls.Row}>
        <Grid xs={12} className={cls.Text}>
          <h5>К чему стремлюсь</h5>
          <span>
            В дальнейшем планирую изучить Next.js, GraphQL (Apollo client) и
            написание тестов + параллельно подтягивать чистый JS.
          </span>
        </Grid>
      </Grid>
    </>
  );
};

const Experience = () => {
  return (
    <>
      <Grid xs={12} className={cls.Skills}>
        Опыт работы
      </Grid>
      <hr style={{ width: "100%", border: "1px solid #fffe0080" }} />
      <Grid xs={12} container className={cls.Row}>
        <Grid xs={12} container className={`${cls.Text} ${cls.Row}`}>
          <h5>ИФНС №46</h5>
          <span>
            Сначала принимал документы на регистрацию и помогал администраторам
            по залу, затем мне предложили стать этим самым администратором.
            Поработав в 46-ой, понял, что это не совсем то, чем я бы хотел
            заниматься.
          </span>
        </Grid>
        <Grid xs={12} container className={`${cls.Text} ${cls.Row}`}>
          <h5>МФЦ</h5>
          <span>
            Устроившись в МФЦ и проработав там буквально несколько месяцев
            уволился по тем же причинам, что и из 46.
          </span>
        </Grid>
        <Grid xs={12} container className={`${cls.Text} ${cls.Row}`}>
          <h5>МИ ФНС России по ЦОД</h5>
          <span>
            Занимался: <br /> 1. Организацией совещаний в Центральном аппарате
            ФНС России, <br />
            2. Принимал участие в совещаниях,
            <br /> 3. Вел протоколы,
            <br /> 4. Участвовал в процессе контроля исполнения этих протоколв
            Генеральным подрядчиком и самим ЦА,
            <br /> 5. Осуществлял форматно-логический контроль заявок,
            подаваемых на разрботку и модернизацию ПО. <br />
            6. Составлял официальные письма. <br />
            За время работы самостоятельно изучил Excel до достаточно высокого
            уровня. Автоматизировал большую часть работы отдела.
          </span>
        </Grid>
        <Grid xs={12} container className={`${cls.Text} ${cls.Row}`}>
          <h5>МИ ФНС России по ЦОД №2</h5>
          <span>
            После разделения инспекции на 2 ЦОДа, мой отдел перешел в ЦОД №2.
            <br /> В связи с добросовестным исполнением своих должностных
            обязанностей и большим вкладом в оптимизацию работы отдела
            неофициально исполнял обязанности начальника отдела на время
            отсутствия своего руководителя. <br />
            Трижды получал предложение о переводе в Центральный аппарат ФНС
            России в Управление модернизации налоговых органов. <br /> По моей
            инициативе, поддержанной начальником инспекции, приступил к
            реализации внутреннего портала, на котором должны были формироваться
            отчеты всех отделов. Около года занимался разработкой данного
            портала, однако в конечном итоге получил предложение в связи с
            произодственной необходимостью стать заместителем начальника своего
            прошлого отдела.
            <br />
            Уволился из ЦОДа по причине того, что данная работа уже не была
            связана с веб-разработкой и отсутствием возможностей развиваться
            профессионально в рамках данного направления.
          </span>
        </Grid>
      </Grid>
    </>
  );
};

const LernProject = () => {
  return (
    <>
      <Grid xs={12} className={cls.Skills}>
        Учебные проекты
      </Grid>
      <hr style={{ width: "100%", border: "1px solid #fffe0080" }} />
      <Grid container xs={12} className={cls.Row} justify="space-between">
        <a
          href="https://portfolio-68eec.web.app/"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Box className={cls.ProjectBox}>
            <Box className={cls.ProjectBody}>
              Практиковал: <br />
              1. Регистрацию на сайте, <br /> 2. Взаимодействие с сервером,{" "}
              <br />
              3. Работу с формами, <br /> 4. Работу с Redux, <br /> 5. Работу с
              Хуками,
              <br />
              6. Создание сложных компонентов (Слайдер + Пагинация)
              <br />
            </Box>
            <Box className={cls.ProjectTitle}>Приложение 1</Box>
          </Box>
        </a>
        <NavLink
          to="/application2"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Box className={cls.ProjectBox}>
            <Box className={cls.ProjectBody}>
              Практиковал: <br />
              1. TypeScript,
              <br />
              2. Создание сложных компонентов (Таблица и Форма),
              <br />
              3. Работу с хуками useRef и useContext
              <br />
            </Box>
            <Box className={cls.ProjectTitle}>
              Приложение 2<br /> (в процессе изучения)
            </Box>
          </Box>
        </NavLink>
      </Grid>
    </>
  );
};
