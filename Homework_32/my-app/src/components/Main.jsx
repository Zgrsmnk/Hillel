import { Typography, Box } from "@mui/material";

const Main = () => {
  return (
    <>
      <Box component="main">
        <Typography variant="h4" component="h2" sx={{ textAlign: "start" }}>
          Main
        </Typography>
        <p>
          Привіт! Мене звати Женя, я родом з Києва. Маю наступні навички: Вмію
          створювати прості вебсторінки на HTML та CSS. Пишу базову логіку на
          JavaScript. Створюю додатки на React. Використовую React Hooks
          (useState, useEffect). Працюю з компонентами та props. Використовую
          Redux Toolkit для зберігання стану. Маю початковий досвід роботи з Redux
          Thunk та Redux Saga. Отримую та відправляю дані через API (fetch).
          Працюю з формами через React Hook Form. Використовую Material UI для
          створення інтерфейсів. Працюю з Git та GitHub.
        </p>
      </Box>
    </>
  );
};

export default Main;
