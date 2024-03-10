import CustomCard from "@/components/UI/Card";
import { CarOnFront } from "@/types";
import {
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";

interface CardCardProps {
  car: CarOnFront;
}

export default function CarCard({ car }: CardCardProps) {
  const title = car.title;
  const image = car.image;
  const brand = car.brand;
  const model = car.model;
  const year = car.year;
  const id = car.readbleId;
  const { push } = useRouter();

  function redirectToDetailCar() {
    push(`/${id}`);
  }
  return (
    <CustomCard sx={{ flex: "1 1 25%", maxWidth: "400px" }}>
      {image && (
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt="green iguana"
        />
      )}
      <CardActionArea onClick={redirectToDetailCar}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Stack direction="column">
            <Typography variant="body2" color="text.secondary">Бренд - {brand}</Typography>
            <Typography variant="body2" color="text.secondary">Модель - {model}</Typography>
            <Typography variant="body2" color="text.secondary">Год выпуска - {year}</Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </CustomCard>
  );
}
