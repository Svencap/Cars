import useGetDetailCar, {
  DETAIL_CAR_KEY,
} from "@/api/hooks/query/cars/useGetDetailCar";
import Container from "@/components/UI/Container";
import { Box, Button, Stack, Typography, styled } from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/router";

const StyledNextImage = styled(Image)(() => ({
  maxWidth: "100%",
  maxHeight: "100%",
  objectFit: "contain",
}));

export default function DetailInfoPage() {
  const { query, push } = useRouter();
  const id = query.id as string;
  const queryClient = useQueryClient();
  const queryCache = queryClient.getQueryCache();
  const { data } = useGetDetailCar(id, {
    initialData: queryCache.get(`[${DETAIL_CAR_KEY}]`)?.state.data,
  });
  const title = data?.data?.title;
  const brand = data?.data?.brand;
  const model = data?.data?.model;
  const color = data?.data?.color;
  const year = data?.data?.year;
  const engineType = data?.data?.engineType;
  const transmisson = data?.data?.transmisson;
  const powerReserve = data?.data?.powerReserve;
  const imageSrc = data?.data?.image || "";

  function handleRedirectToMainPage() {
    push("/");
  }

  return (
    <Container>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        pt="80px"
        gap="30px"
        flexWrap="wrap"
      >
        <Box
          maxWidth="700px"
          maxHeight="480px"
          width="100%"
          height="100%"
          position="relative"
        >
          <StyledNextImage
            src={imageSrc}
            priority
            width={700}
            height={480}
            alt="detail car image"
          />
        </Box>
        <Stack gap="20px">
          <Typography variant="h3">Название - {title}</Typography>
          <Typography variant="h3">Бренд - {brand}</Typography>
          <Typography variant="h3">Модель - {model}</Typography>
          <Typography variant="h3">Цвет - {color}</Typography>
          <Typography variant="h3">Год выпуска - {year}</Typography>
          <Typography variant="h3">Тип двигателя - {engineType}</Typography>
          {engineType !== "Электрический" && (
            <Typography variant="h3">Трансмиссия - {transmisson}</Typography>
          )}
          {engineType === "Электрический" && (
            <Typography variant="h3">
              Запас хода (в км) - {powerReserve}
            </Typography>
          )}
          <Button variant="dark" onClick={handleRedirectToMainPage}>
            Вернуться на главную
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
